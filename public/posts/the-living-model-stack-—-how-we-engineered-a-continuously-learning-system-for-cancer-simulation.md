---
title: The Living Model Stack — How We Engineered a Continuously Learning System
  for Cancer Simulation
author: Myron
date: 2025-04-24T03:35:00.000Z
tags:
  - AI in Healthcare
  - Continuous Learning
  - Pediatric Oncology
  - MLOps
  - Explainable AI
---
## Introduction


In high-risk domains like pediatric oncology, predictive modeling doesn’t just inform decisions—it shapes lives. At The Cure Engine, we set out to design a simulation system where artificial intelligence isn’t static, but *alive* — continuously learning, adapting, and improving. Our goal was to move beyond episodic model training and into the realm of **continuous learning ecosystems**, where every new data point refines the system’s understanding of tumor biology and therapeutic efficacy.


This blog details the full-stack architecture behind our learning model system: from ingestion and simulation, to audit trails and retraining triggers. This is not theoretical. It’s operational, regulatory-aware, and battle-tested in the domain of childhood brain cancer.


---


## 1. Core Architecture: Multi-Layered Model Integration

<img src="/uploads/model-integration-map.png" class="small-figure" alt="Cure Engine Model Integration Map">
*Diagram: Shows integration of ensemble models, agent-based logic, PK/PD models, deep learning layers, and Monte Carlo simulations in a unified simulation graph.*



Unlike monolithic AI systems, The Cure Engine embraces architectural pluralism. We deploy a **multi-model strategy**, where different layers of biology are modeled by the systems best suited to their behavior.


