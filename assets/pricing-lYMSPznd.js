var e=`---
product: "pricing"
---

## ¿Para quién es? {#para-quem}
keywords: para quién, público, empresas, retail, industria, margen, rotación, conversión, licitaciones
**Pricing** es para pequeñas, medianas y grandes empresas que necesitan decidir precios con contexto: por SKU, por tienda, por sesión o por ítem de licitación. Reúne cuatro decisiones: **PRICE-TO-MARGIN** (capturar margen), **PRICE-TO-TURNOVER** (acelerar la rotación sin destruir el margen), **PRICE-TO-CONVERSION** (un precio contextual en cada sesión) y **Licitaciones** (la oferta con más probabilidad de ganar). En todas, el precio respeta tus reglas comerciales, en lugar de aplicar el mismo precio a todo.

## ¿Qué datos necesito enviar? {#dados}
keywords: datos, qué datos, enviar datos, histórico, inventario, competencia, demanda, costos, margen mínimo, licitación
Para las decisiones de precio, el sitio cita el histórico de precio y volumen, el inventario, la competencia y la previsión de demanda, además de las reglas que defines: margen mínimo, política comercial y cadencia. En **Licitaciones**, envías los ítems de las licitaciones en las que vas a participar, con su contexto. Si también envías el **costo y el margen mínimo** de cada ítem, la oferta nunca queda por debajo de tu piso; sin el costo, el único límite es tu menor precio histórico.

## ¿Cómo se integra con mis sistemas? {#integracao}
keywords: integrar, integración, sistemas, archivo, exportación, envío
En **Licitaciones**, la pantalla de Ingesta de Datos muestra el archivo que envías para recibir las ofertas: una fila por ítem, con el contexto de la licitación. Hoy el equipo de i6 recibe ese archivo por ti. Puedes exportar las ofertas sugeridas en una lista para presentarlas. Para las decisiones de margen, rotación y conversión, el sitio no detalla conectores específicos; ese diseño se hace con nuestro equipo.

## ¿Cuánto tiempo lleva empezar? {#inicio}
keywords: empezar, cuánto tiempo, inicio, plazo, implementación, preparación, primeras ofertas
El sitio no define un plazo de implementación para **Pricing**. Lo que se sabe es el camino: en Licitaciones, preparas el archivo con los ítems (y, si quieres, costo y margen mínimo), el equipo de i6 recibe el archivo y cada envío actualiza las ofertas sugeridas. Para estimar el plazo en tu caso, lo mejor es conversar con nuestro equipo.

## PRICE-TO-MARGIN: margen por SKU {#margem}
keywords: sku, rango recomendado, precio óptimo, elasticidad, alternativas, margen
En **PRICE-TO-MARGIN**, el modelo mide cómo reacciona la demanda de cada SKU al precio, proyecta el volumen y simula escenarios hasta encontrar el mejor rango. Para cada SKU recibes el **precio óptimo**, el rango recomendado con intervalo de confianza y alternativas. El margen mínimo y la banda competitiva que defines siempre se respetan.

## PRICE-TO-TURNOVER: rotación sin quemar margen {#giro}
keywords: rotación, markdown, rebajas, tienda, clúster, ciclo de vida, inventario
En **PRICE-TO-TURNOVER**, Pricing sugiere el precio y una escala de **markdown progresivo** por tienda, región o clúster, siguiendo el ciclo de vida de cada producto. El objetivo es acelerar la rotación del inventario sin destruir el margen: rebajar en el momento y con la intensidad adecuados, en lugar de una liquidación igual para todos.

## PRICE-TO-CONVERSION: el precio de cada sesión {#conversao}
keywords: sesión, tiempo real, carrito, conversión, precio contextual, e-commerce
En **PRICE-TO-CONVERSION**, las señales de la sesión se convierten en un precio contextual en tiempo real, siempre dentro del espacio de precio que permites. La respuesta llega en milisegundos, solo con precios dentro de tu margen, y el modelo aprende de cada conversión para mejorar las siguientes decisiones.

## Licitaciones: la oferta con más probabilidad de ganar {#licitacoes}
keywords: licitaciones, oferta, compras públicas, probabilidad de ganar, ganancia, cotización
En **Licitaciones**, cada ítem recibe un precio sugerido y la **probabilidad de ganar** en cada nivel de oferta. La cotización del organismo funciona como techo. Cuando envías el costo, la oferta de mayor ganancia aparece destacada y tu margen se vuelve límite: la oferta nunca baja de tu piso.

## Qué impulsó cada precio {#explicacao}
keywords: factores, explicación, peso, estacionalidad, resultado, recomendado
Pricing muestra el **peso de cada factor** en la sugerencia de precio, destaca dónde las ventas ocurren por debajo del precio típico (dónde se escapa el precio hoy) y compara el resultado real con el recomendado. Así, cada sugerencia viene con su porqué, y puedes seguir si la recomendación trajo el resultado esperado.

## Tus datos y tus reglas {#regras}
keywords: reglas, cadencia, política comercial, margen mínimo, límites
Pricing trabaja con el histórico de precio y volumen, el inventario, la competencia y la previsión de demanda. Tú defines el **margen mínimo**, la **política comercial** y la **cadencia** de cada decisión. El modelo siempre sugiere precios dentro de esas reglas.

## Panel de Licitaciones: lo que está en disputa {#painel}
keywords: panel, licitaciones abiertas, ítems, productos, alertas, visión general
El **Panel** de Licitaciones responde: ¿cuánto ofertar en cada ítem y dónde prestar atención? Muestra las **licitaciones** abiertas en las que al menos un ítem ya tiene oferta sugerida, los **ítems** que puedes disputar ahora, los **productos** de tu catálogo en esos ítems y la parte de **ítems con alerta**. La recomendación es empezar por los ítems con alerta: necesitan tu revisión antes de ofertar.

## Panel: costo y margen {#painel-custo-margem}
keywords: costo, margen, piso, margen esperado, menor precio, rentabilidad
El cuadro **Costo y margen** muestra dónde el precio encuentra tus límites: **ítems en el piso** (la oferta sugerida se detiene en tu piso), ítems **por debajo del piso** (para ganar tendrías que ofertar por debajo; decide si vale la pena), el **margen esperado** ofertando los precios sugeridos y los ítems **por debajo de tu menor precio** ya practicado, para revisar antes de ofertar. Sin el costo, la oferta se elige solo por la probabilidad de ganar.

## Panel: dónde queda el precio ganador {#painel-preco-vencedor}
keywords: precio ganador, cotización, región, comprador, rango, factores
El Panel muestra el **precio ganador frente a la cotización**: una oferta cerca de la cotización casi siempre pierde, así que mira dónde suele quedar el ganador. También muestra el **precio ganador por región y comprador** (estado, tipo de organismo, tamaño de la ciudad y condición de la licitación), el **rango del precio ganador por producto** en los últimos 12 meses y **lo que más pesa en el precio**, para que ajustes la oferta por los factores que más explican el resultado.

## Panel: cobertura y calidad {#painel-qualidade}
keywords: cobertura, calidad, sin cotización, probabilidad confiable, alertas, confianza
El cuadro **Cobertura y calidad** muestra cuánto de lo que está en disputa ya tiene **precio sugerido** (en los demás, tú defines la oferta), los ítems **sin cotización** (en ellos, revisa la oferta con el histórico del producto), si la **probabilidad de ganar** mostrada se viene confirmando en las licitaciones cerradas y las **alertas por tipo**. Cuando la probabilidad se confirma, puedes usarla para elegir la oferta.

## Pantalla Licitaciones {#tela-licitacoes}
keywords: próximas licitaciones, oferta por ítem, precio vs probabilidad, exportar
La pantalla **Licitaciones** lista las próximas licitaciones por fecha y la oferta de cada ítem. Al abrir una licitación, ves su contexto y, en cada ítem, la oferta sugerida, la probabilidad de ganar y el rango de precio en disputa. El gráfico **Precio × probabilidad** muestra que cuanto más alta la oferta, menor la probabilidad; el punto de mayor ganancia ya viene marcado. Puedes cambiar el nivel de probabilidad, ver qué impulsó el precio y las alertas, y exportar la lista para presentarla.

## Pantalla Productos {#tela-produtos}
keywords: productos, rango de precio, tendencia, estado, comprador, próximas licitaciones
La pantalla **Productos** muestra un producto a la vez: el **rango del precio ganador** (cerca del extremo bajo ganas más veces, con menos margen; cerca del alto, ganas menos veces), la **tendencia en 12 meses** del precio que gana, las diferencias **por estado** y **por comprador** (municipios, hospitales, consorcios y otros organismos pagan distinto) y las próximas licitaciones en las que aparece el producto.

## Ingesta de Datos en Licitaciones {#ingestao}
keywords: ingesta, archivo, ítems de licitación, columnas, plantilla, envío
La **Ingesta de Datos** muestra el archivo que envías para recibir las ofertas, con sus columnas y una plantilla. Hoy es un único conjunto: los **ítems de las licitaciones** en las que vas a participar, una fila por ítem, con el contexto de la licitación. Cada envío actualiza las ofertas sugeridas. Incluir costo y margen mínimo hace que la oferta respete tu piso. El envío se hace con el apoyo del equipo de i6, que recibe el archivo por ti.

## Configuración de Licitaciones {#configuracoes}
keywords: configuración, oferta predeterminada, nivel de probabilidad, reglas del modelo, techo
En **Configuración**, eliges **cómo ves las ofertas**: la oferta predeterminada es la primera que aparece en cada ítem, y en la licitación puedes cambiar el nivel de probabilidad cuando quieras. La pantalla también muestra las **reglas del modelo**, los límites que respeta al sugerir la oferta, como el margen mínimo y el techo de la cotización. Las reglas valen a partir del próximo procesamiento; para cambiar alguna, habla con el equipo de i6.
`;export{e as default};