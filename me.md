---
layout: page
title: About
permalink: /me
---
<link rel="stylesheet" href="{{ site.baseurl }}/css/me.css">
<script>
	$(document).ready(function(){
    // Activate tabs
  	$(".menu .item").tab();
    $(".ui.sticky").sticky({
      context: '#body'
    })
;
    // Copy bibtex
	});
</script>

<div class="ui sticky" id="body">
I'm Mattia Setzu, a postdoc researcher (RTD-A) at [University of Pisa](https://di.unipi.it/).
My research focuses on Explainable AI (XAI), specifically on tabular XAI and explainability for NLP models.

Down here you can find infos on my <a href="#publications">publications</a>, <a href="#education">education</a>, <a href="#software">public software</a>, and <a href="#presentations">talks</a>.

<div id="publications">
  <h1 class="ui horizontal divider header">
  <i class="fa-sharp fa-regular fa-newspaper"></i>
  Publications
  </h1>

<div class="ui divided items papers">
  <div class="item" id="hdlm">
    <div class="content">
      <a class="header">Towards synergistic human-AI collaboration in hybrid decision-making systems</a>
      <div class="meta">
        <p class="authors">Anonymous</p>
        <p class="venue reviewing">Under review</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_7">Abstract</a>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_7">
        <p>A growing body of interdisciplinary literature indicates that human decision-making processes can be enhanced by Artificial Intelligence (AI). Nevertheless, the use of AI in critical domains has also raised significant concerns regarding its final users, those affected by the undertaken decisions, and the broader society. Consequently, recent studies are shifting their focus towards the development of human-centered frameworks that facilitate a synergistic human-machine collaboration while upholding ethical and legal standards. In this work, we present a taxonomy for hybrid decision-making systems to classify systems according to the type of interaction that occurs between human and artificial intelligence. Furthermore, we identify gaps in the current body of literature and suggest potential directions for future research.
			 </p>
      </div>
    </div>
  </div>


  <div class="item" id="trees">
    <div class="content">
      <a class="header">Correlation and Unintended Biases on Univariate and Multivariate Decision Trees</a>
      <div class="meta">
        <p class="authors">Anonymous</p>
        <p class="venue reviewing">Under review</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_6">Abstract</a>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_6">
        <p>Decision Trees (DTs) are accessible, interpretable, and well-performing classification models. A plethora of variants with increasing expressiveness has been proposed in the last 40 years. We contrast the two families of univariate DTs, whose split functions partition data through axis-parallel hyperplanes, and multivariate DTs, whose splits instead partition data through oblique hyperplanes. The latter include the former, hence multivariate DTs are in principle more powerful. Surprisingly enough, however, univariate DTs consistently show comparable performances in the literature. We analyze the reasons behind this, both with a synthetic and a large benchmark of datasets. Our research questions test whether the pre-processing phase of removing correlation among features in datasets has an impact on the relative performances of univariate vs multivariate DTs.</p>
	    </div>
    </div>
  </div>

  <div class="item" id="fairbelief">
    <div class="content">
      <a class="header">FairBelief - Assessing Harmful Beliefs in Large Language Models</a>
      <div class="meta">
        <p class="authors">Anonymous</p>
        <p class="venue reviewing">Under review</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_5">Abstract</a>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_5">
        <p>Language Models (LMs) have been shown to inherit undesired stereotypes that might hurt minorities and underrepresented groups if such systems were to be integrated into real-world applications without careful fairness auditing. This paper proposes FairBelief, an analytical approach to capture and assess beliefs, i.e., propositions that a LM may embed with different degrees of confidence and that covertly influence its predictions. With FairBelief, we leverage prompting to study the behavior of several state-of-the-art LMs across different previously neglected axes, such as model scale and prediction likelihood, assessing predictions on a fairness dataset specifically designed to assess LMs' outputs' hurtfulness. Finally, we conclude with an in-depth qualitative assessment of the beliefs held by the models. We apply FairBelief to English LMs revealing that, although these architectures enable high performances on diverse natural language processing tasks, they show hurtful beliefs about specific genders. Interestingly, training procedure and dataset, model scale, and architecture induce beliefs of different degrees of hurtfulness.</p>
      </div>
      </div>
    </div>

  <div class="item" id="triplex">
    <div class="content">
      <a class="header">TripleX: Triple Extraction for Explanation</a>
      <div class="meta">
        <p class="authors">Mattia Setzu, Anna Monreale, Pasquale Minervini</p>
        <p class="venue">The Third IEEE International Conference on Cognitive Machine Intelligence</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_4">Abstract</a>
        <a class="item" data-tab="bibtex_4">BibTeX</a>
        <a class="item" data-tab="doi_4">DOI</a>
        <a class="item" data-tab="slides_4">Presentations</a>
        <div class="right menu">
          <div class="item">
            <a href="{{ site.baseurl }}/docs/triplex.pdf" download="triplex.pdf"><i class="fa-regular fa-arrow-down-to-line download"></i></a>
          </div>
          <div class="item">
            <a href="https://ieeexplore.ieee.org/document/9750350">
              <i class="fa-regular fa-file-pdf paper"></i>
            </a>
          </div>
          <div class="item">
            <a href="https://github.com/msetzu/triplex">
              <i class="fab fa-github github"></i>
            </a>
          </div>
          <div class="item">
            <a href="https://pypi.org/project/triplex/">
              <i class="fa-light fa-box package"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_4">
        <p>Transformer-based models are used to solve a variety of Natural Language Processing tasks. Still, these models are opaque and poorly understandable for their users. Current approaches to explainability focus on token importance, in which the explanation consists of a set of tokens relevant to the prediction, and natural language explanations, in which the explanation is a generated piece of text. The latter are usually learned by design with models traind end-to-end to provide a prediction and an explanation, or rely on powerful external text generators to do the heavy lifting for them. In this paper we present TriplEx, an explainability algorithm for Transformer-based models fine-tuned on Natural Language Inference, Semantic Text Similarity, or Text Classification tasks. TriplEX explains Transformers-based models by extracting a set of facts from the input data, subsuming it by abstraction, and generating a set of weighted triples as explanation.</p>
      </div>
      <div class="bibtex ui bottom attached tab segment" data-tab="bibtex_4">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button copy" onclick="copy_bibtex_to_clipboard('triplex')"><i class="fa-regular fa-copy"></i></button>
            <a href="{{ site.baseurl }}/bibtex/SetzuMM21.bib" download="SetzuMM21.bib" onclick="download_bibtex('triplex')"><button class="ui button download"><i class="fa-regular fa-arrow-down-to-line"></i></button></a>
          </div>
        </div>
        <pre><code>@inproceedings{DBLP:conf/cogmi/SetzuMM21,
 author       = {Mattia Setzu and
                 Anna Monreale and
                 Pasquale Minervini},
 title        = {TRIPLEx: Triple Extraction for Explanation},
 booktitle    = {CogMI},
 pages        = {44--53},
 publisher    = {{IEEE}},
 year         = {2021}
}</code></pre>
      </div>
      <div class="doi ui bottom attached tab segment" data-tab="doi_4">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button copy" onclick="copy_doi_to_clipboard('triplex')"><i class="fa-regular fa-copy"></i></button>
          </div>
        </div>
        <pre><code>10.1109/CogMI52975.2021.00015</code></pre>
      </div>
      <div class="slides ui bottom attached tab segment" data-tab="slides_4">
        <div class="ui list">
          <div class="item">
            <div class="content">
              <a href="https://docs.google.com/presentation/d/13VpHcMqN7FHv-tGDULCTfd-KArEBzk8ylzu5LD_0xf0/edit?usp=sharing">
                <button class="ui icon button slides">
                  <i class="fa-regular fa-presentation-screen"></i> TriplEx @ COGMI21
                </button>
              </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="item" id="glocalx">
    <div class="content">
      <a class="header">GLocalX - From Local to Global Explanations of Black Box AI Models</a>
      <div class="meta">
        <p class="authors">Mattia Setzu, Riccardo Guidotti, Anna Monreale, Franco Turini, Dino Pedreschi, Fosca Giannotti</p>
        <p class="venue">Journal of Artificial Intelligence</p>
        <p class="venue">International Joint Conference on Artificial Intelligence</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_3">Abstract</a>
        <a class="item" data-tab="bibtex_3">BibTeX</a>
        <a class="item" data-tab="doi_3">DOI</a>
        <a class="item" data-tab="slides_3">Presentations</a>
        <div class="right menu">
          <div class="item">
            <a href="{{ site.baseurl }}/docs/glocalx.pdf" download="glocalx.pdf"><i class="fa-regular fa-arrow-down-to-line download"></i></a>
          </div>
          <div class="item">
            <a href="https://www.sciencedirect.com/science/article/pii/S0004370221000084">
              <i class="fa-regular fa-file-pdf paper"></i>
            </a>
          </div>
          <div class="item">
            <a href="https://github.com/msetzu/glocalx">
              <i class="fab fa-github github"></i>
            </a>
          </div>
          <div class="item">
            <a href="https://pypi.org/project/glocalx/">
              <i class="fa-regular fa-box package"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_3">
        <p>Artificial Intelligence (AI) has come to prominence as one of the major components of our society, with applications in most aspects of our lives. In this field, complex and highly nonlinear machine learning models such as ensemble models, deep neural networks, and Support Vector Machines have consistently shown remarkable accuracy in solving complex tasks. Although accurate, AI models often are “black boxes” which we are not able to understand. Relying on these models has a multifaceted impact and raises significant concerns about their transparency. Applications in sensitive and critical domains are a strong motivational factor in trying to understand the behavior of black boxes. We propose to address this issue by providing an interpretable layer on top of black box models by aggregating “local” explanations.
        <br/>
        We present GLocalX, a “local-first” model agnostic explanation method. Starting from local explanations expressed in form of local decision rules, GLocalX iteratively generalizes them into global explanations by hierarchically aggregating them. Our goal is to learn accurate yet simple interpretable models to emulate the given black box, and, if possible, replace it entirely. We validate GLocalX in a set of experiments in standard and constrained settings with limited or no access to either data or local explanations. Experiments show that GLocalX is able to accurately emulate several models with simple and small models, reaching state-of-the-art performance against natively global solutions. Our findings show how it is often possible to achieve a high level of both accuracy and comprehensibility of classification models, even in complex domains with high-dimensional data, without necessarily trading one property for the other. This is a key requirement for a trustworthy AI, necessary for adoption in high-stakes decision making applications.</p>
      </div>
      <div class="bibtex ui bottom attached tab segment" data-tab="bibtex_3">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button  copy"><i class="fa-regular fa-copy" onclick="copy_bibtex_to_clipboard('glocalx')"></i></button>
            <a href="{{ site.baseurl }}/bibtex/SetzuGMTPG21.bib" download="SetzuGMTPG21.bib" onclick="download_bibtex('glocalx')"><button class="ui button download"><i class="fa-regular fa-arrow-down-to-line"></i></button></a>
          </div>
        </div>
        <pre><code>@article{DBLP:journals/ai/SetzuGMTPG21,
 author       = {Mattia Setzu and
                 Riccardo Guidotti and
                 Anna Monreale and
                 Franco Turini and
                 Dino Pedreschi and
                 Fosca Giannotti},
 title        = {GLocalX - From Local to Global Explanations of Black Box {AI} Models},
 journal      = {Artif. Intell.},
 volume       = {294},
 pages        = {103457},
 year         = {2021}
}</code></pre>
      </div>
      <div class="doi ui bottom attached tab segment" data-tab="doi_3">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button copy" onclick="copy_doi_to_clipboard('glocalx')"><i class="fa-regular fa-copy"></i></button>
          </div>
        </div>
        <pre><code>10.1016/j.artint.2021.103457</code></pre>
	    </div>
      <div class="slides ui bottom attached tab segment" data-tab="slides_3">
        <div class="ui fluid vertical menu">
          <div class="item">
              <a href="https://docs.google.com/presentation/d/10cpWMltKTPK_8c2vbvBWZH_vHYK_VF0QvNN-gmIOQbU/edit?usp=sharing">
                <button class="ui icon button slides">
                  <i class="fa-regular fa-presentation-screen"></i> GLocalX @ Banca Intesa
                </button>
              </a>
          </div>
          <div class="item">
            <div class="content">
              <a href="https://docs.google.com/presentation/d/10jkZpy4jT1R1VXsriGEyXHJa8I_IM5HVX3RKJApuMBQ/edit?usp=sharing">
                <button class="ui icon button slides">
                  <i class="fa-regular fa-presentation-screen"></i> GLocalX @ Imperial
                </button>
              </a>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <a href="https://docs.google.com/presentation/d/1NtdHVafSCWHok7vgkGQnTIEmnQIBSrC5baV8xhBPgIQ/edit?usp=sharing">
                <button class="ui icon button slides">
                  <i class="fa-regular fa-presentation-screen"></i> GLocalX @ IJCAI
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="item" id="rule-relevance-score">
    <div class="content">
      <a class="header">Global Explanations with Local Scoring</a>
      <div class="meta">
        <p class="authors">Mattia Setzu, Riccardo Guidotti, Anna Monreale, and Franco Turini</p>
        <p class="venue">Advances in Interpretable Machine Learning and Artificial Intelligence & eXplainable Knowledge Discovery in Data Mining</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_2">Abstract</a>
        <a class="item" data-tab="bibtex_2">BibTeX</a>
        <a class="item" data-tab="doi_2">DOI</a>
        <div class="right menu">
          <div class="item">
            <a href="{{ site.baseurl }}/docs/rule-relevance-score.pdf" download="rule-relevance-score.pdf"><i class="fa-regular fa-arrow-down-to-line download"></i></a>
          </div>
          <div class="item">
            <a href="https://link.springer.com/chapter/10.1007/978-3-030-43823-4_14">
              <i class="fa-regular fa-file-pdf paper"></i>
            </a>
          </div>
          <div class="item">
            <a href="https://github.com/msetzu/rule-relevance-score">
              <i class="fab fa-github github"></i>
            </a>
          </div>
          <div class="item">
            <a href="https://pypi.org/project/rule-relevance-score/">
              <i class="fa-regular fa-box package"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_2">
        <p>Artificial Intelligence systems often adopt machine learning models encoding complex algorithms with potentially unknown behavior. As the application of these “black box” models grows, it is our responsibility to understand their inner working and formulate them in human-understandable explanations. To this end, we propose a rule-based model-agnostic explanation method that follows a local-to-global schema: it generalizes a global explanation summarizing the decision logic of a black box starting from the local explanations of single predicted instances. We define a scoring system based on a rule relevance score to extract global explanations from a set of local explanations in the form of decision rules. Experiments on several datasets and black boxes show the stability, and low complexity of the global explanations provided by the proposed solution in comparison with baselines and state-of-the-art global explainers.</p>
      </div>
      <div class="bibtex ui bottom attached tab segment" data-tab="bibtex_2">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
              <button class="ui button copy" onclick="copy_bibtex_to_clipboard('rule-relevance-score')"><i class="fa-regular fa-copy"></i></button>
              <a href="{{ site.baseurl }}/bibtex/SetzuGMT19.bib" download="SetzuGMT19.bib" onclick="download_bibtex('rule-relevance-score')"><button class="ui button download"><i class="fa-regular fa-arrow-down-to-line"></i></button></a>
          </div>
        </div>
        <pre><code>@inproceedings{DBLP:conf/pkdd/SetzuGMT19,
author       = {Mattia Setzu and
                Riccardo Guidotti and
                Anna Monreale and
                Franco Turini},
title        = {Global Explanations with Local Scoring},
booktitle    = {\{PKDD/ECML\} Workshops {(1)}},
series       = {Communications in Computer and Information Science},
volume       = {1167},
pages        = {159--171},
publisher    = {Springer},
year         = {2019}
}</code></pre>
      </div>
      <div class="doi ui bottom attached tab segment" data-tab="doi_2">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button copy" onclick="copy_doi_to_clipboard('rule-relevance-score')"><i class="fa-regular fa-copy"></i></button>
          </div>
        </div>
        <pre><code>10.1007/978-3-030-43823-4_14</code></pre>
    </div>
    </div>
  </div>

  <div class="item" id="sparql">
    <!-- <div class="image">
      <img src="{{ site.baseurl }}/images/sparql.png">
    </div> -->
    <div class="content">
      <a class="header">SPARQL Queries over Source Code</a>
      <div class="meta">
        <p class="authors">Mattia Setzu, Maurizio Atzori</p>
        <p class="venue">Tenth IEEE International Conference on Semantic Computing,</p>
      </div>
      <div class="ui top attached tabular menu">
        <a class="item active" data-tab="abstract_1">Abstract</a>
        <a class="item" data-tab="bibtex_1">BibTeX</a>
        <a class="item" data-tab="doi_1">DOI</a>
        <div class="right menu">
          <div class="item">
            <a href="{{ site.baseurl }}/docs/sparql.pdf" download="sparql.pdf"><i class="fa-regular fa-arrow-down-to-line download"></i></a>
          </div>
          <div class="item">
            <a href="https://ieeexplore.ieee.org/document/7439313">
              <i class="fa-regular fa-file-pdf paper"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="description ui bottom attached tab segment active" data-tab="abstract_1">
        <p>We introduce a framework to extract and parse Java source code, serialize it into RDF triples by applying an appropriate ontology and then analyze the resulting structured code information by using standard SPARQL queries. We present our experiments on a sample of 134 Java repositories collected from Github, obtaining 17 Million triples about methods, input and output types, comments, and other source code information. Experiments also address the scalability of the framework. We finally provide examples of the level of expressivity that can be achieved with SPARQL by using our proposed ontology and semantic technologies.</p>
      </div>
      <div class="bibtex ui bottom attached tab segment" data-tab="bibtex_1">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button  copy"><i class="fa-regular fa-copy" onclick="copy_bibtex_to_clipboard('sparql')"></i></button>
            <a href="{{ site.baseurl }}/bibtex/SetzuA16.bib" download="SetzuA16.bib" onclick="download_bibtex('sparql')"><button class="ui button download"><i class="fa-regular fa-arrow-down-to-line"></i></button></a>
          </div>
        </div>
        <pre><code>@inproceedings{DBLP:conf/semco/SetzuA16,
  author       = {Mattia Setzu and
                  Maurizio Atzori},
  title        = {SPARQL Queries over Source Code},
  booktitle    = {{ICSC}},
  pages        = {104--106},
  publisher    = {IEEE Computer Society},
  year         = {2016}
}</code></pre>
      </div>
      <div class="doi ui bottom attached tab segment" data-tab="doi_1">
        <div class="ui bottom attached label">
          <div class="ui small basic icon buttons action">
            <button class="ui button copy" onclick="copy_doi_to_clipboard('sparql')"><i class="fa-regular fa-copy"></i></button>
          </div>
        </div>
        <pre><code>10.1109/ICSC.2016.65</code></pre>
        </div>
    </div>
  </div>

