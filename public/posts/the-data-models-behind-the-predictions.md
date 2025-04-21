---
title: The Data Models Behind the Predictions
author: Myron
date: 2025-04-21T02:38:00.000Z
tags:
  - cancer simulation
  - CAR T
  - pediatric oncology
  - medical AI
  - computational biology
---
## Introduction

In developing The Cure Engine, precise modeling isn't just beneficial—it's essential. Our simulation-first approach depends on rich, multi-layered data representations that mirror the complex biology of pediatric brain tumors and the therapies designed to treat them. This blog explores the major modeling systems we’ve engineered to power outcome predictions across billions of treatment permutations.

---

## Modeling Tumor Genomics and Antigen Mapping

Accurate treatment simulations begin with understanding the tumor. We ingest genomic data from sources like [The Cancer Genome Atlas (TCGA)](https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga) to define each tumor’s unique mutational fingerprint.

These inputs fuel antigen mapping—our process of identifying cell-surface proteins most likely to persist and be targetable over time. We use clustering algorithms to group mutational hotspots and assign immunogenicity scores to each candidate epitope.

This foundational layer of modeling helps us avoid treatment failure due to antigen loss, a common resistance mechanism in solid tumors.

- **Techniques:** Variant calling, epitope clustering, transcriptomic filtering
- **Use Case:** Selectively filtering low-expression antigens to avoid off-tumor toxicity

![Tumor Genomics and Antigen Mapping](/uploads/tumor-genomics-antigen-map.png)  
*Illustration: Mutations within the nucleus and surface antigen markers with immunogenicity labels*

---

## Synthetic Patient Generation

Genetic diversity and tumor microenvironment variability differ wildly across individuals. To account for this, we use synthetic patient modeling to simulate hundreds of thousands of unique patient profiles—each one differing in HLA types, immune baseline, tumor burden, and mutation load.

Inspired by population-level immunogenomics studies, these profiles serve as the "sandbox" for running simulation trials.

