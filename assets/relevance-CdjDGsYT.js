var e=`---
product: "relevance"
---

## Para quem é? {#para-quem}
keywords: para quem, perfil, público, loja virtual, comércio eletrônico, marketplace
O **Relevance** é voltado a pequenos, médios e grandes e-commerces, incluindo lojas e marketplaces. Ele decide o que apresentar em cada interação usando catálogo, comportamento observado e contexto. A recomendação atende visitantes anônimos e logados. O ponto de partida é o catálogo da operação, sem exigir meses de histórico para começar a recomendar.

## Quais dados eu preciso enviar? {#dados}
keywords: dados, quais dados, enviar dados, catálogo, histórico, dados necessários, produtos
O **catálogo atual de produtos é obrigatório** e representa os itens disponíveis para recomendação. O histórico de eventos é opcional: ele ajuda a personalizar os modelos com o comportamento observado no seu negócio. Sem histórico, o Relevance usa o modelo do mercado escolhido. A validação mostra cobertura dos atributos, avisos e interpretação do conteúdo antes da confirmação.

## Como se integra aos meus sistemas? {#integracao}
keywords: integrar, integração, canais, sistemas, implantação
O catálogo pode entrar por arquivo ou integração. As decisões do **Relevance** são consumidas por API, SDK ou comunicação entre servidores e seguem prontas para os seus canais executarem. A documentação apresenta a jornada de implementação passo a passo. O retorno de interações e resultados observados faz parte do ciclo de aprendizado e medição das recomendações.

## Quanto tempo leva para começar? {#inicio}
keywords: começar, quanto tempo, início, prazo, implantação, primeiros passos
Para começar com o **Relevance**, a jornada passa pela escolha do mercado, envio e validação do catálogo, preparação do modelo e integração das recomendações. Não é necessário histórico para iniciar. O tempo de treinamento varia com o volume de dados e pode passar de algumas horas. Esse tempo não representa um prazo total de implantação, que não está definido nas fontes públicas.

## Como o modelo entende meu negócio? {#modelo}
keywords: modelo, mercado, domínio, interpretação
A escolha do mercado define o vocabulário, as categorias e a interpretação do catálogo no **Relevance**. Moda e bens de consumo, por exemplo, exigem leituras diferentes dos atributos dos produtos. Essa escolha inicial vale para a empresa inteira. Assim, o mesmo catálogo é interpretado no contexto da operação, em vez de ser tratado apenas como uma lista de itens.

## O que vejo na Ingestão de Dados? {#ingestao}
keywords: ingestão, validação, avisos, qualidade, envio
A **Ingestão de Dados** reúne catálogo, histórico de eventos e acompanhamento dos envios. Você consulta registros recebidos, válidos e com problemas, cobertura por atributo e prévia da interpretação. Erros bloqueantes precisam ser corrigidos na origem antes de reenviar. Avisos de qualidade ajudam a avaliar a personalização. Arquivo recebido não significa personalização atualizada: os dados precisam ser processados e incorporados à atualização das recomendações.

## Como funciona o aprendizado? {#aprendizado}
keywords: aprendizado, comportamento, evolução, personalização
O **Relevance** combina um modelo proprietário pré-treinado com a calibração para o seu catálogo. A representação dos produtos, a sequência da jornada e os sinais de contexto orientam as decisões. Interações e resultados observados retornam ao modelo para alimentar o aprendizado contínuo. O histórico opcional contribui para a personalização, mas sua ausência não impede as recomendações com o modelo do mercado escolhido.

## Para que serve Treinamento e Tokens? {#treinamento}
keywords: treinamento, preparação, acesso, atualização
A área **Treinamento e Tokens** acompanha a preparação do modelo e o acesso às recomendações. O treinamento usa catálogo e histórico já processados para atualizar as recomendações; um envio ainda em processamento não está pronto para essa etapa. O acompanhamento permite verificar o andamento mesmo após sair da tela. A disponibilidade dos controles depende da situação apresentada na operação, sem presumir que toda ação esteja liberada.

## Como funcionam as vitrines? {#vitrines}
keywords: vitrines, recomendações, semelhantes, compre junto
As **Vitrines** definem onde e como recomendar. A Home apresenta usos como Exclusivo para você, Itens semelhantes, Compre junto e Compre novamente, distribuídos pela entrada, página de produto, carrinho e checkout. São indicações de posicionamento, não locais obrigatórios. Na tela de trabalho, a configuração disponível depende dos modelos conectados e dos controles habilitados; a apresentação no site não significa que toda opção esteja ativa na operação.

## O que mostra o Painel? {#painel}
keywords: painel, indicadores, receita atribuída, pedidos, ticket médio
O **Painel** reúne resultados das recomendações no período selecionado: receita atribuída, pedidos atribuídos, itens vendidos via recomendação e ticket médio atribuído. Esses indicadores permitem avaliar contribuição financeira, volume e perfil das compras relacionadas às recomendações, segundo a regra de atribuição da plataforma. Medição incompleta ou dado ausente não equivale a resultado zero e deve ser considerado antes de comparar períodos.

## Como ler a conversão e a participação? {#conversao}
keywords: conversão, cliques, carrinho, compras, participação
**Compras por 100 cliques** compara as taxas entre etapas com e sem recomendação. **Peso da recomendação em cada etapa** mostra sua participação nos eventos registrados. Juntos, ajudam a localizar diferenças entre clique, carrinho e compra e a investigar gargalos. As comparações descrevem o período observado: não provam causa nem garantem resultados futuros. Bases pequenas e dados ausentes exigem cuidado na interpretação.

## Como acompanhar a evolução e as vitrines? {#desempenho}
keywords: desempenho, evolução, tendência, comparação, vitrine
**Performance das recomendações** mostra a evolução dos resultados ao longo do tempo. As visões de performance da vitrine e por vitrine permitem comparar pontos de exposição e períodos. A comparação de conversão com a navegação sem recomendação ajuda a priorizar revisões. Ausência recente de cliques pode indicar necessidade de verificar a exibição ou a integração, sem concluir automaticamente a causa do problema.

## Resultado observado ou simulação? {#oportunidade}
keywords: simulação, cenário, oportunidade, projeção
**Resultado da recomendação** separa o que já foi observado do que poderia acontecer. A parte observada compara a participação das recomendações nos cliques e nas compras. A simulação estima um cenário de maior participação nos cliques, mantendo taxas históricas. Ela ajuda a planejar um teste de expansão, mas **não é promessa de resultado**: novos cliques podem se comportar de forma diferente dos atuais.

## Como avaliar produtos e cobertura? {#cobertura}
keywords: cobertura, catálogo, cauda longa, produtos recomendados
O desempenho dos produtos recomendados organiza os itens em três visões: recomendados, engajados e convertidos. **Cobertura e distribuição** mostra itens elegíveis, itens recomendados, alcance do catálogo, cobertura da cauda longa e distribuição por faixas de vendas. A leitura conjunta ajuda a identificar concentração nos produtos mais populares e variedade pouco explorada. Esses dados orientam quais produtos e vitrines merecem revisão.

## O que encontro em Documentação e Suporte? {#documentacao}
keywords: documentação, suporte, orientação, implementação
**Documentação e Suporte** orienta a implantação do Relevance. A jornada publicada apresenta os passos de integração, o consumo das recomendações e o retorno dos resultados observados. É a referência para entender como conectar a decisão aos canais da operação. Essa área complementa as telas de ingestão, treinamento e vitrines; não substitui a validação dos dados nem confirma que uma integração já esteja funcionando.
`;export{e as default};