For example, [ensemble machine learning models](https://link.springer.com/article/10.1023/A:1010933404324) handle risk scoring for survival, relapse, and toxicity using structured features extracted from simulations. This includes tumor burden, cytokine signatures, CAR affinity scores, and HLA typing.


Simultaneously, [agent-based simulations](https://journals.lww.com/ccmjournal/Fulltext/2012/03001/In_silico_experiments__Agent_based_modeling_of.3.aspx) model the spatial and temporal interactions between tumor cells, CAR T-cells, and the immune system. This layer incorporates physical behaviors like migration, expansion, cytokine feedback loops, and exhaustion thresholds.


In parallel, **PK/PD models** simulate therapeutic delivery and systemic clearance, capturing how CAR T-cells travel, persist, or decay across time and tissue compartments.


Above this, we layer **deep learning models** (e.g. convolutional networks and LSTMs) to identify latent patterns from time-series data like treatment response trajectories or evolving antigen profiles.


Finally, [Bayesian learners and Monte Carlo simulations](https://www.jstor.org/stable/2280052) are employed to estimate uncertainty and simulate rare event edge cases, such as sudden immune collapse or aggressive antigen escape.


The glue that binds this system is a simulation graph orchestration layer, which defines the dependencies and sequencing of these models. Each node in the graph is versioned, tagged, and deployable independently.


---


## 2. Data Ingestion and Preprocessing Pipelines

<img src="/uploads/data-ingestion-pipeline.png" class="small-figure" alt="Data Ingestion and Transformation Pipeline">
*Diagram: Real-world and synthetic data sources flowing into GATK, VEP, NetMHCpan, and transformation into JSON-LD.*



Accurate modeling begins with trustworthy data. The Cure Engine processes both real-world and synthetic datasets through a rigorous preprocessing pipeline.


From real-world sources, we ingest:
- Genomic data from [TCGA](https://www.cancer.gov/ccg/research/genome-sequencing/tcga), [TARGET](https://ocg.cancer.gov/programs/target), and institutional biobanks
- Clinical outcomes from [SEER](https://seer.cancer.gov/), AE Tables from CAR T trials, and retrospective registries
- Imaging data from [TCIA](https://www.cancerimagingarchive.net/)


Each source is standardized, de-identified, and transformed into structured JSON-LD for downstream compatibility. Our pipeline supports VCF parsing, HLA typing, transcriptomic filtering, and epitope prediction (via tools like [NetMHCpan](http://www.cbs.dtu.dk/services/NetMHCpan/), [GATK](https://gatk.broadinstitute.org/), and [Ensembl VEP](https://www.ensembl.org/info/docs/tools/vep/index.html)).


We also generate synthetic cohorts through multivariate bootstrapping using real-world distributions as anchors. This allows us to simulate rare HLA combinations, uncommon mutations, or atypical immune environments that might not be present in training data but are vital for risk modeling.


> Reference: [Wilkinson et al. (2016). The FAIR Guiding Principles](https://www.nature.com/articles/sdata201618)


---


## 3. Model Versioning and Lifecycle Tracking

<img src="/uploads/simulation-lineage-tracker.png" class="small-figure" alt="Simulation Lineage Tracker">
*Diagram: Git-style branching showing model versions, hash linkage, and training metadata for reproducibility.*



Transparency and traceability are non-negotiable in a high-stakes AI system. Every model in The Cure Engine is versioned using SHA-256 hashes and tracked with metadata that includes training dataset signatures, parameter configurations, tuning history, and known limitations.


We use [DVC](https://dvc.org) to link each model version to the exact input data and scripts that produced it. This ensures reproducibility and enables external auditors or collaborators to trace predictions all the way back to their data roots.


A unique Simulation Lineage ID is generated for each run, which includes:
- Genomic input hash
- CAR construct ID
- Tumor microenvironment state
- Therapy regimen profile
- ML ensemble stack version


This lineage enables full playback of simulations and supports our compliance with the FAIR Data Principles.


> Reference: [Topol, E. (2019). Deep Medicine](https://www.basicbooks.com/titles/eric-topol/deep-medicine/9781541644649/)


---


## 4. Real-Time Drift Monitoring and Feedback Triggers

<img src="/uploads/drift-monitoring-dashboard.png" class="small-figure" alt="Real-Time Drift and Feedback Loop">
*Dashboard: Visualizes survival curve drift, CRS/ICANS anomaly flags, and feedback-triggered retraining workflows.*



Once a model is deployed, performance doesn’t end — it evolves. We monitor for model drift, both statistically and biologically.


For survival predictions, we track Kaplan–Meier alignment and C-index variation month-to-month. For toxicity predictions, we apply outlier detection to identify spikes in CRS or ICANS risk scores. For biological models, we use single-cell RNA-seq overlays to validate antigen persistence or escape mismatches.


When deviation thresholds are breached, the system flags the model as "under review" and triggers a retraining candidate pool. All flags are reviewed by a human-in-the-loop model governance team.


This keeps The Cure Engine responsive to real-world dynamics while minimizing the risk of stale predictions.


> References: [Rudin (2019)](https://www.nature.com/articles/s42256-019-0048-x), [Ebrahim et al. (2021)](https://www.nature.com/articles/s41591-020-01194-6)


---


## 5. Retraining Pipelines and Reinforcement Learning

<img src="/uploads/retraining-rl-pipeline.png" class="small-figure" alt="CI/CD Pipeline for Model Retraining">
*Workflow: From flagged models to Bayesian re-tuning, shadow deployment, and full promotion via automated pipelines.*



Every model in The Cure Engine is retrainable. But we don’t wait for failure. We schedule periodic retraining using a CI/CD workflow integrated with our simulation telemetry.


When a retraining trigger is approved, we:
- Rebuild training datasets with fresh simulation logs and new clinical outcomes
- Apply [Bayesian optimization](https://optuna.org/) to refine hyperparameters
- Evaluate candidate models using cross-validation, ensemble blending, and holdout scoring


For rare or edge-case scenarios, we use [reinforcement learning](https://docs.ray.io/en/latest/rllib/index.html) in a sandboxed simulation environment to explore alternative therapeutic paths or construct variants.


The retrained model is staged in a shadow deployment, validated across historical cases, and only promoted after safety and accuracy regression testing.


> Tools and Frameworks: [Kubeflow Pipelines](https://www.kubeflow.org/docs/components/pipelines/)


---


## 6. Explainability, Auditing, and Regulatory Readiness

<img src="/uploads/explainability-shap-lime.png" class="small-figure" alt="SHAP and LIME Feature Attribution Example">
*Chart: Feature contributions from a survival prediction visualized using SHAP; e.g., tumor burden, cytokines, HLA type.*

<img src="/uploads/fda-export-bundle.png" class="small-figure" alt="Regulatory Export Bundle Structure">
*Diagram: Metadata files, audit logs, and model cards bundled for FDA MIDD submissions.*



Clinicians and regulators don’t trust black boxes. So The Cure Engine offers full model explainability using [SHAP](https://github.com/shap/shap) and [LIME](https://github.com/marcotcr/lime) to visualize feature importance and attribution.


Every prediction is logged with its confidence interval, data provenance, and feature contribution scores. All user actions and override decisions are stored in an audit log that can be exported as structured JSON or CSV.


In Regulatory Mode, models are locked, datasets frozen, and all simulations exported with a metadata bundle designed for [FDA MIDD](https://www.fda.gov/media/145527/download) submission.


> References: [Model Cards](https://modelcards.withgoogle.com/about)


---


## Conclusion


The Cure Engine is a living system—not just a model. We’ve built an AI architecture where prediction is only the beginning. What matters more is what happens *next*: auditing it, improving it, validating it, and learning from it.


If you’re an AI researcher, MLOps architect, or data scientist looking to apply your skills in a field that truly matters, we invite you to connect. Let’s build a future where our models don’t just predict outcomes — they help rewrite them.


---


## References and Further Reading


- [Breiman, L. (2001). Random Forests](https://link.springer.com/article/10.1023/A:1010933404324)  
- [An, G. (2012). Agent-based modeling](https://journals.lww.com/ccmjournal/Fulltext/2012/03001/In_silico_experiments__Agent_based_modeling_of.3.aspx)  
- [Metropolis, N. & Ulam, S. (1949). Monte Carlo Method](https://www.jstor.org/stable/2280052)  
- [Wilkinson, M. et al. (2016). FAIR Data Principles](https://www.nature.com/articles/sdata201618)  
- [Rudin, C. (2019). Stop explaining black box models](https://www.nature.com/articles/s42256-019-0048-x)  
- [Ebrahim, M. et al. (2021). ML model interpretation](https://www.nature.com/articles/s41591-020-01194-6)  
- [Topol, E. (2019). Deep Medicine](https://www.basicbooks.com/titles/eric-topol/deep-medicine/9781541644649/)  
- [FDA MIDD Guidance](https://www.fda.gov/media/145527/download)  


