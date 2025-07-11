const academicIntermediateWords = [
  // Palabras iniciales
  { word: "analysis", definition: "análisis", example: "The analysis was thorough.", frequency: "high", wordType: "noun" },
  { word: "conclusion", definition: "conclusión", example: "The conclusion is based on the data.", frequency: "high", wordType: "noun" },
  { word: "methodology", definition: "metodología", example: "The methodology used was effective.", frequency: "high", wordType: "noun" },
  { word: "interpret", definition: "interpretar", example: "How do you interpret these results?", frequency: "high", wordType: "verb" },
  { word: "evaluate", definition: "evaluar", example: "We need to evaluate the effectiveness of the program.", frequency: "high", wordType: "verb" },

  // Nuevas adiciones
  { word: "paradigm", definition: "paradigma", example: "A new paradigm in scientific thought emerged.", frequency: "medium", wordType: "noun" },
  { word: "synthesis", definition: "síntesis", example: "The synthesis of various theories led to a new understanding.", frequency: "medium", wordType: "noun" },
  { word: "discourse", definition: "discurso", example: "Academic discourse requires precision and clarity.", frequency: "medium", wordType: "noun" },
  { word: "empirical", definition: "empírico", example: "Empirical evidence supports the claim.", frequency: "high", wordType: "adjective" },
  { word: "correlation", definition: "correlación", example: "There is a strong correlation between exercise and health.", frequency: "medium", wordType: "noun" },
  { word: "criterion", definition: "criterio", example: "What is the main criterion for success?", frequency: "medium", wordType: "noun" },
  { word: "inference", definition: "inferencia", example: "We can draw an inference from the observed patterns.", frequency: "medium", wordType: "noun" },
  { word: "phenomena", definition: "fenómenos", example: "These natural phenomena are fascinating to study.", frequency: "medium", wordType: "noun" },
  { word: "implication", definition: "implicación", example: "Consider the ethical implications of your research.", frequency: "high", wordType: "noun" },
  { word: "perspective", definition: "perspectiva", example: "The study offers a new perspective on the issue.", frequency: "high", wordType: "noun" },
  { word: "framework", definition: "marco (conceptual)", example: "The theoretical framework guides the entire study.", frequency: "high", wordType: "noun" },
  { word: "validate", definition: "validar", example: "We need to validate the new assessment tool.", frequency: "medium", wordType: "verb" },
  { word: "substantiate", definition: "fundamentar/corroborar", example: "Can you substantiate your claims with evidence?", frequency: "medium", wordType: "verb" },
  { word: "articulate", definition: "articular/expresar claramente", example: "Articulate your arguments clearly and concisely.", frequency: "medium", wordType: "verb" },
  { word: "elucidate", definition: "dilucidar/aclarar", example: "The professor elucidated the complex theory.", frequency: "low", wordType: "verb" },
  { word: "delineate", definition: "delinear/describir", example: "Delineate the boundaries of your research.", frequency: "medium", wordType: "verb" },
  { word: "underscore", definition: "subrayar/enfatizar", example: "The report underscores the importance of early intervention.", frequency: "medium", wordType: "verb" },
  { word: "underscore", definition: "subrayar/enfatizar", example: "The report underscores the importance of early intervention.", frequency: "medium", wordType: "verb" },
  { word: "conjecture", definition: "conjetura", example: "His theory is still a conjecture, awaiting empirical testing.", frequency: "medium", wordType: "noun" },
  { word: "premise", definition: "premisa", example: "The argument is based on a false premise.", frequency: "medium", wordType: "noun" },
  { word: "postulate", definition: "postulado", example: "Euclid's postulates are fundamental to geometry.", frequency: "medium", wordType: "noun" },
  { word: "proposition", definition: "proposición", example: "The main proposition of the paper is clearly stated.", frequency: "medium", wordType: "noun" },
  { word: "assertion", definition: "afirmación", example: "His assertion lacked sufficient evidence.", frequency: "medium", wordType: "noun" },
  { word: "rebuttal", definition: "refutación", example: "She presented a strong rebuttal to the criticism.", frequency: "medium", wordType: "noun" },
  { word: "counterargument", definition: "contraargumento", example: "Anticipate and address potential counterarguments.", frequency: "medium", wordType: "noun" },
  { word: "nuance", definition: "matiz", example: "The expert explained the subtle nuances of the policy.", frequency: "medium", wordType: "noun" },
  { word: "dichotomy", definition: "dicotomía", example: "The dichotomy between theory and practice is often discussed.", frequency: "medium", wordType: "noun" },
  { word: "typology", definition: "tipología", example: "The research developed a new typology of learning styles.", frequency: "low", wordType: "noun" },
  { word: "taxonomy", definition: "taxonomía", example: "Biological taxonomy classifies living organisms.", frequency: "low", wordType: "noun" },
  { word: "heuristic", definition: "heurístico", example: "A heuristic approach can help solve complex problems.", frequency: "low", wordType: "adjective" },
  { word: "epistemology", definition: "epistemología", example: "Epistemology is the study of knowledge.", frequency: "low", wordType: "noun" },
  { word: "ontology", definition: "ontología", example: "Ontology deals with the nature of being.", frequency: "low", wordType: "noun" },
  { word: "paradox", definition: "paradoja", example: "The paradox of choice suggests more options can lead to less satisfaction.", frequency: "medium", wordType: "noun" },
  { word: "conundrum", definition: "acertijo/dilema", example: "The ethical conundrum posed a difficult decision.", frequency: "medium", wordType: "noun" },
  { word: "vignette", definition: "viñeta", example: "The book begins with a short vignette about the protagonist's childhood.", frequency: "low", wordType: "noun" },
  { word: "anecdote", definition: "anécdota", example: "He often uses anecdotes to illustrate his points.", frequency: "medium", wordType: "noun" },
  { word: "exemplify", definition: "ejemplificar", example: "The case study exemplifies the challenges faced by small businesses.", frequency: "medium", wordType: "verb" },
  { word: "corroborate", definition: "corroborar", example: "New evidence emerged to corroborate the witness's testimony.", frequency: "medium", wordType: "verb" },
  { word: "refute", definition: "refutar", example: "The scientist attempted to refute the opposing theory.", frequency: "medium", wordType: "verb" },
  { word: "discredit", definition: "desacreditar", example: "The aim of the article was to discredit the previous research.", frequency: "medium", wordType: "verb" },
  { word: "underscore", definition: "subrayar/enfatizar", example: "The report underscores the urgency of the situation.", frequency: "medium", wordType: "verb" },
  { word: "elucidate", definition: "dilucidar/aclarar", example: "Can you elucidate your reasoning behind this decision?", frequency: "medium", wordType: "verb" },
  { word: "synthesize", definition: "sintetizar", example: "The ability to synthesize information from various sources is crucial.", frequency: "high", wordType: "verb" },
  { word: "formulate", definition: "formular", example: "Formulate a clear and testable hypothesis.", frequency: "high", wordType: "verb" },
  { word: "differentiate", definition: "diferenciar", example: "It's important to differentiate between correlation and causation.", frequency: "medium", wordType: "verb" },
  { word: "distinguish", definition: "distinguir", example: "Distinguish between the various types of research methods.", frequency: "high", wordType: "verb" },
  { word: "pertain", definition: "pertenecer/referirse a", example: "The rules pertain to all students.", frequency: "medium", wordType: "verb" },
  { word: "comprise", definition: "comprender/constar de", example: "The committee comprises ten members.", frequency: "medium", wordType: "verb" },
  { word: "constitute", definition: "constituir", example: "These elements constitute the core of the problem.", frequency: "medium", wordType: "verb" },
  { word: "underscore", definition: "subrayar/enfatizar", example: "The findings underscore the need for further investigation.", frequency: "medium", wordType: "verb" },
  { word: "elucidate", definition: "dilucidar/aclarar", example: "The speaker tried to elucidate the complex concept.", frequency: "medium", wordType: "verb" },
  { word: "delineate", definition: "delinear/describir", example: "The report delineates the responsibilities of each department.", frequency: "medium", wordType: "verb" },
  { word: "conjecture", definition: "conjetura", example: "His theory is still a conjecture, awaiting empirical testing.", frequency: "medium", wordType: "noun" },
  { word: "premise", definition: "premisa", example: "The argument is based on a false premise.", frequency: "medium", wordType: "noun" },
  { word: "postulate", definition: "postulado", example: "Euclid's postulates are fundamental to geometry.", frequency: "medium", wordType: "noun" },
  { word: "proposition", definition: "proposición", example: "The main proposition of the paper is clearly stated.", frequency: "medium", wordType: "noun" },
  { word: "assertion", definition: "afirmación", example: "His assertion lacked sufficient evidence.", frequency: "medium", wordType: "noun" },
  { word: "rebuttal", definition: "refutación", example: "She presented a strong rebuttal to the criticism.", frequency: "medium", wordType: "noun" },
  { word: "counterargument", definition: "contraargumento", example: "Anticipate and address potential counterarguments.", frequency: "medium", wordType: "noun" },
  { word: "nuance", definition: "matiz", example: "The expert explained the subtle nuances of the policy.", frequency: "medium", wordType: "noun" },
  { word: "dichotomy", definition: "dicotomía", example: "The dichotomy between theory and practice is often discussed.", frequency: "medium", wordType: "noun" },
  { word: "typology", definition: "tipología", example: "The research developed a new typology of learning styles.", frequency: "low", wordType: "noun" },
  { word: "taxonomy", definition: "taxonomía", example: "Biological taxonomy classifies living organisms.", frequency: "low", wordType: "noun" },
  { word: "heuristic", definition: "heurístico", example: "A heuristic approach can help solve complex problems.", frequency: "low", wordType: "adjective" },
  { word: "epistemology", definition: "epistemología", example: "Epistemology is the study of knowledge.", frequency: "low", wordType: "noun" },
  { word: "ontology", definition: "ontología", example: "Ontology deals with the nature of being.", frequency: "low", wordType: "noun" },
  { word: "paradox", definition: "paradoja", example: "The paradox of choice suggests more options can lead to less satisfaction.", frequency: "medium", wordType: "noun" },
  { word: "conundrum", definition: "acertijo/dilema", example: "The ethical conundrum posed a difficult decision.", frequency: "medium", wordType: "noun" },
  { word: "vignette", definition: "viñeta", example: "The book begins with a short vignette about the protagonist's childhood.", frequency: "low", wordType: "noun" },
  { word: "anecdote", definition: "anécdota", example: "He often uses anecdotes to illustrate his points.", frequency: "medium", wordType: "noun" },
  { word: "exemplify", definition: "ejemplificar", example: "The case study exemplifies the challenges faced by small businesses.", frequency: "medium", wordType: "verb" },
  { word: "corroborate", definition: "corroborar", example: "New evidence emerged to corroborate the witness's testimony.", frequency: "medium", wordType: "verb" },
  { word: "refute", definition: "refutar", example: "The scientist attempted to refute the opposing theory.", frequency: "medium", wordType: "verb" },
  { word: "discredit", definition: "desacreditar", example: "The aim of the article was to discredit the previous research.", frequency: "medium", wordType: "verb" },
  { word: "underscore", definition: "subrayar/enfatizar", example: "The report underscores the urgency of the situation.", frequency: "medium", wordType: "verb" },
  { word: "elucidate", definition: "dilucidar/aclarar", example: "Can you elucidate your reasoning behind this decision?", frequency: "medium", wordType: "verb" },
  { word: "synthesize", definition: "sintetizar", example: "The ability to synthesize information from various sources is crucial.", frequency: "high", wordType: "verb" },
  { word: "formulate", definition: "formular", example: "Formulate a clear and testable hypothesis.", frequency: "high", wordType: "verb" },
  { word: "differentiate", definition: "diferenciar", example: "It's important to differentiate between correlation and causation.", frequency: "medium", wordType: "verb" },
  { word: "distinguish", definition: "distinguir", example: "Distinguish between the various types of research methods.", frequency: "high", wordType: "verb" },
  { word: "pertain", definition: "pertenecer/referirse a", example: "The rules pertain to all students.", frequency: "medium", wordType: "verb" },
  { word: "comprise", definition: "comprender/constar de", example: "The committee comprises ten members.", frequency: "medium", wordType: "verb" },
  { word: "constitute", definition: "constituir", example: "These elements constitute the core of the problem.", frequency: "medium", wordType: "verb" },
  { word: "conducive", definition: "propicio", example: "A quiet environment is conducive to studying.", frequency: "medium", wordType: "adjective" },
  { word: "pertinent", definition: "pertinente", example: "Provide only pertinent information for the report.", frequency: "medium", wordType: "adjective" },
  { word: "salient", definition: "más importante/destacado", example: "Identify the salient points of the argument.", frequency: "medium", wordType: "adjective" },
  { word: "ubiquitous", definition: "ubicuo", example: "Smartphones have become ubiquitous in modern society.", frequency: "medium", wordType: "adjective" },
  { word: "verifiable", definition: "verificable", example: "Ensure your data is verifiable and reliable.", frequency: "medium", wordType: "adjective" },
  { word: "plausible", definition: "verosímil/creíble", example: "The explanation seems plausible.", frequency: "medium", wordType: "adjective" },
  { word: "tenable", definition: "sostenible/defendible", example: "His argument is no longer tenable given the new evidence.", frequency: "medium", wordType: "adjective" },
  { word: "cogent", definition: "convincente/sólido", example: "She presented a cogent argument for her proposal.", frequency: "medium", wordType: "adjective" },
  { word: "compelling", definition: "convincente/cautivador", example: "The evidence was so compelling that the jury convicted him.", frequency: "medium", wordType: "adjective" },
  { word: "rigorous", definition: "riguroso", example: "The study underwent rigorous peer-review.", frequency: "high", wordType: "adjective" },
  { word: "comprehensive", definition: "exhaustivo/completo", example: "The report provides a comprehensive overview.", frequency: "high", wordType: "adjective" },
  { word: "nuanced", definition: "matizado", example: "The discussion offered a nuanced understanding of the issue.", frequency: "medium", wordType: "adjective" },
  { word: "ambiguous", definition: "ambiguo", example: "Avoid ambiguous language in academic writing.", frequency: "medium", wordType: "adjective" },
  { word: "equivocal", definition: "equívoco", example: "His response was equivocal, leaving us unsure of his stance.", frequency: "low", wordType: "adjective" },
  { word: "unequivocal", definition: "inequívoco", example: "The evidence was unequivocal.", frequency: "medium", wordType: "adjective" },
  { word: "inherent", definition: "inherente", example: "There are inherent risks in any new venture.", frequency: "medium", wordType: "adjective" },
  { word: "intrinsic", definition: "intrínseco", example: "The intrinsic value of the artwork is immense.", frequency: "medium", wordType: "adjective" },
  { word: "extrinsic", definition: "extrínseco", example: "Extrinsic factors influenced the decision.", frequency: "medium", wordType: "adjective" },
  { word: "contingent", definition: "contingente/dependiente de", example: "Success is contingent upon effort.", frequency: "medium", wordType: "adjective" },
  { word: "paradoxical", definition: "paradójico", example: "It's a paradoxical situation where more choices lead to less satisfaction.", frequency: "medium", wordType: "adjective" },
  { word: "hypothetical", definition: "hipotético", example: "Let's consider a hypothetical scenario.", frequency: "medium", wordType: "adjective" },
  { word: "speculative", definition: "especulativo", example: "The article makes some speculative claims.", frequency: "medium", wordType: "adjective" },
  { word: "prescriptive", definition: "prescriptivo", example: "The guidelines are prescriptive, detailing exactly what to do.", frequency: "medium", wordType: "adjective" },
  { word: "descriptive", definition: "descriptivo", example: "The study provides a descriptive analysis of the population.", frequency: "medium", wordType: "adjective" },
  { word: "normative", definition: "normativo", example: "Ethics is a normative discipline.", frequency: "medium", wordType: "adjective" },
  { word: "empirical", definition: "empírico", example: "Empirical research relies on observation and experience.", frequency: "high", wordType: "adjective" },
  { word: "theoretical", definition: "teórico", example: "The theoretical framework provides a foundation for the study.", frequency: "high", wordType: "adjective" },
  { word: "conceptual", definition: "conceptual", example: "Clarify the conceptual understanding of the problem.", frequency: "high", wordType: "adjective" },
  { word: "abstract", definition: "abstracto", example: "Philosophical concepts can be quite abstract.", frequency: "medium", wordType: "adjective" },
  { word: "concrete", definition: "concreto", example: "Provide concrete examples to support your arguments.", frequency: "medium", wordType: "adjective" },
  { word: "deductive", definition: "deductivo", example: "Deductive reasoning moves from general principles to specific conclusions.", frequency: "medium", wordType: "adjective" },
  { word: "inductive", definition: "inductivo", example: "Inductive reasoning draws general conclusions from specific observations.", frequency: "medium", wordType: "adjective" },
  { word: "qualitative", definition: "cualitativo", example: "Qualitative research explores experiences and meanings.", frequency: "high", wordType: "adjective" },
  { word: "quantitative", definition: "cuantitativo", example: "Quantitative data involves numerical measurements.", frequency: "high", wordType: "adjective" },
  { word: "longitudinal", definition: "longitudinal", example: "A longitudinal study tracks participants over a long period.", frequency: "medium", wordType: "adjective" },
  { word: "cross-sectional", definition: "transversal", example: "A cross-sectional study examines data from a population at a specific point in time.", frequency: "medium", wordType: "adjective" },
  { word: "interdisciplinary", definition: "interdisciplinario", example: "The project requires an interdisciplinary approach.", frequency: "medium", wordType: "adjective" },
  { word: "multidisciplinary", definition: "multidisciplinario", example: "The conference featured multidisciplinary presentations.", frequency: "medium", wordType: "adjective" },
  { word: "holistic", definition: "holístico", example: "A holistic approach considers all aspects of a problem.", frequency: "medium", wordType: "adjective" },
  { word: "systematic", definition: "sistemático", example: "Conduct a systematic review of the literature.", frequency: "high", wordType: "adjective" },
  { word: "rigorous", definition: "riguroso", example: "The research design was rigorous and well-controlled.", frequency: "high", wordType: "adjective" },
  { word: "robust", definition: "robusto", example: "The findings are robust and consistent across different analyses.", frequency: "medium", wordType: "adjective" },
  { word: "valid", definition: "válido", example: "Ensure the validity of your research instruments.", frequency: "high", wordType: "adjective" },
  { word: "reliable", definition: "confiable", example: "Reliable measures produce consistent results.", frequency: "high", wordType: "adjective" },
  { word: "credible", definition: "creíble", example: "Use credible sources to support your arguments.", frequency: "medium", wordType: "adjective" },
  { word: "bias", definition: "sesgo", example: "Be aware of potential bias in data collection.", frequency: "medium", wordType: "noun" },
  { word: "objectivity", definition: "objetividad", example: "Strive for objectivity in your research.", frequency: "medium", wordType: "noun" },
  { word: "subjectivity", definition: "subjetividad", example: "Qualitative research often embraces a degree of subjectivity.", frequency: "medium", wordType: "noun" },
  { word: "ethics", definition: "ética", example: "Ethical considerations are paramount in human research.", frequency: "high", wordType: "noun" },
  { word: "integrity", definition: "integridad", example: "Academic integrity is crucial for scholarly work.", frequency: "medium", wordType: "noun" },
  { word: "accountability", definition: "responsabilidad", example: "Researchers have accountability for their findings.", frequency: "medium", wordType: "noun" },
  { word: "transparency", definition: "transparencia", example: "Transparency in research methods enhances credibility.", frequency: "medium", wordType: "noun" },
  { word: "replication", definition: "replicación", example: "Replication of studies is important for validating results.", frequency: "medium", wordType: "noun" },
  { word: "generalizability", definition: "generalizabilidad", example: "Consider the generalizability of your findings to other populations.", frequency: "medium", wordType: "noun" },
  { word: "transferability", definition: "transferibilidad", example: "In qualitative research, transferability is analogous to generalizability.", frequency: "low", wordType: "noun" },
  { word: "credibility", definition: "credibilidad", example: "The credibility of the source is important.", frequency: "medium", wordType: "noun" },
  { word: "dependability", definition: "fiabilidad", example: "Dependability in qualitative research refers to consistency.", frequency: "low", wordType: "noun" },
  { word: "confirmability", definition: "confirmabilidad", example: "Confirmability ensures that findings are based on the data, not researcher bias.", frequency: "low", wordType: "noun" },
  { word: "authenticity", definition: "autenticidad", example: "The authenticity of the document was questioned.", frequency: "medium", wordType: "noun" },
  { word: "reflexivity", definition: "reflexividad", example: "Researchers should practice reflexivity to acknowledge their own biases.", frequency: "low", wordType: "noun" },
  { word: "triangulation", definition: "triangulación", example: "Triangulation involves using multiple methods to confirm findings.", frequency: "low", wordType: "noun" },
  { word: "saturation", definition: "saturación", example: "Data saturation is reached when no new themes emerge.", frequency: "low", wordType: "noun" },
  { word: "emergent", definition: "emergente", example: "New themes were emergent from the data analysis.", frequency: "medium", wordType: "adjective" },
  { word: "iterative", definition: "iterativo", example: "The research process is often iterative, involving repeated cycles.", frequency: "medium", wordType: "adjective" },
  { word: "recursive", definition: "recursivo", example: "The recursive nature of the problem made it difficult to solve.", frequency: "low", wordType: "adjective" },
  { word: "discrepancy", definition: "discrepancia", example: "There was a discrepancy between the two sets of data.", frequency: "medium", wordType: "noun" },
  { word: "anomaly", definition: "anomalía", example: "Scientists investigated the anomaly in the experimental results.", frequency: "medium", wordType: "noun" },
  { word: "outlier", definition: "valor atípico", example: "The outlier significantly affected the average score.", frequency: "medium", wordType: "noun" },
  { word: "deviation", definition: "desviación", example: "Standard deviation measures the spread of data.", frequency: "medium", wordType: "noun" },
  { word: "variance", definition: "varianza", example: "Analyze the variance in the different groups.", frequency: "medium", wordType: "noun" },
  { word: "regression", definition: "regresión", example: "Regression analysis helps predict relationships between variables.", frequency: "medium", wordType: "noun" },
  { word: "correlation", definition: "correlación", example: "Correlation does not imply causation.", frequency: "high", wordType: "noun" },
  { word: "causation", definition: "causalidad", example: "Establishing causation requires careful experimental design.", frequency: "medium", wordType: "noun" },
  { word: "mediating", definition: "mediador", example: "A mediating variable explains the relationship between two other variables.", frequency: "low", wordType: "adjective" },
  { word: "moderating", definition: "moderador", example: "A moderating variable influences the strength of a relationship.", frequency: "low", wordType: "adjective" },
  { word: "confounding", definition: "confusor", example: "Confounding variables can distort research findings.", frequency: "medium", wordType: "adjective" },
  { word: "intervening", definition: "interviniente", example: "An intervening variable comes between the independent and dependent variables.", frequency: "low", wordType: "adjective" },
  { word: "construct", definition: "constructo", example: "Intelligence is a theoretical construct.", frequency: "medium", wordType: "noun" },
  { word: "operationalize", definition: "operacionalizar", example: "How will you operationalize the construct of happiness?", frequency: "medium", wordType: "verb" },
  { word: "conceptualize", definition: "conceptualizar", example: "It's important to clearly conceptualize your research problem.", frequency: "medium", wordType: "verb" },
  { word: "theorize", definition: "teorizar", example: "Scientists theorize about the origins of the universe.", frequency: "medium", wordType: "verb" },
  { word: "hypothesize", definition: "hipotetizar", example: "We hypothesize that there will be a significant difference.", frequency: "medium", wordType: "verb" },
  { word: "postulate", definition: "postular", example: "He postulated the existence of a new particle.", frequency: "medium", wordType: "verb" },
  { word: "presuppose", definition: "presuponer", example: "The argument presupposes a certain level of prior knowledge.", frequency: "medium", wordType: "verb" },
  { word: "imply", definition: "implicar", example: "The data implies a strong relationship.", frequency: "high", wordType: "verb" },
  { word: "infer", definition: "inferir", example: "What can you infer from these results?", frequency: "high", wordType: "verb" },
  { word: "deduce", definition: "deducir", example: "From the evidence, we can deduce his motive.", frequency: "medium", wordType: "verb" },
  { word: "induce", definition: "inducir", example: "The experiment was designed to induce a specific response.", frequency: "medium", wordType: "verb" },
  { word: "synthesize", definition: "sintetizar", example: "Synthesize the main arguments from various articles.", frequency: "high", wordType: "verb" },
  { word: "integrate", definition: "integrar", example: "Integrate the findings from different studies.", frequency: "high", wordType: "verb" },
  { word: "reconcile", definition: "reconciliar", example: "It's difficult to reconcile these conflicting theories.", frequency: "medium", wordType: "verb" },
  { word: "discrepancy", definition: "discrepancia", example: "There was a discrepancy between the two sets of data.", frequency: "medium", wordType: "noun" },
  { word: "anomaly", definition: "anomalía", example: "Scientists investigated the anomaly in the experimental results.", frequency: "medium", wordType: "noun" },
  { word: "outlier", definition: "valor atípico", example: "The outlier significantly affected the average score.", frequency: "medium", wordType: "noun" },
  { word: "deviation", definition: "desviación", example: "Standard deviation measures the spread of data.", frequency: "medium", wordType: "noun" },
  { word: "variance", definition: "varianza", example: "Analyze the variance in the different groups.", frequency: "medium", wordType: "noun" },
  { word: "regression", definition: "regresión", example: "Regression analysis helps predict relationships between variables.", frequency: "medium", wordType: "noun" },
  { word: "correlation", definition: "correlación", example: "Correlation does not imply causation.", frequency: "high", wordType: "noun" },
  { word: "causation", definition: "causalidad", example: "Establishing causation requires careful experimental design.", frequency: "medium", wordType: "noun" },
  { word: "mediating", definition: "mediador", example: "A mediating variable explains the relationship between two other variables.", frequency: "low", wordType: "adjective" },
  { word: "moderating", definition: "moderador", example: "A moderating variable influences the strength of a relationship.", frequency: "low", wordType: "adjective" },
  { word: "confounding", definition: "confusor", example: "Confounding variables can distort research findings.", frequency: "medium", wordType: "adjective" },
  { word: "intervening", definition: "interviniente", example: "An intervening variable comes between the independent and dependent variables.", frequency: "low", wordType: "adjective" },
  { word: "construct", definition: "constructo", example: "Intelligence is a theoretical construct.", frequency: "medium", wordType: "noun" },
  { word: "operationalize", definition: "operacionalizar", example: "How will you operationalize the construct of happiness?", frequency: "medium", wordType: "verb" },
  { word: "conceptualize", definition: "conceptualizar", example: "It's important to clearly conceptualize your research problem.", frequency: "medium", wordType: "verb" },
  { word: "theorize", definition: "teorizar", example: "Scientists theorize about the origins of the universe.", frequency: "medium", wordType: "verb" },
  { word: "hypothesize", definition: "hipotetizar", example: "We hypothesize that there will be a significant difference.", frequency: "medium", wordType: "verb" },
  { word: "postulate", definition: "postular", example: "He postulated the existence of a new particle.", frequency: "medium", wordType: "verb" },
  { word: "presuppose", definition: "presuponer", example: "The argument presupposes a certain level of prior knowledge.", frequency: "medium", wordType: "verb" },
  { word: "imply", definition: "implicar", example: "The data implies a strong relationship.", frequency: "high", wordType: "verb" },
  { word: "infer", definition: "inferir", example: "What can you infer from these results?", frequency: "high", wordType: "verb" },
  { word: "deduce", definition: "deducir", example: "From the evidence, we can deduce his motive.", frequency: "medium", wordType: "verb" },
  { word: "induce", definition: "inducir", example: "The experiment was designed to induce a specific response.", frequency: "medium", wordType: "verb" },
  { word: "synthesize", definition: "sintetizar", example: "Synthesize the main arguments from various articles.", frequency: "high", wordType: "verb" },
  { word: "integrate", definition: "integrar", example: "Integrate the findings from different studies.", frequency: "high", wordType: "verb" },
  { word: "reconcile", definition: "reconciliar", example: "It's difficult to reconcile these conflicting theories.", frequency: "medium", wordType: "verb" },
];

export default academicIntermediateWords;
