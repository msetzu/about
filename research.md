---
layout: page
title: Research
permalink: /research
---

<!-- <style>
  /* code-like highlights are too large here */
  .highlight {
    padding: 0 !important;
  }

  td.rouge-gutter.gl {
      padding: 0;
  }

  .highlight pre {
      margin: 0;
  }

  /* no line numbers */
  .highlight pre.lineno {
      display: none;
  }
</style> -->

## Publications

**TripleX: Triples for Explanation**<br>
_Mattia Setzu, Anna Monreale, Pasquale Minervini_<br>
[The Third IEEE International Conference on Cognitive Machine Intelligence](http://www.sis.pitt.edu/lersais/conference/cogmi/2021/camera_ready.html), 2021<br>

<a class="cv note" href="">
  <i class="fas fa-file-pdf"></i> Paper to appear
</a>
<a class="cv github" href="https://github.com/msetzu/triplex">
  <i class="fab fa-github"></i> Github
</a>

--- 

**GLocalX - From Local to Global Explanations of Black Box AI Models**<br>
_Mattia Setzu, Riccardo Guidotti, Anna Monreale, Franco Turini, Dino Pedreschi, and Fosca Giannotti_<br>
[Journal of Artificial Intelligence](https://www.sciencedirect.com/journal/artificial-intelligence), 2021<br>
[International Joint Conference on Artificial Intelligence](https://ijcai-21.org/), 2021

<a class="cv note" href="https://www.sciencedirect.com/science/article/pii/S0004370221000084">
  <i class="fas fa-file-pdf"></i> Paper
</a>
<a class="cv github" href="https://github.com/msetzu/glocalx">
  <i class="fab fa-github"></i> Github
</a>

---

**Global Explanations with Local Scoring**<br>
_Mattia Setzu, Riccardo Guidotti, Anna Monreale, and Franco Turini_<br>
[ECML/PKDD conference](https://ecmlpkdd2019.org/), 2019

<a class="cv note" href="https://link.springer.com/chapter/10.1007/978-3-030-43823-4_14">
  <i class="fas fa-file-pdf"></i> Paper
</a>
<a class="cv github" href="https://github.com/msetzu/rule-relevance-score">
  <i class="fab fa-github"></i> Github
</a>

---

**SPARQL Queries over Source Code**<br>
_Mattia Setzu, Maurizio Atzori_<br>
[International Conference on Semantic Computing](https://ieeexplore.ieee.org/xpl/conhome/7437671/proceeding), 2016.

<a class="cv note" href="https://ieeexplore.ieee.org/document/7439313">
  <i class="fas fa-file-pdf"></i> Paper
</a>

---

## Public library
I have a public [Zotero library](https://www.zotero.org/groups/2628608/xai_and_a_lot_of_stuff_i_like_to_read/library) where I archive and catalogue the papers I read, contact me if you wish to be added to the library.
Follows a catalogue of the tags that I use.

### Tags
We have several classes of tags, each identified by its token cardinality, ranging from one (single-tag or 1-tag) to n (n-tag). Single-tags are comprised of a single phrase (possibly with spaces), such as `survey` or `use case` and have no tag terminator. Conversely, n-tags (2-tag, 3-tag, ...) are a sequence of colon-separated tags comprised of a prefix and suffix:

```
prefix:suffix
```

`prefix` is a general tag, e.g. `data:`, `scope:`, while `suffix` is a more specific tag, e.g. `local`, `text`, `feature importance`.  They are defined in BNF form.

Example:
```
Prefix scope:
Suffix local | global | local to global
```

generates tags
```
scope:local
scope:global
scope:local to global
scope:sub-global
```

n-tags allow for varying levels of specificity and compositionality. Moreover, when dealing with unclear or overly general papers the prefix can be omitted. For instance, if we are dealing with a paper on explanatory interactive learning (prefix  `xil:`) and the type of explanation provided to the user is not specified we can just use the tag `xil:`. On the other hand, if the paper specifies it, we can insert it as a suffix, e.g. `xil:feature:importance`, `xil:decision rules`.

### Tag usage across collections: the `alg` tag

Some tags belong to some collections, e.g. the `gen:autoencoder` tag for the `ml/generative models/autoencoder` collection, but they can (and are) used in other collections too, provided they are prefixed by a `alg:` prefix. The `alg:` prefix indicates that the given tag is not *the* focus of the paper, rather an accessory algorithm/technique/feature.

Say we have a paper on local explainability leveraging autoencoders (AE) like ABELE: an obvious tag to use would be `gen:autoencoder`. Still, the paper merely leverages existing autoencoder literature to define a XAI algorithm. If we were to use `gen:autoencoder` here, we could not tell apart papers on autoencoders (tag `gen:autoencoder`) from papers merely leveraging autoencoders (tag `alg:gen:autoencoder`). To separate the two classes of papers, we simply add a `alg:` prefix to the `gen:autoencoder` tag.

---

## General tags

As seen in "Tag usage across collections: the `alg` tag", `alg:` is a key tag used across collections to add accessory information. Some tags do not belong to any collection, thus we use them as 2-tags with an `alg:`

#### Very cool/important papers

`star`

#### Papers on software tools/frameworks

`software`

#### Theoretical papers

`theoretical`

#### Explanation derived/inspired from...?

`alg:`

```
shapley values | shap | lime
```

#### Algorithm based on...?

`alg:`

```
backpropagation | input perturbation | knowledge graph
```



---



## XAI: must-have tags!

Papers in any XAI in collection. Should not use a `alg:` prefix when using outside these collections.

#### What is the explanation scope?

`scope:`

```
local | global | local to global
```

#### Data: what's the model input data?

`data:`

```
any | text | image | tabular | sequence | shapelet | graph | health
```

#### Model: is the XAI algorithm model-agnostic? Is it explaining a specific model? A model for a specific task?

`explains:`

```
model-agnostic | by design |
linear model |
nn | rnn | cnn | transformer | neurons |
svm |
latent space |
language model | qa |
clustering |
ensemble | forest |
kb:completion
information retriever | recommendation system |
reinforcement agent
```

- `kb:completion` explains a knowledge base completion model

#### What kind of explanation is provided?

Is it a counterfactual? Feature importance (saliency and word importance included)? Does it explain the interaction between features? Does it provide the importance of the neurons in a neural model? Does it provide decision rules (decision trees included)?

`explanation:`

```
aut:grammar | aut:automaton |
caption |
counterfactual |
decision rules | oblique decision rules |
feature:importance | feature:interaction |
graph nodes | graph edges |
input importance |
knowledge graph nodes | knowledge graph relations |
multi-modal |
natural language |
neuron importance |
prototypes |
shapelet |
structural equations |
taxonomy |
visualization
```

- `aut:automaton`  an automaton
- `aut:grammar` a (first-order, context-free, etc.) grammar
- `caption` caption for an image
- `counterfactual`  a counterfactual
- `decision rules` 
- `feature:importance` what important are the input features?
- `feature:interaction` how are sets of features correlated?
- `prototypes` a (set of) prototypical example(s)
- `graph nodes`  nodes in a graph
- `graph edges`  edges in a graph
- `knowledge graph nodes` nodes in a knowledge graph
- `knowledge graph relations`  edges in a knowledge graph
- `latent dimension` 
- `multi-modal` multi-modal explanations for reinforcement agents
- `natural language`  a natural language explanation
- `neuron importance`  important or significant neurons
- `structural equations`  feature equations in causal models
- `taxonomy` 

## Task: what task is the black box solving?

Given that most tasks are n-ary classification, we omit the tag for classification problems.

`task:`

```
benchmarking |
dfa distillation |
entailment trees |
interactive xai |
masking |
multiclass classification |
probing | prompting |
natural language inference | qa | fact checking |
regression | ordinal regression |
st graphs |
kg-to-text | concepts-to-text
```

- `benchmarking` generic papers on benchmarking (XAI included)
- `dfa distillation` distilling a DFA from a model
- `entailment trees` models who construct proof-like natural language trees to reach a goal
- `interactive xai` XAI with interactive human intervention
- `prompting` probing masked language models for knowledge
- `probing` generic papers on probing techniques 
- `st graphs` structured graphs of belief

---



## Explanations: definitions & desiderata and evaluations & benchmarking

`exp:`

```
definition | validation | benchmark | critique
```

- `definition` what is an explanation?
- `validation` how to validate explanations?
- `benchmark` best explanations?
- `critique` a critique of explanation algorithms

---



## Discrete spaces: automata, languages and symbols

Papers on grammars, deterministic finite state automata (DFA), epsilon deterministic finite state automata (eps-DFA), regular and context-free grammars

`aut:`

```
grammar | grammar:regular | grammar:context-free | grammar:temporal |
automata:dfa | automata:multiset | automata:symbolic |
symbolic learning
```

- `grammar` 

- `regular grammar` regular grammars

- `context-free grammar` context free grammars

- `temporal grammar` temporal grammars

- `dfa` deterministic finite state automata

- `eps-dfa` epsilon deterministic finite state automata

- `sym-dfa` symbolic dfa

- `symbolic learning` learning (from) discrete symbols

  

---



## Logic

Papers on logic programming, logic-powered models and logic programs inductors.

`log:`

```
markov network | logic network |
logic programming | logic program induction | theorem proving |
reasoning |
answer set programming |
adaptive | fuzzy
```

- `markov network` markov networks
- `logic network` neural models performing logic operations
- `logic programming` logic programming
- `logic programming induction` learning logic programs
- `theorem proving` can we prove a theorem?
- `reasoning`  reasoning in neural models
- `adaptive` adaptive logic
- `fuzzy` fuzzy logic

---



## Polyhedra and combinatorics

Papers on polyhedra and combinatorics: search algorithm, CSP, SAT, MAXSAT and Set Cover problem, Mixed Integer Programming and Polyhedral learning

`cmb:`

```
search |
csp |
mip | ilp |
optimal transport |
sat | maxsat |
set cover |
polyhedral learning | polytope | polytope approximation
```

- `search` search in a combinatorial space
- `csp` constraint satisfaction problems
- `optimal transport` optimal transport problems
- `mip` mixed integer programming problems
- `ilp` integer linear programming problem
- `sat` satisfiability problems
- `maxsat` maximum satisfiability problems
- `set cover` set coverage problems
- `polyhedral learning` learning polyhedra

---



## Computer vision

`cv:`

```
segmentation | object detection | style transfer
```

- `segmentation` finding meaningful parts of an image
- `object detection ` detect objects in images
- `style transfer` applying stylistic patterns to images

---



## Sequence

`seq:`

```
sax
```

- `sax` the SAX family of shapelet discretization algorithms

---



## Clustering

`clus:`

```
clustering | pruning
```

- `clustering` learning a clustering
- `pruning` merging clusters (mainly in hierarchical clusterings)

---



## Paper type: surveys, benchmarks and theoretical papers

Use tags `survey`, `benchmark` and `theoretical` appropriately.



---



## Adversarial

Papers on adversarial attack/defense in  `ml/adversarial`

#### Attack or defense?

`adv:`

```
attack | defense
```

- `attack` adversarial attacks
- `defense` defense against adversarial attacks

---



## Latent space

Papers on embedding, latent space representation, traversal and (dis)entanglement.

`lat:`

```
dimensionality reduction |
disentanglement |
embedding | representation |
traversal | interpolation
```

- `dimensionality reduction` dimensionality reduction
- `disentanglement` to each latent dimension its own meaning
- `embedding` learning an unsupervised embedding (latent) representation
- `representation`  learning a latent representation
- `traversal` percolating the latent space
- `interpolation` latent space interpolation

---



## Generative models

Papers on generative models (AE, VAE, GAN, flow models, ecc) in `/ml/generative models`. 

#### What's the model class?

`gen:`

```
autoencoder | variational autoencoder |
conditioned |
flow |
gan |
process |
other
```

- `autoencoder` autoencoders
- `variational autoencoder` variational autoencoders
- `flow` flow models
- `gan` generative adversarial networks
- `process` stochastic processes (mainly gaussian)
- `other` other ad hoc generative models

---



## Knowledge bases

`kb:`

```
common sense |
completion |
embedding |
inject | linking
mining
```

- `common sense` knowledge bases on common sense reasoning
- `completion` infer missing edges in a given knowledge graph
- `embedding` creating embeddings  for a knowledge graph nodes and edges
- `inject` enrich model training with a given knowledge base
- `linking` map tokens to entities in the knowledge base/graph
- `mining` distilling a knowledge base from data/models

---



## Explainable Interactive Learning (XIL)

Explainable Interactive Learning (XIL) inserts a human-in-the-loop in the training procedure of a machine learning model by periodically presenting the model to the human and prompting an explainable correction

`xil:`

```
counterfactuals |
decision rules | decision making |
feature:importance |
prototypes |
?
```

- `feature:importance` training black box models with explainable human intervention in the form of feature importance measures
- `decision rules ` training black box models with explainable human intervention in the form of decision rules
- `decision making` humans and algorithms collaborating at prediction time
- `prototypes` training black box models with explainable human intervention in the form of prototypes selection
- `counterfactuals ` training black box models with explainable human intervention in the form of counterfactual decision rules
- `?` unclear

## Machine Learning & Pattern Recognition

`mlpr:`

```
backpropagation |
boosting |
boundary tree |
capsule network |
concept learning |
decision tree | forest |
distillation |
graphical model
neurosymbolic |
regularization | constraints |
transfer learning |
som |
training
```

- `model training` training

- `distillation` distill models in other models

- `concept learning` learning higher level features

- `regularization` regularization

- `constraints` learning the set of constraints inferred by a model/constraining a model behavior

- `neurosymbolic` papers on neurosymbolic learning

- `som` the self-organizing map

- `transfer learning` leverage existing models in different domains/datasets/etc

  

---



## Computational Mathematics

Maths, duh

`cm:`

```
matrix factorization | piecewise linear models | voronoi diagram
```

- `matrix factorization` factorizing matrices
- `piecewise linear models` on piecewise linear models
- `voronoi diagram` on voronoi diagrams

---



## Optimization

`opt:`

```
submodular optimization | genetic programming
```

---



## Statistics

Ususally prefixed by `alg:` as the literature is not focused on statistics

`stat:`

```
bayes | shapley | bandits | mutual information
```

- `shapley` leveraging the Shapley values
- `bandits` bandits selection algorithm
- `mutual information`

---



## Natural Language Processing (NLP)

`nlp:`

```
attention | transformer |
language model | perplexity |
qa | summarization | text similarity
```

- `attention` defining and leveraging the attention mechanism
- `transformer` defining and leveraging the multi-head attention mechanism for Transformers
- `qa` question answering

---



## Fairness

Papers on fairness in `/fairness` on defining fairness, learning fair models or remove unfair behavior from trained unfair models

`fairness:`

```
definition | learning | cleaning
```

- `definition` formally defining a fairness measure
- `learning` learning fair models
- `cleaning` removing unfair behavior from given models

---