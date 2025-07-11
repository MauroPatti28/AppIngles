﻿const technicalAdvancedWords = [
  { word: "virtualization", definition: "virtualización", example: "Virtualization allows multiple OS to run on a single machine.", frequency: "medium", wordType: "noun" },
  { word: "encryption", definition: "encriptación", example: "Encryption is essential for data security.", frequency: "medium", wordType: "noun" },
  { word: "cloud computing", definition: "computación en la nube", example: "Cloud computing offers flexibility.", frequency: "medium", wordType: "noun" },
  { word: "machine learning", definition: "aprendizaje automático", example: "Machine learning is a subset of AI.", frequency: "medium", wordType: "noun" },
  { word: "cybersecurity", definition: "ciberseguridad", example: "Cybersecurity is crucial for protecting data.", frequency: "medium", wordType: "noun" },
  { word: "artificial intelligence", definition: "inteligencia artificial", example: "Artificial intelligence is transforming industries.", frequency: "medium", wordType: "noun" },
  { word: "blockchain", definition: "blockchain", example: "Blockchain technology ensures transaction transparency.", frequency: "medium", wordType: "noun" },
  { word: "quantum computing", definition: "computación cuántica", example: "Quantum computing could revolutionize cryptography.", frequency: "medium", wordType: "noun" },
  { word: "neural network", definition: "red neuronal", example: "Neural networks mimic brain functionality.", frequency: "medium", wordType: "noun" },
  { word: "deep learning", definition: "aprendizaje profundo", example: "Deep learning enables complex pattern recognition.", frequency: "medium", wordType: "noun" },
  { word: "containerization", definition: "contenedorización", example: "Containerization simplifies application deployment.", frequency: "medium", wordType: "noun" },
  { word: "orchestration", definition: "orquestación", example: "Kubernetes provides container orchestration.", frequency: "medium", wordType: "noun" },
  { word: "microservices", definition: "microservicios", example: "Microservices architecture improves scalability.", frequency: "medium", wordType: "noun" },
  { word: "serverless", definition: "sin servidor", example: "Serverless computing reduces infrastructure management.", frequency: "medium", wordType: "adjective" },
  { word: "edge computing", definition: "computación en el borde", example: "Edge computing reduces latency for IoT devices.", frequency: "medium", wordType: "noun" },
  { word: "distributed systems", definition: "sistemas distribuidos", example: "Distributed systems handle large-scale applications.", frequency: "medium", wordType: "noun" },
  { word: "load balancing", definition: "balanceo de carga", example: "Load balancing distributes traffic across servers.", frequency: "medium", wordType: "noun" },
  { word: "fault tolerance", definition: "tolerancia a fallos", example: "Fault tolerance ensures system reliability.", frequency: "medium", wordType: "noun" },
  { word: "high availability", definition: "alta disponibilidad", example: "High availability systems minimize downtime.", frequency: "medium", wordType: "noun" },
  { word: "disaster recovery", definition: "recuperación de desastres", example: "Disaster recovery plans protect against data loss.", frequency: "medium", wordType: "noun" },
  { word: "scalability", definition: "escalabilidad", example: "Horizontal scalability adds more servers.", frequency: "medium", wordType: "noun" },
  { word: "elasticity", definition: "elasticidad", example: "Cloud elasticity adjusts resources automatically.", frequency: "medium", wordType: "noun" },
  { word: "redundancy", definition: "redundancia", example: "Redundancy prevents single points of failure.", frequency: "medium", wordType: "noun" },
  { word: "replication", definition: "replicación", example: "Database replication ensures data consistency.", frequency: "medium", wordType: "noun" },
  { word: "sharding", definition: "fragmentación", example: "Sharding distributes data across multiple databases.", frequency: "medium", wordType: "noun" },
  { word: "partitioning", definition: "particionamiento", example: "Table partitioning improves query performance.", frequency: "medium", wordType: "noun" },
  { word: "indexing", definition: "indexación", example: "Proper indexing accelerates database queries.", frequency: "medium", wordType: "noun" },
  { word: "caching", definition: "almacenamiento en caché", example: "Redis provides distributed caching solutions.", frequency: "medium", wordType: "noun" },
  { word: "memoization", definition: "memoización", example: "Memoization optimizes recursive algorithms.", frequency: "medium", wordType: "noun" },
  { word: "polymorphism", definition: "polimorfismo", example: "Polymorphism enables flexible object-oriented design.", frequency: "medium", wordType: "noun" },
  { word: "encapsulation", definition: "encapsulación", example: "Encapsulation hides implementation details.", frequency: "medium", wordType: "noun" },
  { word: "inheritance", definition: "herencia", example: "Inheritance promotes code reusability.", frequency: "medium", wordType: "noun" },
  { word: "abstraction", definition: "abstracción", example: "Abstraction simplifies complex systems.", frequency: "medium", wordType: "noun" },
  { word: "dependency injection", definition: "inyección de dependencias", example: "Dependency injection improves code testability.", frequency: "medium", wordType: "noun" },
  { word: "inversion of control", definition: "inversión de control", example: "IoC frameworks manage object dependencies.", frequency: "medium", wordType: "noun" },
  { word: "aspect-oriented programming", definition: "programación orientada a aspectos", example: "AOP separates cross-cutting concerns.", frequency: "medium", wordType: "noun" },
  { word: "functional programming", definition: "programación funcional", example: "Functional programming emphasizes immutability.", frequency: "medium", wordType: "noun" },
  { word: "reactive programming", definition: "programación reactiva", example: "Reactive programming handles asynchronous data streams.", frequency: "medium", wordType: "noun" },
  { word: "metaprogramming", definition: "metaprogramación", example: "Metaprogramming allows code to modify itself.", frequency: "medium", wordType: "noun" },
  { word: "concurrency", definition: "concurrencia", example: "Concurrency enables parallel task execution.", frequency: "medium", wordType: "noun" },
  { word: "parallelism", definition: "paralelismo", example: "Parallelism utilizes multiple processors simultaneously.", frequency: "medium", wordType: "noun" },
  { word: "synchronization", definition: "sincronización", example: "Thread synchronization prevents race conditions.", frequency: "medium", wordType: "noun" },
  { word: "mutex", definition: "mutex", example: "Mutex ensures exclusive access to shared resources.", frequency: "medium", wordType: "noun" },
  { word: "semaphore", definition: "semáforo", example: "Semaphores control access to limited resources.", frequency: "medium", wordType: "noun" },
  { word: "deadlock", definition: "bloqueo mutuo", example: "Deadlock occurs when processes wait indefinitely.", frequency: "medium", wordType: "noun" },
  { word: "race condition", definition: "condición de carrera", example: "Race conditions cause unpredictable behavior.", frequency: "medium", wordType: "noun" },
  { word: "thread pool", definition: "pool de hilos", example: "Thread pools manage worker thread lifecycle.", frequency: "medium", wordType: "noun" },
  { word: "event loop", definition: "bucle de eventos", example: "The event loop handles asynchronous operations.", frequency: "medium", wordType: "noun" },
  { word: "callback hell", definition: "infierno de callbacks", example: "Promises help avoid callback hell.", frequency: "medium", wordType: "noun" },
  { word: "promise chaining", definition: "encadenamiento de promesas", example: "Promise chaining improves asynchronous code readability.", frequency: "medium", wordType: "noun" },
  { word: "async/await", definition: "async/await", example: "Async/await simplifies asynchronous programming.", frequency: "medium", wordType: "noun" },
  { word: "garbage collection", definition: "recolección de basura", example: "Garbage collection automatically frees memory.", frequency: "medium", wordType: "noun" },
  { word: "memory leak", definition: "fuga de memoria", example: "Memory leaks can cause application crashes.", frequency: "medium", wordType: "noun" },
  { word: "stack overflow", definition: "desbordamiento de pila", example: "Deep recursion can cause stack overflow.", frequency: "medium", wordType: "noun" },
  { word: "heap allocation", definition: "asignación de heap", example: "Dynamic objects use heap allocation.", frequency: "medium", wordType: "noun" },
  { word: "reference counting", definition: "conteo de referencias", example: "Reference counting tracks object usage.", frequency: "medium", wordType: "noun" },
  { word: "weak reference", definition: "referencia débil", example: "Weak references prevent circular dependencies.", frequency: "medium", wordType: "noun" },
  { word: "immutability", definition: "inmutabilidad", example: "Immutability prevents accidental data modification.", frequency: "medium", wordType: "noun" },
  { word: "persistence", definition: "persistencia", example: "Data persistence ensures information survival.", frequency: "medium", wordType: "noun" },
  { word: "serialization", definition: "serialización", example: "JSON serialization converts objects to strings.", frequency: "medium", wordType: "noun" },
  { word: "deserialization", definition: "deserialización", example: "Deserialization reconstructs objects from data.", frequency: "medium", wordType: "noun" },
  { word: "marshaling", definition: "marshaling", example: "Marshaling prepares data for transmission.", frequency: "medium", wordType: "noun" },
  { word: "unmarshaling", definition: "unmarshaling", example: "Unmarshaling extracts data from messages.", frequency: "medium", wordType: "noun" },
  { word: "object-relational mapping", definition: "mapeo objeto-relacional", example: "ORM simplifies database interactions.", frequency: "medium", wordType: "noun" },
  { word: "denormalization", definition: "desnormalización", example: "Denormalization optimizes query performance.", frequency: "medium", wordType: "noun" },
  { word: "normalization", definition: "normalización", example: "Database normalization reduces redundancy.", frequency: "medium", wordType: "noun" },
  { word: "ACID properties", definition: "propiedades ACID", example: "ACID properties ensure database reliability.", frequency: "medium", wordType: "noun" },
  { word: "eventual consistency", definition: "consistencia eventual", example: "NoSQL databases often use eventual consistency.", frequency: "medium", wordType: "noun" },
  { word: "CAP theorem", definition: "teorema CAP", example: "CAP theorem describes distributed system tradeoffs.", frequency: "medium", wordType: "noun" },
  { word: "consensus algorithm", definition: "algoritmo de consenso", example: "Consensus algorithms ensure distributed agreement.", frequency: "medium", wordType: "noun" },
  { word: "Byzantine fault tolerance", definition: "tolerancia a fallos bizantinos", example: "BFT handles malicious node behavior.", frequency: "medium", wordType: "noun" },
  { word: "hash function", definition: "función hash", example: "Cryptographic hash functions ensure data integrity.", frequency: "medium", wordType: "noun" },
  { word: "digital signature", definition: "firma digital", example: "Digital signatures verify message authenticity.", frequency: "medium", wordType: "noun" },
  { word: "public key infrastructure", definition: "infraestructura de clave pública", example: "PKI manages digital certificates.", frequency: "medium", wordType: "noun" },
  { word: "certificate authority", definition: "autoridad certificadora", example: "Certificate authorities issue SSL certificates.", frequency: "medium", wordType: "noun" },
  { word: "zero-knowledge proof", definition: "prueba de conocimiento cero", example: "Zero-knowledge proofs verify without revealing secrets.", frequency: "medium", wordType: "noun" },
  { word: "homomorphic encryption", definition: "encriptación homomórfica", example: "Homomorphic encryption enables computation on encrypted data.", frequency: "medium", wordType: "noun" },
  { word: "differential privacy", definition: "privacidad diferencial", example: "Differential privacy protects individual data points.", frequency: "medium", wordType: "noun" },
  { word: "federated learning", definition: "aprendizaje federado", example: "Federated learning trains models without centralizing data.", frequency: "medium", wordType: "noun" },
  { word: "transfer learning", definition: "aprendizaje por transferencia", example: "Transfer learning adapts pre-trained models.", frequency: "medium", wordType: "noun" },
  { word: "reinforcement learning", definition: "aprendizaje por refuerzo", example: "Reinforcement learning learns through trial and error.", frequency: "medium", wordType: "noun" },
  { word: "supervised learning", definition: "aprendizaje supervisado", example: "Supervised learning uses labeled training data.", frequency: "medium", wordType: "noun" },
  { word: "unsupervised learning", definition: "aprendizaje no supervisado", example: "Unsupervised learning finds patterns in unlabeled data.", frequency: "medium", wordType: "noun" },
  { word: "feature engineering", definition: "ingeniería de características", example: "Feature engineering improves model performance.", frequency: "medium", wordType: "noun" },
  { word: "dimensionality reduction", definition: "reducción de dimensionalidad", example: "PCA is a dimensionality reduction technique.", frequency: "medium", wordType: "noun" },
  { word: "overfitting", definition: "sobreajuste", example: "Overfitting occurs when models memorize training data.", frequency: "medium", wordType: "noun" },
  { word: "underfitting", definition: "subajuste", example: "Underfitting happens when models are too simple.", frequency: "medium", wordType: "noun" },
  { word: "cross-validation", definition: "validación cruzada", example: "Cross-validation assesses model generalization.", frequency: "medium", wordType: "noun" },
  { word: "hyperparameter tuning", definition: "ajuste de hiperparámetros", example: "Grid search enables hyperparameter tuning.", frequency: "medium", wordType: "noun" },
  { word: "ensemble method", definition: "método de ensamble", example: "Random forests use ensemble methods.", frequency: "medium", wordType: "noun" },
  { word: "gradient descent", definition: "descenso de gradiente", example: "Gradient descent optimizes neural network weights.", frequency: "medium", wordType: "noun" },
  { word: "backpropagation", definition: "retropropagación", example: "Backpropagation trains neural networks efficiently.", frequency: "medium", wordType: "noun" },
  { word: "activation function", definition: "función de activación", example: "ReLU is a popular activation function.", frequency: "medium", wordType: "noun" },
  { word: "convolutional layer", definition: "capa convolucional", example: "Convolutional layers extract image features.", frequency: "medium", wordType: "noun" },
  { word: "recurrent neural network", definition: "red neuronal recurrente", example: "RNNs process sequential data effectively.", frequency: "medium", wordType: "noun" },
  { word: "long short-term memory", definition: "memoria a corto y largo plazo", example: "LSTM networks handle long sequences.", frequency: "medium", wordType: "noun" },
  { word: "transformer architecture", definition: "arquitectura transformer", example: "Transformers revolutionized natural language processing.", frequency: "medium", wordType: "noun" },
  { word: "attention mechanism", definition: "mecanismo de atención", example: "Attention mechanisms focus on relevant information.", frequency: "medium", wordType: "noun" },
  { word: "generative adversarial network", definition: "red generativa adversaria", example: "GANs generate realistic synthetic data.", frequency: "medium", wordType: "noun" },
  { word: "autoencoder", definition: "autocodificador", example: "Autoencoders learn efficient data representations.", frequency: "medium", wordType: "noun" },
  { word: "variational autoencoder", definition: "autocodificador variacional", example: "VAEs generate new data samples.", frequency: "medium", wordType: "noun" },
  { word: "natural language processing", definition: "procesamiento de lenguaje natural", example: "NLP enables computers to understand human language.", frequency: "medium", wordType: "noun" },
  { word: "computer vision", definition: "visión por computadora", example: "Computer vision analyzes visual information.", frequency: "medium", wordType: "noun" },
  { word: "optical character recognition", definition: "reconocimiento óptico de caracteres", example: "OCR extracts text from images.", frequency: "medium", wordType: "noun" },
  { word: "image classification", definition: "clasificación de imágenes", example: "Deep learning excels at image classification.", frequency: "medium", wordType: "noun" },
  { word: "object detection", definition: "detección de objetos", example: "YOLO performs real-time object detection.", frequency: "medium", wordType: "noun" },
  { word: "semantic segmentation", definition: "segmentación semántica", example: "Semantic segmentation labels each pixel.", frequency: "medium", wordType: "noun" },
  { word: "instance segmentation", definition: "segmentación de instancias", example: "Instance segmentation identifies individual objects.", frequency: "medium", wordType: "noun" },
  { word: "data augmentation", definition: "aumento de datos", example: "Data augmentation increases training dataset size.", frequency: "medium", wordType: "noun" },
  { word: "batch normalization", definition: "normalización por lotes", example: "Batch normalization stabilizes training.", frequency: "medium", wordType: "noun" },
  { word: "dropout regularization", definition: "regularización dropout", example: "Dropout prevents neural network overfitting.", frequency: "medium", wordType: "noun" }
];

export default technicalAdvancedWords;