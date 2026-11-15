var e=`---
product: "pricing"
---

## Para quem é? {#para-quem}
keywords: para quem, perfil, empresas, varejo, indústria, margem, giro, conversão, licitações
O **Pricing** é para pequenas, médias e grandes empresas que precisam decidir preço com contexto: por SKU, por loja, por sessão ou por item de edital. Ele reúne quatro decisões: **PRICE-TO-MARGIN** (capturar margem), **PRICE-TO-TURNOVER** (acelerar o giro sem destruir a margem), **PRICE-TO-CONVERSION** (preço contextual em cada sessão) e **Licitações** (o lance com mais chance de ganhar). Em todas, o preço respeita as suas regras comerciais, em vez de aplicar o mesmo preço para tudo.

## Quais dados eu preciso enviar? {#dados}
keywords: dados, quais dados, enviar dados, histórico, estoque, concorrência, demanda, custos, margem mínima, edital
Para as decisões de preço, o site cita histórico de preço e volume, estoque, concorrência e previsão de demanda, além das regras que você define: margem mínima, política comercial e cadência. Em **Licitações**, você envia os itens dos editais que vai disputar, com o contexto da licitação. Enviar também o **custo e a margem mínima** de cada item faz o lance nunca ficar abaixo do seu piso; sem o custo, o único limite é o seu menor preço histórico.

## Como se integra aos meus sistemas? {#integracao}
keywords: integrar, integração, sistemas, arquivo, exportação, envio
Em **Licitações**, a tela de Ingestão de Dados mostra o arquivo que você envia para receber os lances: uma linha por item de edital, com o contexto da licitação. Hoje o time da i6 recebe esse arquivo por você. Os lances sugeridos podem ser exportados em lista para você lançar. Para as decisões de margem, giro e conversão, o site não detalha conectores específicos; esse desenho é feito com o nosso time.

## Quanto tempo leva para começar? {#inicio}
keywords: começar, quanto tempo, início, prazo, implantação, preparação, primeiros lances
O site não define um prazo de implantação para o **Pricing**. O que se sabe é o caminho: em Licitações, você prepara o arquivo com os itens dos editais (e, se quiser, custo e margem mínima), o time da i6 recebe o arquivo, e cada envio atualiza os lances sugeridos. Para estimar o prazo no seu caso, o melhor caminho é uma conversa com o nosso time.

## PRICE-TO-MARGIN: margem por SKU {#margem}
keywords: sku, faixa recomendada, preço ótimo, elasticidade, alternativas, margem
No **PRICE-TO-MARGIN**, o modelo mede como a demanda de cada SKU reage ao preço, projeta o volume e simula cenários até encontrar a melhor faixa. Para cada SKU você recebe o **preço ótimo**, a faixa recomendada com intervalo de confiança e alternativas. A margem mínima e a banda competitiva que você define são sempre respeitadas.

## PRICE-TO-TURNOVER: giro sem queimar margem {#giro}
keywords: giro, markdown, remarcação, loja, cluster, ciclo de vida, estoque
No **PRICE-TO-TURNOVER**, o Pricing sugere o preço e a régua de **markdown progressivo** por loja, região ou cluster, acompanhando o ciclo de vida de cada produto. O objetivo é acelerar o giro do estoque sem destruir a margem: remarcar no momento e na intensidade certos, em vez de uma liquidação igual para todos.

## PRICE-TO-CONVERSION: o preço de cada sessão {#conversao}
keywords: sessão, tempo real, carrinho, conversão, preço contextual, e-commerce
No **PRICE-TO-CONVERSION**, os sinais da sessão viram um preço contextual em tempo real, sempre dentro do espaço de preço que você permite. A resposta chega em milissegundos, só com preços dentro da sua margem, e o modelo aprende com cada conversão para melhorar as próximas decisões.

## Licitações: o lance com mais chance de ganhar {#licitacoes}
keywords: editais, lance, pregão, chance de ganhar, lucro, cotação
Em **Licitações**, cada item do edital recebe um preço sugerido e a **chance de ganhar** em cada nível de lance. A cotação do órgão funciona como teto. Quando você envia o custo, o lance de maior lucro vem destacado e a sua margem vira limite: o lance nunca desce abaixo do seu piso.

## O que puxou cada preço {#explicacao}
keywords: fatores, explicação, peso, sazonalidade, resultado, recomendado
O Pricing mostra o **peso de cada fator** na sugestão de preço, destaca onde as vendas acontecem abaixo do preço típico (onde o preço escapa hoje) e compara o resultado real com o recomendado. Assim, cada sugestão vem com o porquê, e você acompanha se seguir a recomendação trouxe o resultado esperado.

## Seus dados e suas regras {#regras}
keywords: regras, cadência, política comercial, margem mínima, limites
O Pricing trabalha com histórico de preço e volume, estoque, concorrência e previsão de demanda. Você define a **margem mínima**, a **política comercial** e a **cadência** de cada decisão. O modelo sugere preços sempre dentro dessas regras.

## Painel de Licitações: o que está em disputa {#painel}
keywords: painel, licitações em disputa, itens, produtos, alertas, visão geral
O **Painel** de Licitações responde: quanto lançar em cada item e onde prestar atenção? Ele mostra as **licitações** abertas em que pelo menos um item já tem lance sugerido, os **itens** que você pode disputar agora, os **produtos** do seu catálogo que aparecem nesses itens e a parte dos **itens com alerta**. A recomendação é começar pelos itens com alerta: eles pedem a sua revisão antes do lance.

## Painel: custo e margem {#painel-custo-margem}
keywords: custo, margem, piso, margem esperada, menor preço, rentabilidade
O quadro **Custo e margem** mostra onde o preço encontra os seus limites: **itens com piso** (o lance sugerido para no seu piso e não desce mais), itens **abaixo do piso** (para ganhar, você teria de lançar abaixo dele; decida se vale disputar), a **margem esperada** lançando os preços sugeridos e os itens **abaixo do seu menor preço** já praticado, para revisar antes de lançar. Sem o custo, o lance é escolhido só pela chance de ganhar.

## Painel: onde o preço vencedor fica {#painel-preco-vencedor}
keywords: preço vencedor, cotação, região, comprador, faixa, fatores
O Painel mostra o **preço vencedor em relação à cotação**: lance perto da cotação quase sempre perde, então veja onde o vencedor costuma ficar. Mostra também o **preço vencedor por região e comprador** (estado, tipo de órgão, porte da cidade e condição do edital), a **faixa do preço vencedor por produto** nos últimos 12 meses e **o que mais pesa no preço**, para você ajustar o lance pelos fatores que mais explicam o resultado.

## Painel: cobertura e qualidade {#painel-qualidade}
keywords: cobertura, qualidade, sem cotação, chance confiável, alertas, confiança
O quadro **Cobertura e qualidade** mostra quanto do que está em disputa já tem **preço sugerido** (nos demais, você define o lance), os itens **sem cotação** (neles, confira o lance com o histórico do produto), se a **chance de ganhar** mostrada vem se confirmando nas disputas encerradas e os **alertas por tipo**. Quando a chance se confirma, você pode usá-la para escolher o lance.

## Tela Licitações {#tela-licitacoes}
keywords: certames, próximas licitações, lance por item, preço x chance, exportar
A tela **Licitações** lista os próximos certames por data e o lance de cada item. Ao abrir uma licitação, você vê o contexto do edital e, em cada item, o lance sugerido, a chance de ganhar e a faixa de preço da disputa. O gráfico **Preço × chance** mostra que quanto mais alto o lance, menor a chance; o ponto de maior lucro já vem marcado. Você pode trocar o nível de chance, ver o que puxou o preço e os alertas, e exportar a lista para lançar.

## Tela Produtos {#tela-produtos}
keywords: produtos, faixa de preço, tendência, uf, comprador, próximas licitações
A tela **Produtos** mostra um produto por vez: a **faixa do preço vencedor** (perto da faixa baixa você ganha mais vezes, com menos margem; perto da alta, ganha menos vezes), a **tendência em 12 meses** do preço que vence, as diferenças **por UF** e **por comprador** (prefeitura, hospital, consórcio e outros órgãos pagam diferente) e as próximas licitações em que o produto aparece.

## Ingestão de Dados em Licitações {#ingestao}
keywords: ingestão, arquivo, itens de edital, colunas, modelo, envio
A **Ingestão de Dados** mostra o arquivo que você envia para receber os lances, com as colunas e um modelo. Hoje é um único conjunto: os **itens dos editais** que você vai disputar, uma linha por item, com o contexto da licitação. Cada envio atualiza os lances sugeridos. Incluir custo e margem mínima faz o lance respeitar o seu piso. O envio é feito com o apoio do time da i6, que recebe o arquivo por você.

## Configurações de Licitações {#configuracoes}
keywords: configurações, lance padrão, nível de chance, regras do modelo, teto
Em **Configurações**, você escolhe **como vê os lances**: o lance padrão é o primeiro que aparece em cada item, e na licitação você pode trocar o nível de chance quando quiser. A tela também mostra as **regras do modelo**, os limites que ele respeita ao sugerir o lance, como a margem mínima e o teto da cotação. As regras valem a partir do próximo processamento; para mudar alguma, fale com o time da i6.
`;export{e as default};