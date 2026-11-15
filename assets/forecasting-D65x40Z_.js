var e=`---
product: "forecasting"
---

## Para quem é? {#para-quem}
keywords: para quem, perfil, público, empresas, vendas, planejamento
O Forecasting atende pequenas, médias e grandes empresas que precisam planejar quanto vender. A previsão apoia compras, produção e comercial com um plano que vai do total ao SKU. Confiança, risco e comparação com o realizado ajudam a decidir onde seguir o número e onde revisar antes de executar.

## Quais dados eu preciso enviar? {#dados}
keywords: dados, quais dados, enviar dados, dados necessários, histórico, clientes, produtos
Vendas, Clientes e Produtos são obrigatórios para gerar a previsão. O histórico de pedidos sustenta a análise; os atributos dos clientes e produtos permitem abrir os níveis. Meta e dados de sell-out e estoque são opcionais. A meta permite avaliar sua viabilidade, e vendas e estoque no cliente ajudam a previsão nesse nível.

## Como se integra aos meus sistemas? {#integracao}
keywords: integrar, integração, sistemas, arquivos, envio
A Ingestão de Dados reúne os arquivos de Vendas, Clientes e Produtos, além de Meta e Sell-out e estoque quando utilizados. A plataforma valida o formato e mostra o andamento dos arquivos recebidos. As fontes públicas não detalham conectores com sistemas específicos nem autorizam prometer sincronização automática para qualquer sistema.

## Quanto tempo leva para começar? {#inicio}
keywords: começar, quanto tempo, início, implantação, prazo, preparação
As fontes públicas não informam um prazo fixo para começar. A geração é liberada depois que Vendas, Clientes e Produtos estão processados. A Ingestão verifica se o histórico e a regularidade permitem prever em cada nível. A geração ocorre na plataforma; é possível sair da tela e receber o aviso de conclusão.

## O que a tela Previsões mostra? {#previsoes}
keywords: previsões, meses, horizonte, volume
A tela Previsões permite navegar do total aos níveis configurados, com previsão base e com meta. O site apresenta horizontes de 1, 3, 6 e 12 meses; a disponibilidade depende da configuração e dos dados. A visão mostra o primeiro mês, o total do horizonte e a comparação com os mesmos meses do ano anterior.

## Como usar a faixa provável? {#faixa-provavel}
keywords: faixa provável, risco, ruptura, estoque
A faixa provável expressa a incerteza em torno da previsão, em vez de apresentar um único número como certeza. Planejar pelo limite superior protege contra ruptura; pelo inferior, contra estoque parado. No Painel, o gráfico previsto versus realizado mostra o histórico, a faixa e o mês atual para apoiar a escolha de risco do planejamento.

## Como entram mercado e canal? {#mercado}
keywords: mercado, canal, sell-out, estoque
A previsão pode ir além do histórico próprio com dados de mercado e sell-out, que mostram a demanda da categoria. Sell-in, dados de distribuidores e estoque no canal ajudam a entender quanto ainda precisa girar. Essa leitura permite relacionar a meta ao crescimento do mercado e à participação que a empresa quer conquistar.

## Como o total chega ao SKU? {#niveis}
keywords: níveis, hierarquia, cascata, reconciliação
Os níveis são definidos pelas colunas dos dados enviados e pela ordem escolhida na configuração. A previsão abre do total ao detalhe e mantém as somas coerentes entre os níveis. Assim, compras, produção e comercial trabalham com o mesmo plano, podendo investigar a composição de uma série pelo próximo nível da hierarquia.

## Por que esta previsão? {#explicacao}
keywords: explicação, tendência, sazonalidade, alertas
Cada série apresenta os motivos que levaram ao número, do mais geral ao mais pontual. Tendência mostra a direção das vendas sem o efeito do mês; sazonalidade mostra meses acima ou abaixo da média anual. Pico sazonal, variação contra o mês anterior e alertas de desvios ajudam a explicar mudanças antes da execução do plano.

## O Painel: a previsão está boa? {#painel}
keywords: painel, erro, viés, desempenho
O Painel resume erro da previsão, viés, volume em alta confiança e séries para revisar. O erro permite acompanhar a qualidade em relação ao ciclo anterior. Viés negativo indica tendência a prever abaixo do realizado, com risco de ruptura; positivo indica previsão acima, com risco de estoque parado. Os indicadores orientam onde investigar antes de seguir o plano.

## Como acompanhar acurácia e evolução? {#acuracia}
keywords: acurácia, evolução, horizonte, erros
A qualidade é medida a cada ciclo, por nível e horizonte. Os quadros de confiança mostram até onde usar a previsão; a evolução da precisão e do viés indica se ela está melhorando. A visão dos maiores erros localiza recortes que merecem investigação, evitando tratar a qualidade do total como garantia para cada série.

## Quanto da carteira é previsível? {#confianca}
keywords: confiança, curva abc, previsibilidade, volume
Cada série recebe um selo Gold, Silver, Bronze ou Pouca previsibilidade. O cruzamento com a curva ABC mostra confiança junto da importância nas vendas, em volume e número de séries. O indicador de alta confiança reúne volume em Gold e Silver. Isso ajuda a concentrar revisão nos riscos que mais importam para o plano.

## Como a regularidade afeta o plano? {#regularidade}
keywords: regularidade, intermitência, estoque, vendas esporádicas
O Painel mostra quanto da carteira vende todo mês, na maior parte dos meses ou em poucos meses, considerando produtos e volume. Vendas esporádicas são mais difíceis de prever e pedem atenção à política de estoque. A regularidade complementa a confiança: não basta olhar o total quando os itens têm comportamentos de compra diferentes.

## Como funciona a Revisão? {#revisao}
keywords: revisão, anomalias, prioridades, leitura
A tela Revisão organiza séries que pedem conferência por baixa previsibilidade, relevância na curva A, mudanças entre ciclos, desvios sazonais, anomalias ou meta acima da faixa. A série pode ser aberta em Previsões para investigação. Nesta versão, a tela é somente leitura: não permite editar a previsão nem marcar uma série como revisada.

## A meta é alcançável? {#metas}
keywords: metas, viabilidade, previsão base, comparação
Metas compara a meta enviada, a previsão base e a faixa provável no período. Acima do limite superior, a meta fica apertada; abaixo do inferior, folgada; entre eles, dentro da faixa. A previsão com meta considera esse objetivo e mantém coerência entre os níveis. Sem arquivo de metas, essa avaliação não tem uma meta do ciclo para comparar.

## Como a meta chega à ponta? {#assortment}
keywords: execução, vendedor, ponto de venda, desdobramento
Com o Assortment, a meta pode chegar a vendedor e PDV pelo Pedido Inteligente. A conexão entre os produtos usa os níveis em comum para mostrar até onde a meta chega. A configuração dessa correspondência é somente leitura e acompanha mudanças nos níveis dos produtos; não representa uma promessa de conexão com qualquer estrutura externa.

## Como saber se os dados bastam? {#ingestao}
keywords: ingestão, validação, histórico curto, dados faltantes
Ingestão de Dados mostra arquivos recebidos, etapa, data e resultado. Por nível, apresenta meses de histórico, regularidade das vendas e se é possível prever, com motivo e próxima ação. Histórico curto, vendas esparsas, volume insuficiente ou dados obrigatórios ausentes podem impedir a previsão. A tela ajuda a localizar o problema antes de usar o resultado.

## O que posso configurar? {#configuracoes}
keywords: configurações, horizontes, regras, avaliação
Configurações organiza a cascata de níveis, horizontes disponíveis, regras de revisão e critérios de entrada das séries no modelo. Também reúne a largura da faixa provável e os critérios de avaliação da confiança. Não há item separado de treinamento ou conexões no menu: a preparação dos dados e as regras ficam nas telas do próprio produto.
`;export{e as default};