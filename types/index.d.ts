export type AgentRow = {
  id: string
  description: string
  type: string
  status: string
  lastTool?: string
  tools: number
}

declare module 'claude-code' {
  interface PluginState {
    'panel-agentes': { agents: AgentRow[] }
  }
}
