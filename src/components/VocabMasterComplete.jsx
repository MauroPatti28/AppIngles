import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Brain, Target, Trophy, BarChart3, Clock, CheckCircle, XCircle, RotateCcw, Star, Zap, Globe, GraduationCap, Briefcase, FlaskConical, ListTodo, Repeat, Edit, Shuffle } from 'lucide-react';

const vocabDataModules = {
  basic: {
    beginner: () => import('../data/basic/beginner'),
    intermediate: () => import('../data/basic/intermediate'),
    advanced: () => import('../data/basic/advanced'),
  },
  academic: {
    beginner: () => import('../data/academic/beginner'),
    intermediate: () => import('../data/academic/intermediate'),
    advanced: () => import('../data/academic/advanced'),
  },
  technical: {
    beginner: () => import('../data/technical/beginner'),
    intermediate: () => import('../data/technical/intermediate'),
    advanced: () => import('../data/technical/advanced'),
  },
  business: {
    beginner: () => import('../data/business/beginner'),
    intermediate: () => import('../data/business/intermediate'),
    advanced: () => import('../data/business/advanced'),
  },
  scientific: {
    beginner: () => import('../data/scientific/beginner'),
    intermediate: () => import('../data/scientific/intermediate'),
    advanced: () => import('../data/scientific/advanced'),
  },
  common_verbs: {
    beginner: () => import('../data/common_verbs/beginner'),
    intermediate: () => import('../data/common_verbs/intermediate'),
    advanced: () => import('../data/common_verbs/advanced'),
  },
  phrasal_verbs: {
    beginner: () => import('../data/phrasal_verbs/beginner'),
    intermediate: () => import('../data/phrasal_verbs/intermediate'),
    advanced: () => import('../data/phrasal_verbs/advanced'),
  },
};

