---
title: 1. Engineering a Cure
author: Myron
date: 2025-04-16T21:51:00.000Z
tags:
  - machine learning
  - CAR T-cell therapy
  - pediatric oncology
  - IL13Ra2
  - adaptive feedback
---
At The Cure Engine, our goal isn’t just to fight cancer-it’s to engineer a cure. We’re building that cure the same way we would build a complex system: with architecture, feedback loops, simulations, and iteration.

We treat diffuse midline gliomas (DMGs) not just as medical mysteries but as solvable problems. These tumors are evasive, fast-growing, and genetically diverse. But they are not beyond our ability to understand. We believe that with the right data, the right models, and a relentless commitment to testing, we can build a therapy that adapts to each child’s unique biology.

### Engineering Over Intuition
Most cancer research starts with a biological insight and tests it experimentally. We started with system architecture. We asked:
- What if we could simulate responses before we ever enter a clinic?
- What if the therapy could adapt over time as it learns?
- What if we could design the cure the way we’d design a rocket-test every part, simulate the worst case, and rebuild until it flies?

This mindset led us to build a framework that isn’t static. It learns. It retrains. It incorporates feedback.

### Simulating to Understand
We didn’t guess at what might work. We built simulation pipelines that modeled:
- CAR T-cell and tumor interactions over time
- Cytokine response thresholds
- Blood-brain barrier penetration models
- Tumor antigen shedding and escape scenarios
- Dose timing and exhaustion dynamics

In total, we’ve run over **10 million** iterations across **hundreds of permutations per scenario** to explore every plausible treatment path. Each run adds to our understanding. Each edge case is logged, rerun, and either eliminated or explored further.
![Simulation Scale Permutation Diagram](/uploads/Simulation_Scale_Permutation_Diagram_Transparent.png)

![Simulation Process Diagram](/uploads/Simulation_Process_Diagram_Transparent.png)

### Feedback That Teaches
Once a prediction is made, it doesn’t sit idle. Every real-world result-positive or negative-is logged and used to retrain the model. We built a closed-loop system:

1. Simulate the treatment
2. Predict response and risk
3. Administer therapy (or test in silico)
4. Capture results
5. Update the model

This feedback system helps us avoid the flatline problem many AI models face. Ours gets smarter every time it’s wrong-and sharper every time it’s right.

![Feedback Loop Detailed Diagram](/uploads/Feedback_Loop_Detailed_Diagram_Transparent.png)


### A Platform, Not Just a Protocol
The goal isn’t to build a single CAR T-cell protocol. It’s to build a **living platform** that can adapt to different tumor genotypes, patient profiles, and new scientific discoveries.

We’re building something we can improve over time. A digital foundation for future cures.

![Platform vs Protocol Comparison](/uploads/Platform_vs_Protocol_Comparison_Transparent.png)

### What Comes Next
In the next post, we’ll break down the specific machine learning models that make this possible. From ensemble predictors to neural networks to time-series simulations-each piece plays a role in making The Cure Engine a reality.

This is just the beginning.

![Engineering the Cure Concept](/uploads/Engineering_the_Cure_Concept_Transparent.png)

### Citations
1. Majzner RG et al. Tuning the IL13Rα2 CAR T-cell for pediatric gliomas. *Cell Reports Medicine*. https://doi.org/10.1016/j.xcrm.2022.100604
2. Sahoo P et al. Mathematical deconvolution of CAR T-cell dynamics. *Nature Communications*. https://doi.org/10.1038/s41467-020-19957-w
3. U.S. National Library of Medicine – ClinicalTrials.gov: NCT02208362
4. Project ARROW. Adaptive Research and Response Optimization Workgroup, NIH & Children’s Oncology Group, 2021
5. Miotto R et al. Deep learning for healthcare: review, opportunities and challenges. *Briefings in Bioinformatics*. https://doi.org/10.1093/bib/bbx044
