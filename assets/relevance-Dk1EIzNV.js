var e=`---
product: "relevance"
---

## Who is it for? {#para-quem}
keywords: who is it for, audience, online store, ecommerce, marketplace
**Relevance** is for small, medium and large ecommerce operations, including stores and marketplaces. It decides what to present at each interaction using the catalogue, observed behaviour and context. Recommendations serve both anonymous and logged-in visitors. The starting point is the operation’s catalogue, without requiring months of historical data before recommendations can begin.

## What data do I need to send? {#dados}
keywords: data, what data, send data, catalogue, history, required data, products
The **current product catalogue is required** and represents the items available for recommendation. Event history is optional: it helps personalise models using behaviour observed in your business. Without history, Relevance uses the model for the selected market. Validation shows attribute coverage, warnings and how the content was interpreted before confirmation, helping you review the data supplied.

## How does it integrate with my systems? {#integracao}
keywords: integrate, integration, channels, systems, implementation
The catalogue can arrive through a file or integration. **Relevance** decisions are consumed through an API, SDK or server-to-server communication, ready for your channels to execute. Documentation presents the implementation journey step by step. Returning observed interactions and results is part of the recommendation learning and measurement cycle, connecting execution with subsequent decisions.

## How long does it take to get started? {#inicio}
keywords: get started, how long, start, timeline, implementation, first steps
Getting started with **Relevance** involves selecting the market, submitting and validating the catalogue, preparing the model and integrating recommendations. Historical data is not required to begin. Training time varies with data volume and can exceed several hours. This is not an overall implementation timeline: the public sources do not define a fixed end-to-end deployment period.

## How does the model understand my business? {#modelo}
keywords: model, market, domain, interpretation
The market selection defines the vocabulary, categories and catalogue interpretation in **Relevance**. Fashion and consumer goods, for example, require different readings of product attributes. This initial choice applies across the company. The catalogue is therefore interpreted in the context of the operation, rather than treated simply as a list of items without business context.

## What does Data Ingestion show? {#ingestao}
keywords: ingestion, validation, warnings, quality, upload
**Data Ingestion** brings together the catalogue, event history and submission tracking. You can review received, valid and problematic records, attribute coverage and an interpretation preview. Blocking errors must be corrected at the source before resubmission. Quality warnings help assess personalisation. A received file does not mean personalisation has changed: data must be processed and incorporated into a recommendation update.

## How does learning work? {#aprendizado}
keywords: learning, behaviour, improvement, personalisation
**Relevance** combines a proprietary pretrained model with calibration for your catalogue. Product representation, journey sequence and contextual signals guide decisions. Observed interactions and results feed back into the model to support continuous learning. Optional historical data contributes to personalisation, but its absence does not prevent recommendations using the model for the selected market. Learning is connected to what the operation observes.

## What is Training and Tokens for? {#treinamento}
keywords: training, preparation, access, update
**Training and Tokens** tracks model preparation and access to recommendations. Training uses already processed catalogue and historical data to update recommendations; a submission still being processed is not ready for that stage. Progress can be checked after leaving the screen. Control availability depends on the status shown for the operation, so the presence of this area does not mean every action is enabled.

## How do recommendation displays work? {#vitrines}
keywords: displays, recommendations, similar items, bought together
**Recommendation displays** define where and how to recommend. The Home page presents uses such as personalised picks, similar items, bought together and buy again, across entry pages, product pages, cart and checkout. These are suggested placements, not mandatory locations. In the workspace, available configuration depends on connected models and enabled controls; a website presentation does not mean every option is active in the operation.

## What does the dashboard show? {#painel}
keywords: dashboard, indicators, attributed revenue, orders, average order value
The **dashboard** brings together recommendation results for the selected period: attributed revenue, attributed orders, items sold through recommendations and attributed average order value. These indicators help assess financial contribution, volume and the profile of purchases associated with recommendations, under the platform’s attribution rule. Incomplete measurement or missing data is not the same as zero results and should be considered before comparing periods.

## How should I read conversion and participation? {#conversao}
keywords: conversion, clicks, cart, purchases, participation
**Purchases per 100 clicks** compares stage conversion rates with and without recommendations. **Recommendation weight at each stage** shows its share of recorded events. Together, they help locate differences between clicks, cart additions and purchases and investigate bottlenecks. Comparisons describe the observed period: they do not prove causation or guarantee future results. Small samples and missing data require care when interpreting the figures.

## How can I track trends and displays? {#desempenho}
keywords: performance, trends, evolution, comparison, display
**Recommendation performance** shows how results evolve over time. Display performance views allow comparisons between exposure points and periods. Comparing conversion against browsing without recommendations helps prioritise reviews. A recent absence of clicks may indicate a need to check display delivery or integration, without automatically establishing the cause of a problem. These views support investigation rather than replace it.

## Observed results or simulation? {#oportunidade}
keywords: simulation, scenario, opportunity, projection
**Recommendation results** separates what has been observed from what might happen. The observed view compares recommendation shares in clicks and purchases. The simulation estimates a scenario with a greater share of clicks while maintaining historical rates. It helps plan an expansion test, but **is not a promise of results**: additional clicks may behave differently from current ones, so the projection may exceed actual outcomes.

## How can I assess products and coverage? {#cobertura}
keywords: coverage, catalogue, long tail, recommended products
Recommended product performance organises items into three views: recommended, engaged and converted. **Coverage and distribution** shows eligible items, recommended items, catalogue reach, long-tail coverage and distribution by sales bands. Reading these together helps identify concentration in popular products and underexplored variety. These views guide decisions about which products and displays deserve review, rather than looking at sales rankings alone.

## What is in Documentation and Support? {#documentacao}
keywords: documentation, support, guidance, implementation
**Documentation and Support** guides Relevance implementation. The published journey presents integration steps, recommendation consumption and the return of observed results. It is the reference for understanding how to connect decisions to operational channels. This area complements ingestion, training and display screens; it does not replace data validation or confirm that an integration is already working. Those steps still need to be checked in context.
`;export{e as default};