const VocabMasterComplete = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('basic');
  const [gameMode, setGameMode] = useState('learn');
  const [difficulty, setDifficulty] = useState('beginner');
  const [isLoadingWord, setIsLoadingWord] = useState(false);
  const [localWords, setLocalWords] = useState([]);
  
  // Estados para completar oraciones
  const [blankPosition, setBlankPosition] = useState(0);
  const [blankSentence, setBlankSentence] = useState('');
  const [fillBlankAnswer, setFillBlankAnswer] = useState('');
  const [fillBlankResult, setFillBlankResult] = useState(null);
  
  // Estados para emparejar
  const [matchingWords, setMatchingWords] = useState([]);
  const [matchingDefinitions, setMatchingDefinitions] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedDefinition, setSelectedDefinition] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [matchingComplete, setMatchingComplete] = useState(false);

  const categories = [
    { id: 'basic', name: 'Básico', icon: BookOpen },
    { id: 'academic', name: 'Académico', icon: GraduationCap },
    { id: 'technical', name: 'Técnico', icon: FlaskConical },
    { id: 'business', name: 'Negocios', icon: Briefcase },
    { id: 'scientific', name: 'Científico', icon: Brain },
    { id: 'common_verbs', name: 'Verbos Comunes', icon: ListTodo },
    { id: 'phrasal_verbs', name: 'Phrasal Verbs', icon: Repeat }
  ];

  const gameModes = [
    { id: 'learn', name: 'Aprender', icon: BookOpen },
    { id: 'test', name: 'Evaluar', icon: Target },
    { id: 'review', name: 'Repasar', icon: RotateCcw },
    { id: 'fill_blanks', name: 'Completar Oraciones', icon: Edit },
    { id: 'matching', name: 'Emparejar', icon: Shuffle }
  ];

  const difficulties = [
    { id: 'beginner', name: 'Principiante' },
    { id: 'intermediate', name: 'Intermedio' },
    { id: 'advanced', name: 'Avanzado' }
  ];

  // Cargar palabras locales dinámicamente
  useEffect(() => {
    const loadLocalVocab = async () => {
      setIsLoadingWord(true);
      try {
        const moduleLoader = vocabDataModules[selectedCategory]?.[difficulty];
        if (moduleLoader) {
          const module = await moduleLoader();
          setLocalWords(module.default || []);
        } else {
          setLocalWords([]);
        }
      } catch (error) {
        console.error('Error loading local vocabulary:', error);
        setLocalWords([]);
      } finally {
        setIsLoadingWord(false);
      }
    };

    loadLocalVocab();
  }, [selectedCategory, difficulty]);

  // Función para crear oración con espacio en blanco
  const createBlankSentence = useCallback((word) => {
    if (!word.example) {
      // Si no hay ejemplo, crear una oración genérica
      return `The word that means "${word.definition}" is ______.`;
    }
    
    const sentence = word.example;
    const wordToReplace = word.word;
    
    // Buscar la palabra en diferentes formas (original, lowercase, con mayúscula inicial)
    const variations = [
      wordToReplace,
      wordToReplace.toLowerCase(),
      wordToReplace.charAt(0).toUpperCase() + wordToReplace.slice(1).toLowerCase()
    ];
    
    let wordIndex = -1;
    let foundVariation = '';
    
    for (const variation of variations) {
      wordIndex = sentence.indexOf(variation);
      if (wordIndex !== -1) {
        foundVariation = variation;
        break;
      }
    }
    
    if (wordIndex !== -1) {
      const beforeWord = sentence.substring(0, wordIndex);
      const afterWord = sentence.substring(wordIndex + foundVariation.length);
      return `${beforeWord}______${afterWord}`;
    }
    
    // Si no se encuentra la palabra en el ejemplo, crear oración genérica
    return `Complete the sentence: The word that means "${word.definition}" is ______.`;
  }, []);

  // Función para barajar array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Preparar juego de emparejar
  const prepareMatchingGame = useCallback(() => {
    if (localWords.length < 4) return;
    
    // Seleccionar 4 palabras aleatorias de las palabras cargadas
    const shuffledWords = shuffleArray(localWords);
    const selectedWords = shuffledWords.slice(0, 4);
    const definitions = selectedWords.map(word => ({ 
      id: word.word, 
      text: word.definition 
    }));
    
    setMatchingWords(selectedWords);
    setMatchingDefinitions(shuffleArray(definitions));
    setMatchedPairs([]);
    setSelectedWord(null);
    setSelectedDefinition(null);
    setMatchingComplete(false);
  }, [localWords]);

  // Manejar selección en juego de emparejar
  const handleMatchingSelection = (type, item) => {
    if (type === 'word') {
      if (selectedWord?.word === item.word) {
        setSelectedWord(null);
        return;
      }
      setSelectedWord(item);
      
      if (selectedDefinition) {
        checkMatch(item, selectedDefinition);
      }
    } else if (type === 'definition') {
      if (selectedDefinition?.id === item.id) {
        setSelectedDefinition(null);
        return;
      }
      setSelectedDefinition(item);
      
      if (selectedWord) {
        checkMatch(selectedWord, item);
      }
    }
  };

  // Verificar emparejamiento
  const checkMatch = (word, definition) => {
    const isMatch = word.word === definition.id;
    
    if (isMatch) {
      const newPair = { word: word.word, definition: definition.text };
      const newMatchedPairs = [...matchedPairs, newPair];
      setMatchedPairs(newMatchedPairs);
      setSelectedWord(null);
      setSelectedDefinition(null);
      
      if (newMatchedPairs.length === matchingWords.length) {
        setMatchingComplete(true);
      }
    } else {
      // Resetear selecciones después de un breve momento
      setTimeout(() => {
        setSelectedWord(null);
        setSelectedDefinition(null);
      }, 1000);
    }
  };

  // Cargar palabra aleatoria
  const loadRandomWord = useCallback(() => {
    setIsLoadingWord(true);
    
    if (localWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * localWords.length);
      const word = localWords[randomIndex];
      setCurrentWord(word);
      
      // Preparar oración con espacio en blanco
      if (gameMode === 'fill_blanks') {
        setBlankSentence(createBlankSentence(word));
        setFillBlankAnswer('');
        setFillBlankResult(null);
      }
    } else {
      setCurrentWord(null);
    }

    setUserAnswer('');
    setShowAnswer(false);
    setIsLoadingWord(false);
  }, [localWords, gameMode]);

  // Manejar respuesta de completar oraciones
  const handleFillBlankAnswer = useCallback(() => {
    if (!currentWord || !fillBlankAnswer.trim()) return;
    
    const userAnswerTrimmed = fillBlankAnswer.toLowerCase().trim();
    const correctAnswer = currentWord.word.toLowerCase();
    
    // Verificar si la respuesta es correcta (comparación case-insensitive)
    const isCorrect = userAnswerTrimmed === correctAnswer;
    
    setFillBlankResult({
      isCorrect,
      correctAnswer: currentWord.word,
      userAnswer: fillBlankAnswer.trim()
    });
  }, [currentWord, fillBlankAnswer]);

  // Manejar respuesta
  const handleAnswer = useCallback((isCorrect) => {
    setTimeout(() => {
      if (gameMode === 'fill_blanks') {
        setFillBlankResult(null);
        setFillBlankAnswer('');
      }
      loadRandomWord();
    }, 1500);
  }, [loadRandomWord, gameMode]);

  // Efecto para cargar palabra inicial o preparar juego
  useEffect(() => {
    if (localWords.length === 0) return;
    
    if (gameMode === 'matching') {
      prepareMatchingGame();
    } else {
      loadRandomWord();
    }
  }, [localWords, gameMode, prepareMatchingGame, loadRandomWord]);

  // Efecto para preparar juego de emparejar cuando cambian las palabras
  useEffect(() => {
    if (gameMode === 'matching' && localWords.length >= 4) {
      prepareMatchingGame();
    }
  }, [gameMode, prepareMatchingGame]);

  const getFrequencyColor = (frequency) => {
    switch (frequency) {
      case 'very high': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Globe className="w-10 h-10" />
            VocabMaster Complete
          </h1>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Categorías de Vocabulario</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 border-white text-white'
                      : 'bg-white/10 border-gray-300 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-medium">{category.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Nivel de Dificultad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {difficulties.map(diff => (
              <button
                key={diff.id}
                onClick={() => setDifficulty(diff.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  difficulty === diff.id
                    ? 'bg-blue-500 border-white text-white'
                    : 'bg-white/10 border-gray-300 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="font-medium">{diff.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Game Mode Selection */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Modo de Estudio</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {gameModes.map(mode => {
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setGameMode(mode.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    gameMode === mode.id
                      ? 'bg-green-500 border-white text-white'
                      : 'bg-white/10 border-gray-300 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-medium text-center">{mode.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Matching Game */}
        {gameMode === 'matching' && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Emparejar Palabras con Definiciones
            </h2>
            
                {matchingWords.length === 0 && !isLoadingWord && (
                  <div className="text-center py-8">
                    <div className="text-yellow-400 text-2xl mb-4">⚠️</div>
                    <p className="text-white text-lg">
                      No hay suficientes palabras disponibles para el juego de emparejar.
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Se necesitan al menos 4 palabras. Intenta con otra categoría o nivel.
                    </p>
                  </div>
                )}

                {matchingWords.length > 0 && (
              <>
                <div className="mb-6">
                  <div className="text-center text-white mb-4">
                    Progreso: {matchedPairs.length}/{matchingWords.length}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(matchedPairs.length / matchingWords.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Palabras */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Palabras</h3>
                    <div className="space-y-3">
                      {matchingWords.map((word) => {
                        const isMatched = matchedPairs.some(pair => pair.word === word.word);
                        const isSelected = selectedWord?.word === word.word;
                        
                        return (
                          <button
                            key={word.word}
                            onClick={() => !isMatched && handleMatchingSelection('word', word)}
                            disabled={isMatched}
                            className={`w-full p-4 rounded-lg border-2 transition-all ${
                              isMatched
                                ? 'bg-green-500 border-green-400 text-white cursor-not-allowed'
                                : isSelected
                                ? 'bg-blue-500 border-blue-400 text-white'
                                : 'bg-white/10 border-gray-300 text-white hover:bg-white/20'
                            }`}
                          >
                            <div className="font-semibold">{word.word}</div>
                            <div className={`text-sm ${getFrequencyColor(word.frequency)}`}>
                              {word.frequency}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Definiciones */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Definiciones</h3>
                    <div className="space-y-3">
                      {matchingDefinitions.map((definition) => {
                        const isMatched = matchedPairs.some(pair => pair.definition === definition.text);
                        const isSelected = selectedDefinition?.id === definition.id;
                        
                        return (
                          <button
                            key={definition.id}
                            onClick={() => !isMatched && handleMatchingSelection('definition', definition)}
                            disabled={isMatched}
                            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                              isMatched
                                ? 'bg-green-500 border-green-400 text-white cursor-not-allowed'
                                : isSelected
                                ? 'bg-blue-500 border-blue-400 text-white'
                                : 'bg-white/10 border-gray-300 text-white hover:bg-white/20'
                            }`}
                          >
                            <div className="text-sm">{definition.text}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {matchingComplete && (
                  <div className="mt-8 text-center">
                    <div className="text-3xl text-yellow-400 mb-4">🎉 ¡Excelente trabajo! 🎉</div>
                    <div className="text-xl text-white mb-6">Has completado todos los emparejamientos</div>
                    
                    <div className="bg-white/10 rounded-lg p-6 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Resumen de palabras:</h4>
                      <div className="space-y-2">
                        {matchedPairs.map((pair, index) => (
                          <div key={index} className="text-left">
                            <span className="font-semibold text-blue-300">{pair.word}</span>
                            <span className="text-gray-300"> - {pair.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={prepareMatchingGame}
                      className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all"
                    >
                      Jugar de nuevo
                    </button>
                  </div>
                )}

                {isLoadingWord && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white">Cargando palabras...</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Fill in the Blanks Game */}
        {gameMode === 'fill_blanks' && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Completar Oraciones
            </h2>
            
            {isLoadingWord && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white">Cargando nueva palabra...</p>
              </div>
            )}

            {!isLoadingWord && !currentWord && (
              <div className="text-center py-8">
                <div className="text-yellow-400 text-2xl mb-4">⚠️</div>
                <p className="text-white text-lg">
                  No hay palabras disponibles para esta categoría y nivel.
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Intenta con otra categoría o nivel de dificultad.
                </p>
              </div>
            )}
            
            {!isLoadingWord && currentWord && !fillBlankResult && (
              <>
                <div className="text-center mb-6">
                  <div className="text-lg text-purple-200 mb-4">
                    Completa la oración con la palabra correcta:
                  </div>
                  <div className="text-2xl font-mono text-white bg-white/10 p-4 rounded-lg mb-6">
                    {blankSentence}
                  </div>
                  
                  <input
                    type="text"
                    value={fillBlankAnswer}
                    onChange={(e) => setFillBlankAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleFillBlankAnswer()}
                    className="w-full max-w-md p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:border-white/60 focus:outline-none text-center text-xl"
                    placeholder="Escribe la palabra aquí..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleFillBlankAnswer}
                    disabled={!fillBlankAnswer.trim()}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all"
                  >
                    Verificar respuesta
                  </button>
                </div>
              </>
            )}
            
            {!isLoadingWord && currentWord && fillBlankResult && (
              <div className="text-center">
                <div className={`text-3xl mb-4 ${fillBlankResult.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {fillBlankResult.isCorrect ? '✓ ¡Correcto!' : '✗ Incorrecto'}
                </div>
                
                <div className="text-xl font-mono text-white bg-white/10 p-4 rounded-lg mb-6">
                  {currentWord.example}
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <div className="text-lg text-purple-200 mb-2">Palabra:</div>
                  <div className="text-2xl font-bold text-white mb-4">{currentWord.word}</div>
                  <div className="text-lg text-purple-200 mb-2">Definición:</div>
                  <div className="text-white mb-4">{currentWord.definition}</div>
                  
                  {!fillBlankResult.isCorrect && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                      <div className="text-red-300 text-sm mb-1">Tu respuesta:</div>
                      <div className="text-white">{fillBlankResult.userAnswer}</div>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => handleAnswer(fillBlankResult.isCorrect)}
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all"
                >
                  Siguiente oración
                </button>
              </div>
            )}
          </div>
        )}

        {/* Word Learning Card - Modos originales */}
        {currentWord && ['learn', 'test', 'review'].includes(gameMode) && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
            {isLoadingWord && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white">Cargando nueva palabra...</p>
              </div>
            )}

            {!isLoadingWord && (
              <>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">{currentWord.word}</div>
                  <div className={`text-sm font-medium mb-2 ${getFrequencyColor(currentWord.frequency)}`}>
                    Frecuencia: {currentWord.frequency}
                  </div>
                  {currentWord.wordType && (
                    <div className="text-sm text-purple-300 mb-2">
                      Tipo: {currentWord.wordType}
                    </div>
                  )}

                  {gameMode === 'learn' && (
                    <div className="mb-6">
                      <div className="text-xl text-purple-200 mb-2">Definición:</div>
                      <div className="text-2xl font-semibold text-white mb-4">{currentWord.definition}</div>
                      <div className="text-lg text-gray-300 mb-4">
                        <span className="font-medium">Ejemplo:</span> "{currentWord.example}"
                      </div>

                      {currentWord.synonyms && currentWord.synonyms.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-white/10 rounded-lg p-4">
                            <h4 className="text-green-300 font-medium mb-2">Sinónimos:</h4>
                            <div className="flex flex-wrap gap-2">
                              {currentWord.synonyms.map((synonym, index) => (
                                <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
                                  {synonym}
                                </span>
                              ))}
                            </div>
                          </div>

                          {currentWord.antonyms && currentWord.antonyms.length > 0 && (
                            <div className="bg-white/10 rounded-lg p-4">
                              <h4 className="text-red-300 font-medium mb-2">Antónimos:</h4>
                              <div className="flex flex-wrap gap-2">
                                {currentWord.antonyms.map((antonym, index) => (
                                  <span key={index} className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-sm">
                                    {antonym}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {gameMode === 'test' && !showAnswer && (
                    <div className="mb-6">
                      <div className="text-xl text-purple-200 mb-4">¿Cuál es la definición de esta palabra?</div>
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:border-white/60 focus:outline-none"
                        placeholder="Escribe la definición..."
                      />
                    </div>
                  )}

                  {showAnswer && (
                    <div className="mb-6">
                      <div className="text-xl text-purple-200 mb-2">Respuesta correcta:</div>
                      <div className="text-2xl font-semibold text-white mb-4">{currentWord.definition}</div>
                      <div className="text-lg text-gray-300 mb-4">
                        <span className="font-medium">Ejemplo:</span> "{currentWord.example}"
                      </div>

                      {userAnswer && (
                        <div className="bg-white/10 rounded-lg p-4 mb-4">
                          <div className="text-sm text-purple-200 mb-1">Tu respuesta:</div>
                          <div className="text-white">{userAnswer}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 flex-wrap">
                  {gameMode === 'learn' && (
                    <>
                      <button
                        onClick={() => handleAnswer(true)}
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all"
                      >
                        ✓ La domino
                      </button>
                      <button
                        onClick={() => handleAnswer(false)}
                        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all"
                      >
                        ↻ Necesito repasarla
                      </button>
                      <button
                        onClick={() => loadRandomWord()}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all"
                      >
                        → Siguiente
                      </button>
                    </>
                  )}

                  {gameMode === 'test' && !showAnswer && (
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all"
                      disabled={!userAnswer.trim()}
                    >
                      Verificar respuesta
                    </button>
                  )}

                  {gameMode === 'test' && showAnswer && (
                    <>
                      <button
                        onClick={() => handleAnswer(true)}
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all"
                      >
                        ✓ Correcto
                      </button>
                      <button
                        onClick={() => handleAnswer(false)}
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all"
                      >
                        ✗ Incorrecto
                      </button>
                    </>
                  )}

                  {gameMode === 'review' && (
                    <button
                      onClick={() => loadRandomWord()}
                      className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all"
                    >
                      Siguiente palabra
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabMasterComplete;