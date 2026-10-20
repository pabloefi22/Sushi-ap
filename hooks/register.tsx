import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { AgentRow } from '../types'

const PANE = 'panel-agentes'
const agents = atom({ plugin: 'panel-agentes', key: 'agents' } as const, [])

const ICON: Record<string, string> = {
  pending: '…',
  running: '●',
  waiting: '◐',
  idle: '○',
  completed: '✓',
  failed: '✗',
  killed: '✗',
}

async function refresh($: EngineInterface) {
  const live = await $.agent.list()
  await update($, agents, list =>
    list.map(row => {
      const info = live.find(one => one.id === row.id)
      return info ? { ...row, status: info.status } : row
    }),
  )
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'panel-agentes',
      description: 'Abre el panel con lo que hace cada agente',
    })
    void $.ui.open({ id: PANE, title: 'Agentes' })

    return next(e)
  })

  on('command.run', { command: 'panel-agentes' }, async $ => {
    await $.ui.open({ id: PANE, title: 'Agentes' })

    return { text: 'Panel de agentes abierto.' }
  })

  on('agent.spawn', async ($, e, next) => {
    const started = await next(e)
    if (started.agentId) {
      const row: AgentRow = {
        id: started.agentId,
        description: e.description ?? e.prompt.slice(0, 40),
        type: e.subagentType ?? 'general-purpose',
        status: 'running',
        tools: 0,
      }
      await update($, agents, list => [...list, row].slice(-30)).catch(() => {})
    }

    return started
  })

  on('tool.call', async ($, e, next) => {
    if (e.agentId) {
      const id = e.agentId
      await update($, agents, list =>
        list.map(row =>
          row.id === id ? { ...row, lastTool: e.tool, tools: row.tools + 1 } : row,
        ),
      ).catch(() => {})
    }
    const ran = await next(e)
    if (e.tool === 'Agent') await refresh($).catch(() => {})

    return ran
  })

  on('turn.complete', async ($, e, next) => {
    const done = await next(e)
    await refresh($).catch(() => {})

    return done
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text } = $.ui.resolve(e)
    const list = await read($, agents)
    const room = Math.max(1, Math.floor(((e.viewport?.rows ?? 24) - 2) / 2))

    return (
      <Box flexDirection="column">
        {list.length === 0 && <Text dimColor>Ningún agente todavía.</Text>}
        {list.slice(-room).map(row => {
          const isActive = row.status === 'running' || row.status === 'pending'
          return (
            <Box flexDirection="column">
              <Text bold={isActive} dimColor={!isActive}>
                {ICON[row.status] ?? '•'} {row.type}: {row.description}
              </Text>
              <Text dimColor>
                {'  '}
                {isActive ? (row.lastTool ? `usando ${row.lastTool}` : 'arrancando') : row.status}
                {' · '}
                {row.tools} herramientas
              </Text>
            </Box>
          )
        })}
      </Box>
    )
  })
}
