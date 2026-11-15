var e=`---
product: "pricing"
---

## Who is it for? {#para-quem}
keywords: who is it for, audience, companies, retail, industry, margin, turnover, conversion, tenders
**Pricing** is for small, mid-sized and large companies that need to set prices with context: per SKU, per store, per session or per tender item. It brings together four decisions: **PRICE-TO-MARGIN** (capture margin), **PRICE-TO-TURNOVER** (speed up turnover without destroying margin), **PRICE-TO-CONVERSION** (a contextual price in each session) and **Tenders** (the bid with the best chance of winning). In all of them, the price respects your business rules instead of applying the same price to everything.

## What data do I need to send? {#dados}
keywords: data, what data, send data, history, inventory, competition, demand, costs, minimum margin, tender
For pricing decisions, the site lists price and volume history, inventory, competition and demand forecast, plus the rules you define: minimum margin, commercial policy and cadence. In **Tenders**, you send the tender items you will compete for, with the context of each tender. Also sending the **cost and minimum margin** of each item keeps the bid from ever going below your floor; without cost, the only limit is your lowest historical price.

## How does it integrate with my systems? {#integracao}
keywords: integrate, integration, systems, file, export, upload
In **Tenders**, the Data Ingestion screen shows the file you send to receive bids: one row per tender item, with the tender context. Today the i6 team receives this file for you. Suggested bids can be exported as a list for you to submit. For margin, turnover and conversion decisions, the site does not detail specific connectors; that design is done with our team.

## How long does it take to get started? {#inicio}
keywords: get started, how long, start, timeline, implementation, preparation, first bids
The site does not define an implementation timeline for **Pricing**. What is known is the path: in Tenders, you prepare the file with the tender items (and, if you want, cost and minimum margin), the i6 team receives the file, and each upload refreshes the suggested bids. To estimate the timeline for your case, the best path is a conversation with our team.

## PRICE-TO-MARGIN: margin per SKU {#margem}
keywords: sku, recommended range, optimal price, elasticity, alternatives, margin
In **PRICE-TO-MARGIN**, the model measures how demand for each SKU reacts to price, projects volume and simulates scenarios until it finds the best range. For each SKU you get the **optimal price**, the recommended range with a confidence interval, and alternatives. The minimum margin and the competitive band you define are always respected.

## PRICE-TO-TURNOVER: turnover without burning margin {#giro}
keywords: turnover, markdown, store, cluster, life cycle, inventory
In **PRICE-TO-TURNOVER**, Pricing suggests the price and a **progressive markdown** ladder per store, region or cluster, following each product's life cycle. The goal is to speed up inventory turnover without destroying margin: mark down at the right moment and intensity, instead of the same clearance for everyone.

## PRICE-TO-CONVERSION: the price of each session {#conversao}
keywords: session, real time, cart, conversion, contextual price, e-commerce
In **PRICE-TO-CONVERSION**, session signals become a contextual price in real time, always within the price space you allow. The answer arrives in milliseconds, only with prices within your margin, and the model learns from every conversion to improve the next decisions.

## Tenders: the bid with the best chance of winning {#licitacoes}
keywords: tenders, bid, public procurement, chance of winning, profit, quoted price
In **Tenders**, each tender item gets a suggested price and the **chance of winning** at each bid level. The buyer's quoted price works as a ceiling. When you send your cost, the highest-profit bid is highlighted and your margin becomes a limit: the bid never goes below your floor.

## What drove each price {#explicacao}
keywords: factors, explanation, weight, seasonality, result, recommended
Pricing shows the **weight of each factor** in the price suggestion, highlights where sales happen below the typical price (where price leaks today) and compares the actual result with the recommended one. So every suggestion comes with the why, and you can follow whether the recommendation delivered the expected result.

## Your data and your rules {#regras}
keywords: rules, cadence, commercial policy, minimum margin, limits
Pricing works with price and volume history, inventory, competition and demand forecast. You define the **minimum margin**, the **commercial policy** and the **cadence** of each decision. The model always suggests prices within those rules.

## Tenders dashboard: what is in play {#painel}
keywords: dashboard, open tenders, items, products, alerts, overview
The Tenders **Dashboard** answers: how much to bid on each item and where to pay attention? It shows the open **tenders** where at least one item already has a suggested bid, the **items** you can compete for now, the **products** from your catalog in those items and the share of **items with alerts**. The recommendation is to start with the items with alerts: they need your review before bidding.

## Dashboard: cost and margin {#painel-custo-margem}
keywords: cost, margin, floor, expected margin, lowest price, profitability
The **Cost and margin** panel shows where price meets your limits: **items at the floor** (the suggested bid stops at your floor), items **below the floor** (to win, you would have to bid below it; decide whether it is worth competing), the **expected margin** when bidding the suggested prices, and items **below your lowest price** ever practiced, to review before bidding. Without cost, the bid is chosen only by the chance of winning.

## Dashboard: where the winning price lands {#painel-preco-vencedor}
keywords: winning price, quoted price, region, buyer, range, factors
The Dashboard shows the **winning price relative to the quoted price**: a bid close to the quote almost always loses, so see where the winner usually lands. It also shows the **winning price by region and buyer** (state, type of agency, city size and tender condition), the **winning price range per product** over the last 12 months and **what weighs most on price**, so you adjust the bid by the factors that best explain the result.

## Dashboard: coverage and quality {#painel-qualidade}
keywords: coverage, quality, no quote, reliable chance, alerts, confidence
The **Coverage and quality** panel shows how much of what is in play already has a **suggested price** (for the rest, you set the bid), the items **without a quoted price** (check the bid against the product history), whether the displayed **chance of winning** has been confirmed in closed tenders, and **alerts by type**. When the chance holds up, you can use it to choose your bid.

## Tenders screen {#tela-licitacoes}
keywords: upcoming tenders, bid per item, price vs chance, export
The **Tenders** screen lists upcoming tenders by date and the bid for each item. When you open a tender, you see its context and, for each item, the suggested bid, the chance of winning and the price range in play. The **Price × chance** chart shows that the higher the bid, the lower the chance; the highest-profit point comes marked. You can switch the chance level, see what drove the price and the alerts, and export the list to submit.

## Products screen {#tela-produtos}
keywords: products, price range, trend, state, buyer, upcoming tenders
The **Products** screen shows one product at a time: the **winning price range** (near the low end you win more often, with less margin; near the high end, you win less often), the **12-month trend** of the winning price, the differences **by state** and **by buyer** (city halls, hospitals, consortia and other agencies pay differently) and the upcoming tenders where the product appears.

## Data Ingestion in Tenders {#ingestao}
keywords: ingestion, file, tender items, columns, template, upload
**Data Ingestion** shows the file you send to receive bids, with its columns and a template. Today it is a single set: the **tender items** you will compete for, one row per item, with the tender context. Each upload refreshes the suggested bids. Including cost and minimum margin makes the bid respect your floor. The upload is done with the support of the i6 team, which receives the file for you.

## Tenders settings {#configuracoes}
keywords: settings, default bid, chance level, model rules, ceiling
In **Settings**, you choose **how you see bids**: the default bid is the first one shown for each item, and in the tender you can switch the chance level at any time. The screen also shows the **model rules**, the limits it respects when suggesting a bid, such as the minimum margin and the quoted-price ceiling. Rules apply from the next processing run; to change one, talk to the i6 team.
`;export{e as default};