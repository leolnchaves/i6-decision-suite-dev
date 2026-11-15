var e=`---
product: "forecasting"
---

## Who is it for? {#para-quem}
keywords: who is it for, audience, companies, sales, planning
Forecasting serves small, medium and large companies that need to plan how much they will sell. The forecast supports purchasing, production and sales with a plan running from the total down to the SKU. Confidence, risk and comparison with actual sales show where to follow the number and where to review it.

## What data do I need to send? {#dados}
keywords: data, what data, send data, required data, history, customers, products
Sales, Customers and Products are required to generate the forecast. Order history supports the analysis, while customer and product attributes provide the planning levels. Targets and sell-out and inventory data are optional. Targets enable feasibility checks, while customer sales and inventory help improve forecasting at the customer level.

## How does it integrate with my systems? {#integracao}
keywords: integrate, integration, systems, files, submission
Data Ingestion brings together Sales, Customers and Products files, plus Targets and Sell-out and inventory when used. The platform validates file formats and shows the progress of received files. Public sources do not describe connectors for specific systems or establish automatic synchronization with every system a company may use.

## How long does it take to get started? {#inicio}
keywords: get started, how long, timeline, getting started, implementation, timing, preparation
Public sources do not give a fixed time to get started. Generation becomes available once Sales, Customers and Products have been processed. Data Ingestion checks whether history and sales regularity support forecasting at each level. Generation runs on the platform, so you can leave the screen and receive a notification when it finishes.

## What does Forecasts show? {#previsoes}
keywords: forecasts, months, horizon, volume
Forecasts lets you navigate from the total through configured levels, with base and target-adjusted forecasts. The website presents horizons of 1, 3, 6 and 12 months; availability depends on configuration and data. The view shows the first month, the horizon total and comparison with the same months in the previous year.

## How do I use the likely range? {#faixa-provavel}
keywords: likely range, risk, stockouts, inventory
The likely range expresses uncertainty around the forecast instead of presenting one number as certain. Planning at the upper bound protects against stockouts; planning at the lower bound protects against idle inventory. On the dashboard, forecast versus actual shows history, the range and the current month to support the planning risk decision.

## How do market and channel data contribute? {#mercado}
keywords: market, channel, sell-out, inventory
The forecast can go beyond the company’s own history using market and sell-out data that show category demand. Sell-in, distributor data and channel inventory help explain how much still needs to sell through. This perspective connects the target to market growth and the share the company wants to win in that market.

## How does the total flow down to SKU? {#niveis}
keywords: levels, hierarchy, cascade, reconciliation
Levels are defined by the columns in submitted data and the order chosen in settings. The forecast opens from total to detail and keeps sums consistent between levels. Purchasing, production and sales can therefore work from the same plan and investigate a series’ composition through the next level of the hierarchy.

## Why this forecast? {#explicacao}
keywords: explanation, trend, seasonality, alerts
Each series presents the reasons behind the number, from broad drivers to specific effects. Trend shows the direction of sales without the monthly effect; seasonality shows months above or below the annual average. Seasonal peaks, changes versus the previous month and deviation alerts help explain changes before the plan is put into action.

## Dashboard: is the forecast performing well? {#painel}
keywords: dashboard, error, bias, performance
The dashboard summarizes forecast error, bias, high-confidence volume and series requiring review. Error helps track quality against the previous cycle. Negative bias indicates a tendency to forecast below actual sales, creating stockout risk; positive bias indicates forecasting above actual sales, creating idle inventory risk. These indicators show where to investigate before following the plan.

## How do I track accuracy and improvement? {#acuracia}
keywords: accuracy, improvement, horizon, errors
Quality is measured every cycle, by level and horizon. Confidence views show how far the forecast can be used; accuracy and bias trends indicate whether it is improving. The largest-error view identifies segments requiring investigation, so the quality of the total is not mistaken for a guarantee of quality for every individual series.

## How much of the portfolio is predictable? {#confianca}
keywords: confidence, abc curve, predictability, volume
Each series receives a Gold, Silver, Bronze or Low predictability badge. Crossing confidence with the ABC curve shows confidence alongside sales importance, in volume and series counts. The high-confidence indicator covers volume in Gold and Silver. This helps focus review on the risks that matter most to the overall business plan.

## How does sales regularity affect the plan? {#regularidade}
keywords: regularity, intermittency, inventory, sporadic sales
The dashboard shows how much of the portfolio sells every month, in most months or in only a few months, considering products and volume. Sporadic sales are harder to forecast and require attention to inventory policy. Regularity complements confidence: looking only at the total is insufficient when items follow different purchase patterns.

## How does Review work? {#revisao}
keywords: review, anomalies, priorities, read only
Review organizes series requiring checks for low predictability, importance within curve A, cycle-to-cycle changes, seasonal deviations, anomalies or targets above the range. A series can be opened in Forecasts for investigation. In this version, Review is read-only: it does not allow forecast editing or marking a series as reviewed after investigation.

## Is the target achievable? {#metas}
keywords: targets, feasibility, base forecast, comparison
Targets compares the submitted target, base forecast and likely range for the period. Above the upper bound, the target is tight; below the lower bound, loose; between them, within the range. The target-adjusted forecast considers that objective and remains consistent between levels. Without a target file, there is no cycle target to compare.

## How does the target reach sales execution? {#assortment}
keywords: execution, sales rep, point of sale, breakdown
With Assortment, the target can reach sales reps and points of sale through the Smart Order. The connection between the products uses their shared levels to show how far the target flows down. This mapping is read-only and follows changes to product levels; it does not promise connectivity to every external structure.

## How do I know whether the data is sufficient? {#ingestao}
keywords: data ingestion, validation, short history, missing data
Data Ingestion shows received files, stage, date and outcome. For each level, it presents months of history, sales regularity and whether forecasting is possible, with a reason and next action. Short history, sparse sales, insufficient volume or missing required data can prevent forecasting. The screen helps locate the problem before using the result.

## What can I configure? {#configuracoes}
keywords: settings, horizons, rules, evaluation
Settings organizes the cascade of levels, available horizons, review rules and criteria for series to enter the model. It also brings together the width of the likely range and confidence assessment criteria. There is no separate training or connections menu item: data preparation and rules are handled within the product’s own screens.
`;export{e as default};