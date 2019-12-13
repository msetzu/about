---
layout: post
title:  "The Local to Global problem"
categories: explainable-ai local-to-global
---

Machine learning finds application in a wide range of areas, some of which are sensitive to discrimination. Upon inspection, classifiers have repeatedly shown to learn biases on sex, race, and other sensitive attributes [^01]. Explainable AI techniques address this issue by highlighting the importance given to the input features, miming the behavior of the given model, or learning explainable-by-design models. In particular, this family of models provides us with a set of explanations which can be directly examined by humans to detect biased and unfair behavior.


We name _black box_ $b$ a non-interpretable classification model, such as a neural network or a random forest. It defines function $b : \mathcal{X}^{(m)} \rightarrow \mathcal{Y}$ which maps records $x$ from a feature space $\mathcal{X}^{(m)}$ with $m$ input features to a decision $y$ in a target space $\mathcal{Y}$.
We write $b(x) = y$ to denote the decision $y$ predicted by $b$, and $b(X) = Y$ as a shorthand for $\{b(x) \ |\ x \in X\} = Y$. An instance $x$ consists of a set of $m$ attribute-value pairs $(a_i, v_i)$, where $a_i$ is a feature (or attribute) and $v_i$ is a value from the domain of $a_i$. 
We assume that $b$ can be queried at will.

For instance, say $b$ is a model used by a bank to decide whether to grant a loan to the applicant or not.

| Name 	| Age | Salary | Savings | Grant? |
| Alice | 24 | 10k | 50k | Granted |
| Bob 	| 32 | 2k | 10k | Not granted |
| Ric 	| 54 | 60k | 60k | Granted |

In our setting, an **explanation** for the behavior of the model is a decision rule. For instance,

<p class="example">
	{salary $\geq 10k$, savings $\geq 40k$} $\rightarrow$ Granted,
</p>

which states that if the salary of the applicant is greater or equal than $10k$ and his/her savings are at least  $40k$, then the loan is granted.
Conversely, we may have more fine-tailored explanations aimed at explaining predictions on _subsets_ of the dataset . Let us restrict ourselves to Alice and Bob:

| Name 	| Age | Salary | Savings | Grant? |
| Alice | 24 | 10k | 50k | Granted |
| Bob 	| 32 | 2k | 10k | Not granted |

In this case, an explanation may be

<p class="example">
	{age $\leq 31$} $\rightarrow$ Granted,
</p>

as `age` alone is a discriminatory factor between the two. This poses a serious problem, since the less data we have available, the less accurate we can expect our explanations to be. The two extreme cases in which we extract explanations with access to the full dataset or just one record at a time are called **global** and **local** explanations, as they aim to explain the model in the whole input space and in a local subset, respectively.

The **Local to Global** problem is the problem of generalizing a set of _local explanations_ into global ones.
More formally, the **Local to Global** explanation problem is defined as follows:

<p class="definition" markdown="1">
	Let $b$ be a black box classifier, ${X = \{x_1, \dots, x_n\}}$ a set of instances and $R = \{r_1, \dots, r_n\}$ a set of the rule-based local explanations of $b$ for all the instances in $X$.
	The _local-to-global explanation problem_ consists in deriving from $R$ an interpretable rule-based classifier approximating the _global_ behavior of $b$.
</p>

Therefore, starting from a set of _local_ explanations, our objective is to find a _global_ interpretable classifier from which is possible to understand the overall logic implemented by the black box model.

## Motivations
The main motivation behind this problem is the so called "local accuracy".
Local explainability models have gained notoriety with the LIME framework [^02], in which the authors acknowledge three agnostic assumptions:
1. **black box models are locally interpretable**, that is, any subset of their decision boundary can be approximated with a simpler interpretable model;
2. **interpretable sampling is more efficient than non-interpretable sampling**, that is, the input space has stronger noise than the interpretable space, hence sampling in this space yields "better" neighbors.

With these two assumptions, LIME samples neighbors of a given record in the interpretable space, and builds interpretable models on top of it, from which local explanations are extracted.
Several works have then followed along these lines [^03][^04], further demonstrating that local explanations have remarkably high accuracy. This is mainly due to the first hypothesis, that allows us to approximate just a subset of the decision boundary. With this observation in mind, one can see the Local to Global problem as a generalization problem in which to remove the locality of the explanations without negatively impacting their accuracy.


[^01]: [Machine Bias: There’s software used across the country to predict future criminals. And it’s biased against blacks _by Julia Angwin, Jeff Larson, Surya Mattu and Lauren Kirchner, ProPublica, May 23, 2016_](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
[^02]: Why Should I Trust You?": Explaining the Predictions of Any Classifier, _by Marco Tulio Ribeiro and Sameer Singh and Carlos Guestrin_, in SIGKDD 2016
[^03]: Factual and Counterfactual Explanations for Black Box Decision Making, _by R. Guidotti, A. Monreale, F. Giannotti, D. Pedreschi, S. Ruggieri and F. Turini_ in IEEE Intelligent Systems 2019
[^04]: A Unified Approach to Interpreting Model Predictions, _by Scott Lundberg, Su-In Lee_ in NIPS 2017

---

## Footnotes
