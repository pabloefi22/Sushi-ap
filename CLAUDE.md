# Sushi Ap — Listados de compras

Cuando el usuario envíe un listado de compras (normalmente lunes, miércoles y viernes, aunque puede variar), ordénalo con este formato.

## Locales

Cada local va en un bloque separado, con su encabezado:

```
Sushi Ap <Local> <dd/mm/aaaa>
```

Locales conocidos:
- Playa Brava
- Héroes de la Concepción

Si el usuario no indica la fecha, usa la fecha del día del pedido.

## Secciones (en este orden)

1. **Promar** (proveedor de pescados, congelados e insumos de cocina)
   - Pescados y mariscos de proveedor: pescado blanco, salmón, camarón
   - Kikkoman (balde), gyozas, cerdo
   - Harina (saco), aluminio, film, aluminio handroll
   - Nori, vinagre de manzana, salsa de soya, panko, kanikama, palmitos, queso cheddar
   - Aceite industrial para freír (bidón, el de las papas)
2. **Feria**
   - Verduras y frutas: tomate, maracuyá, frutilla, papas, cebollín, choclo entero, cebolla morada/blanca, camote, zanahoria, ajo, morrón, coliflor, diente de dragón, cilantro, limón
   - Calugas: caluga de carne, caluga de ave (siempre en Feria, no en Carnicería)
   - Abarrotes: aceite normal (el de sushi), azúcar (display), champiñón en lata, sal, merkén, ajo en polvo, ajinomoto, leche evaporada, mayonesa
   - Limpieza y papel (el pack Confort normal va aquí; el Confort de baño va en DPS o J.O): toalla Nova, antigrasa, paños de cocina, chispero, virutilla, esponja lavaloza, cloro gel, lavaloza, Clorox, servilletas, Poet, paños para trapear, Confort
3. **Carnicería** (solo si hay algo): pollo, carne (incluida la carne para mechar) y choclo en bolsa congelado (las calugas NO van aquí, van en Feria)
4. **Mamá Pilar**
   - Pulpo, loco
5. **Otros**
   - Palta (caja), lechuga, queso crema
6. **DPS o J.O** (desechables, plásticos y menaje)
   - Bolsa de basura, bolsas para salsas, vasos plásticos y otros plásticos
   - Envases (de gohan, de 2), pocillos, salseros para mesa
   - Palillos de sushi, guantes (M / L)
   - Rollos para impresora, Confort de baño
   - Aluminio y film siguen en Promar

Si una sección queda vacía, no la pongas. Si un producto no calza en ninguna, ponlo en **Otros** y avísale al usuario.

## Reglas de formato

- Una línea por producto: `<cantidad> <producto>` (ej.: `2 kilos de pescado blanco`).
- Respeta las palabras del usuario. Corrige solo los espacios pegados (`1KG TOMATE` → `1 kg tomate`).
- Dentro de Feria, agrupa en este orden: verduras y frutas, luego calugas, luego abarrotes, luego limpieza.
- El usuario a veces anota el stock que queda ("quedan 2"): no lo incluyas, deja solo lo que hay que comprar.
- Corrige la ortografía (quezo → queso, zanarolla → zanahoria, lemon → limón).
- Si algo queda pendiente para otro día (ej.: palta pendiente para el martes), anótalo entre paréntesis en esa línea.
- "1 cada 1" en morrón significa 1 morrón de cada color.
- Si falta la cantidad o hay algo ambiguo, márcalo y pregunta.

## Ejemplo de referencia (19/10/2026)

```
Sushi Ap Playa Brava 19/10/2026

Promar:
2 kilos de pescado blanco
1 balde de Kikkoman
1 gyozas de pollo
1 camarón
1 cerdo

Feria:
1 kg tomate
1 kg maracuyá
1 kg frutilla
1 saco papas de La Serena
15 cebollín
4 choclos enteros
1 kg cebolla morada
1 kg camote
1 kilo zanahoria
2 cabezas de ajo
3 morrón rojo
1 kilo caluga de carne
3 display azúcar
4 champiñón en lata
1/4 kilo merkén
1/4 ajo en polvo
1 Ajinomoto
3 kilos sal
10 Nova
2 chispero
6 virutilla
2 pack esponja lavaloza
2 cloro gel
1 lavaloza
1 Clorox
4 servilletas
2 Poet
3 paños para trapear
1 pack Confort

Mamá Pilar:
5 kg pulpo

Otros:
1 caja palta

DPS o J.O:
Envase de gohan
Envase de 2
Pocillos de loza
1 rollo bolsas para salsas
1 bolsa basura grande
1 caja rollos para impresora
```