</div>

</div>



<div id="education">
  <h1 class="ui horizontal divider header">
  <i class="fa-regular fa-graduation-cap"></i>
  Education
  </h1>
	
  <div class="ui segment">
    <h3 class="ui left floated header"><i class="fa-regular fa-chalkboard-user"></i> Post-doc</h3>
    <div class="timeline">June 2023 - ... <i class="fa-xs fa-light fa-calendar"></i></div>
    <div class="ui clearing divider"></div>
      <div class="ui list">
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-school"></i>
            University of Pisa
          </div>
        </div>
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-location"></i>
            Pisa, Italy
          </div>
        </div> -->
      </div>
  </div>

  <div class="ui segment">
    <h3 class="ui left floated header"><i class="fa-regular fa-magnifying-glass"></i> Research Fellowship</h3>
    <div class="timeline">April 2021 - May 2023 <i class="fa-xs fa-light fa-calendar"></i></div>
    <div class="ui clearing divider"></div>
      <div class="ui list">
        <div class="item">
          <div class="content">
            <i class="fa-light fa-book-open"></i>
            Enriching Uninterpretable Machine Learning Models with Explanations with Local to Global Methodologies
          </div>
        </div>
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-school"></i>
            University of Pisa
          </div>
        </div>
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-location"></i>
            Pisa, Italy
          </div>
        </div> -->
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-calendar"></i>
            April 2021 -- May 2023
          </div>
        </div> -->
      </div>
  </div>

  <div class="ui segment">
    <h3 class="ui left floated header"><i class="fa-regular fa-magnifying-glass"></i> Research Grant</h3>
    <div class="timeline">Dec 2020 - April 2021 <i class="fa-xs fa-light fa-calendar"></i></div>
    <div class="ui clearing divider"></div>
      <div class="ui list">
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-school"></i>
            University of Pisa
          </div>
        </div>
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-location"></i>
            Pisa, Italy
          </div>
        </div> -->
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-calendar"></i>
            Dec 2020 -- April 2021
          </div>
        </div> -->
      </div>
  </div>

  <div class="ui segment">
    <h3 class="ui left floated header"><i class="fa-regular fa-graduation-cap"></i> Ph.D. in Computer Science</h3>
    <div class="timeline">November 2018 - May 2022 <i class="fa-xs fa-light fa-calendar"></i></div>
    <div class="ui clearing divider"></div>
      <div class="ui list">
        <div class="item">
          <div class="content">
            <i class="fa-light fa-book-open"></i>
            Opening the Black Box: Empowering Machine Learning Models with Explanations
          </div>
        </div>
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-school"></i>
            University of Pisa
          </div>
        </div>
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-location"></i>
            Pisa, Italy
          </div>
        </div> -->
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-calendar"></i>
            Nov. 2018 -- May 2022
          </div>
        </div> -->
      </div>
  </div>

  <div class="ui segment">
    <h3 class="ui left floated header"><i class="fa-regular fa-graduation-cap"></i> Master's Degree in Computer Science</h3>
    <div class="timeline">September 2016 – October 2018 <i class="fa-xs fa-light fa-calendar"></i></div>
    <div class="ui clearing divider"></div>
      <div class="ui list">
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-book-open"></i>
            Building Global Interpretable Classifiers via Local Explanations
          </div>
        </div>
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-school"></i>
            University of Pisa
          </div>
        </div>