- **Technique:** Statistical bootstrapping and multivariate distribution sampling
- **Key Paper:** [Li et al., 2018](https://www.nature.com/articles/s41467-018-06654-6), which discusses synthetic cohort generation in oncology
- **Application:** Improves generalizability of predicted outcomes and reveals edge-case risks
public/uploads/synthetic-patient-generation-process.png
![Synthetic Patient Generation Process](/uploads/synthetic-patient-generation-process.png)  
*Diagram: Statistical sampling and genetic variability algorithms generate synthetic patient profiles for downstream CAR T-cell simulations*

![Synthetic Patient Generation](/uploads/synthetic-patient-generation.png)  
*Scatterplot: Synthetic patient profiles showing tumor burden and immune status mapped across HLA diversity*

---

## CAR Construct Simulation: Structure–Function Modeling

We don’t just simulate patients—we simulate the treatment itself. Each CAR (chimeric antigen receptor) is modeled structurally, accounting for:
- Binding affinity
- Off-target cross-reactivity
- Trafficking dynamics
- Co-stimulatory domain synergy

We rely on protein folding models and AI-driven affinity prediction tools like [Rosetta](https://www.rosettacommons.org/) and AlphaFold to simulate how each construct interacts with target antigens in different environments.

![CAR Construct Simulation – Structure–Function Modeling](/uploads/car-construct-simulation-diagram.png)  
*Diagram: CAR receptor structure mapped to four simulation focus areas—binding affinity, off-target risk, trafficking, and co-stimulatory synergy*
- **Reference:** [Majzner & Mackall (2019)](https://www.nature.com/articles/s41591-019-0564-6)
- **Use Case:** Predicting which CAR backbone designs are least prone to exhaustion or cytokine release

---

## Agent-Based and PK/PD Simulation Logic

The immune system behaves like an ecosystem. To capture that complexity, we deploy agent-based simulations where each CAR T-cell, tumor cell, and immune cell is an autonomous agent following biochemical rules.

These models simulate:
- T-cell expansion and contraction
- Tumor killing kinetics
- Cytokine feedback loops

Coupled with pharmacokinetic/pharmacodynamic (PK/PD) simulations, we also evaluate CAR T-cell trafficking, persistence, and degradation rates.

- **Frameworks Used:** [NetLogo](https://ccl.northwestern.edu/netlogo/), custom Python environments
- **Reference:** [An, G. (2012)](https://journals.lww.com/ccmjournal/Abstract/2012/01001/In_Silico_Experiments_of_Existing_and_Hypothetical.7.aspx)

---

## Ensemble Machine Learning for Outcome Predictions

All simulation outputs are scored using ensemble machine learning. These models predict:
- Survival probability
- Likelihood of relapse
- Probability of adverse reactions

We blend methods like random forests, XGBoost, and deep neural networks to generate robust, multi-dimensional predictions for each simulated scenario.

![Ensemble Machine Learning for Outcome Predictions](/uploads/ensemble-ml-outcome-prediction.png)  
*Diagram: Ensemble ML pipeline showing multiple inputs flowing through stacked models to generate survival, relapse, and toxicity predictions*

- **Key Algorithms:** Random Forests ([Breiman, 2001](https://link.springer.com/article/10.1023/A:1010933404324)), Gradient Boosting, TensorFlow-based CNNs
- **Reference:** [Topol, E. (2019)](https://www.basicbooks.com/titles/eric-topol/deep-medicine/9781541644632/)

---

## Predictive Toxicity Modeling

Predicting efficacy is only half the equation. Safety must be modeled with equal rigor.

We’ve trained toxicity classifiers using clinical data on cytokine release syndrome (CRS), neurotoxicity, and off-target effects. These models detect patterns where predicted outcomes indicate unacceptable safety risks—especially in pediatric immune systems.

- **Data Sources:** FDA adverse event reports, pediatric trial archives
- **Reference:** [FDA Predictive Toxicology Roadmap](https://www.fda.gov/science-research/about-science-research-fda/fdas-predictive-toxicology-roadmap)

---

## Monte Carlo Simulation and Continuous Model Retraining

The scale of our simulations—billions of permutations—requires stochastic sampling techniques like Monte Carlo simulations. This allows us to evaluate rare events (e.g., antigen escape under specific immune pressures) without needing to brute-force every path.

As new data becomes available, our models are retrained using reinforcement learning and statistical feedback loops.

- **Techniques:** Bayesian optimization, multistage Monte Carlo trials
- **Reference:** [Metropolis & Ulam (1949)](https://www.tandfonline.com/doi/abs/10.1080/01621459.1949.10483310)

---

## Conclusion

The Cure Engine is not a black box—it’s a living, evolving system of data-driven models built for transparency, accuracy, and safety. By deeply integrating biological, structural, and computational models, we’re forging a new path in pediatric cancer treatment—one that adapts in real time and brings therapies closer to the bedside with every simulated trial.

---

## References and Further Reading

- [The Cancer Genome Atlas (TCGA)](https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga)
- [Majzner & Mackall (2019). Clinical lessons learned from the first leg of the CAR T-cell journey.](https://www.nature.com/articles/s41591-019-0564-6)
- [Li et al., 2018. A comprehensive framework for modeling cancer evolution using synthetic cohorts.](https://www.nature.com/articles/s41467-018-06654-6)
- [Topol, E. (2019). Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again.](https://www.basicbooks.com/titles/eric-topol/deep-medicine/9781541644632/)
- [An, G. (2012). In silico experiments using agent-based modeling.](https://journals.lww.com/ccmjournal/Abstract/2012/01001/In_Silico_Experiments_of_Existing_and_Hypothetical.7.aspx)
- [Breiman, L. (2001). Random Forests.](https://link.springer.com/article/10.1023/A:1010933404324)
- [FDA Predictive Toxicology Roadmap](https://www.fda.gov/science-research/about-science-research-fda/fdas-predictive-toxicology-roadmap)
- [Metropolis & Ulam (1949). The Monte Carlo Method.](https://www.tandfonline.com/doi/abs/10.1080/01621459.1949.10483310)