<!--         <div class="item">
          <div class="content">
            <i class="fa-light fa-location"></i>
            Pisa, Italy
          </div>
        </div> -->
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-calendar"></i>
            Sept. 2016 – Oct. 2018
          </div>
        </div> -->
      </div>
  </div>

  <div class="ui segment">
    <h3 class="ui left floated header"><i class="fa-regular fa-graduation-cap"></i> Bachelor's Degree in Computer Science</h3>
    <div class="timeline">September 2013 – March 2016 <i class="fa-xs fa-light fa-calendar"></i></div>
    <div class="ui clearing divider"></div>
      <div class="ui list">
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-book-open"></i>
            CodeOntology: a Java semantic database
          </div>
        </div>
        <div class="item">
          <div class="content">
            <i class="fa-regular fa-school"></i>
            University of Cagliari
          </div>
        </div>
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-location"></i>
            Cagliari, Italy
          </div>
        </div> -->
        <!-- <div class="item">
          <div class="content">
            <i class="fa-light fa-calendar"></i>
            Sept. 2013 – Mar. 2016
          </div>
        </div> -->
      </div>
  </div>
</div>

<div id="software">
  <h1 class="ui horizontal divider header">
  <i class="fab fa-github"></i>
  Software
  </h1>
  
  <div class="ui cards software">
    <div class="ui card">
      <div class="content">
        <div class="header">Autotraino</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="">
                <p>A small wrapper library for AutoML on tabular datasets.</p>
              </div>
            </div>
          </div>
          <div class="event infos">
            <div class="content">
              <div class="summary">
                 <i class="fa-regular fa-hashtag"></i>
                 0.1.0
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <i class="fa-regular fa-code"></i>
                Python 3.11
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui icon buttons">
          <!-- <a href="{{ site.baseurl }}/me#fairbelief"><button class="ui button paper"><i class="fa-regular fa-file-pdf"></i></button></a> -->
          <a href="https://github.com/msetzu/autotraino"><button class="ui button github"><i class="fab fa-github"></i></button></a>
          <a href="https://pypi.org/project/autotraino"><button class="ui button package"><i class="fa-regular fa-box"></i></button></a>
        </div>
      </div>
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">Datati</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="">
                <p>A library all'avanguardia for tabular dataset loading and preprocessing.</p>
              </div>
            </div>
          </div>
          <div class="event infos">
            <div class="content">
              <div class="summary">
                 <i class="fa-regular fa-hashtag"></i>
                 0.1.0
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <i class="fa-regular fa-code"></i>
                Python 3.11
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui icon buttons">
          <!-- <a href="{{ site.baseurl }}/me#fairbelief"><button class="ui button paper"><i class="fa-regular fa-file-pdf"></i></button></a> -->
          <a href="https://github.com/msetzu/datati"><button class="ui button github"><i class="fab fa-github"></i></button></a>
          <a href="https://pypi.org/project/datati/"><button class="ui button package"><i class="fa-regular fa-box"></i></button></a>
        </div>
      </div>
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">FairBelief</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="">
                <p>Implementation of the "FairBelief - Assessing Harmful Beliefs in Large Language Models" paper.</p>
              </div>
            </div>
          </div>
          <div class="event infos">
            <div class="content">
              <div class="summary">
                 <i class="fa-regular fa-hashtag"></i>
                 0.0.1
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <i class="fa-regular fa-code"></i>
                Python 3.9
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui icon buttons">
          <!-- <a href="{{ site.baseurl }}/me#fairbelief"><button class="ui button paper"><i class="fa-regular fa-file-pdf"></i></button></a> -->
          <a href="https://github.com/msetzu/fairbelief"><button class="ui button github"><i class="fab fa-github"></i></button></a>
          <!-- <a href="https://pypi.org/project/polylearner/"><button class="ui button package"><i class="fa-regular fa-box"></i></button></a> -->
        </div>
      </div>
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">PolyLearner</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="">
                <p>Implementation of the "Learning from Polyhedra" IJCAI paper.</p>
              </div>
            </div>
          </div>
          <div class="infos">
            <div class="event">
              <div class="content">
                <div class="summary">
                   <i class="fa-regular fa-hashtag"></i>
                   0.1.1
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <i class="fa-regular fa-code"></i>
                  Python 3.11
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui icon buttons">
          <a href="https://www.ijcai.org/Proceedings/13/Papers/162.pdf"><button class="ui button paper"><i class="fa-regular fa-file-pdf"></i></button></a>
          <a href="https://github.com/msetzu/polylearner"><button class="ui button github"><i class="fab fa-github"></i></button></a>
          <a href="https://pypi.org/project/polylearner/"><button class="ui button package"><i class="fa-regular fa-box"></i></button></a>
        </div>
      </div>
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">TriplEx</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="">
                <p>Implementation of the TriplEx paper.</p>
              </div>
            </div>
          </div>
          <div class="infos">
            <div class="event">
              <div class="content">
                <div class="summary">
                   <i class="fa-regular fa-hashtag"></i>
                   0.0.14
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <i class="fa-regular fa-code"></i>
                  Python 3.10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui icon buttons">
          <a href="{{ site.baseurl }}/me#triplex"><button class="ui button paper"><i class="fa-regular fa-file-pdf"></i></button></a>
          <a href="https://github.com/msetzu/triplex"><button class="ui button github"><i class="fab fa-github"></i></button></a>
          <a href="https://pypi.org/project/triplex/"><button class="ui button package"><i class="fa-regular fa-box"></i></button></a>
        </div>
      </div>
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">GLocalX</div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="">
                <p>Implementation of the GLocalX paper.</p>
              </div>
            </div>
          </div>
          <div class="infos">
            <div class="event">
              <div class="content">
                <div class="summary">
                   <i class="fa-regular fa-hashtag"></i>
                   0.0.5
                </div>
              </div>
            </div>
            <div class="event">
              <div class="content">
                <div class="summary">
                  <i class="fa-regular fa-code"></i>
                  Python 3.8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui icon buttons">
          <a href="{{ site.baseurl }}/me#glocalx"><button class="ui button paper"><i class="fa-regular fa-file-pdf"></i></button></a>
          <a href="https://github.com/msetzu/glocalx"><button class="ui button github"><i class="fab fa-github"></i></button></a>
          <a href="https://pypi.org/project/glocalx/"><button class="ui button package"><i class="fa-regular fa-box"></i></button></a>
        </div>
      </div>
    </div> 
  </div>
</div>

<div id="presentations">
  <h1 class="ui horizontal divider header">
  <i class="fa-regular fa-presentation-screen"></i>
  Talks
  </h1>
  
  <div class="ui relaxed divided list">
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1KIffNV_-wfOmHd6TosFMQR1VzREwU60vGycGfkAeiew/edit?usp=sharing">
      <button class="ui button slides">
        <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Trustworthy AI @ KDD Lab</a>
        <div class="description">30/5/2023</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1eP8BEH7GOPMO1kHNL9mu1meVy-mRPRZLhf1KwlwHxFs/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Seminar on Transformers and Large Language Models</a>
        <div class="description">16/5/2023</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/10cpWMltKTPK_8c2vbvBWZH_vHYK_VF0QvNN-gmIOQbU/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">GLocalX @ Banca Intesa</a>
        <div class="description">1/12/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1wd57LGu7BJ8qI54c3Gzs1A9EMHRUQg2nU47wdGl0H9I/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">PhD defense</a>
        <div class="description">1/12/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Tools in a toolbox</a>
        <div class="description">9/12/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1XJnMBnVz59BJ_SmgVrAvzO87EraRXyQFZOaq7kwo_yk/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Coding for research</a>
        <div class="description">15/11/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1cr_rOJp-e1376kCbZoMyT06l7eSyug-mk6VI4BV7gw0/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Reading fast and slow</a>
        <div class="description">8/11/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1eP8BEH7GOPMO1kHNL9mu1meVy-mRPRZLhf1KwlwHxFs/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Seminar on Transformers and Large Language Models</a>
        <div class="description">16/5/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/10jkZpy4jT1R1VXsriGEyXHJa8I_IM5HVX3RKJApuMBQ/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">GLocalX @ Imperial</a>
        <div class="description">17/3/2022</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/13VpHcMqN7FHv-tGDULCTfd-KArEBzk8ylzu5LD_0xf0/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">TriplEx @ COGMI</a>
        <div class="description">14/2/2021</div>
      </div>
    </div>
     <div class="item">
      <a href="https://docs.google.com/presentation/d/13VpHcMqN7FHv-tGDULCTfd-KArEBzk8ylzu5LD_0xf0/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">GLocalX @ IJCAI</a>
        <div class="description">10/8/2021</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1m9QVj-SY_PCCqiXwnf8Gas1HsFlCB_be6b-_kiHmj2w/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Understanding the role of individual units in a deep neural network</a>
        <div class="description">12/11/2019</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/11D0b5lZh-0l6OnsDZ1-KTr4x_PkzoNGAjmBAjpblppg/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">DeepProbLog: Neural Probabilistic Logic Programming</a>
        <div class="description">Spotlights of ECML/PKDD 2019</div>
        <div class="description">5/11/2019</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/1eARAdrzr9ymT5JQ6kdmrXjqmGWZVe2hSfxFKyE_yoJw/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Agnostic Feature selection</a>
        <div class="description">Spotlights of ECML/PKDD 2019</div>
        <div class="description">5/11/2019</div>
      </div>
    </div>
    <div class="item">
      <a href="https://docs.google.com/presentation/d/15ggVR0J3p7n5hd0PO-SfZT0X7MoZyh-fvHpCoc1ExDM/edit?usp=sharing">
      <button class="ui button slides">
      <i class="fa-regular fa-presentation-screen"></i>
      </button>
      </a>
      <div class="content">
        <a class="header">Fast Gradient Boosting Decision Trees with Bit-Level Data Structures</a>
        <div class="description">Spotlights of ECML/PKDD 2019</div>
        <div class="description">5/11/2019</div>
      </div>
    </div>

  </div>

</div>
</div>

