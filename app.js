import React, { useState } from 'react';
import { Play, Award, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

export default function BlockchainQuiz() {
  const [stage, setStage] = useState('welcome'); // welcome, video, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: "Qu'est-ce qu'une blockchain ?",
      options: [
        "Une base de données centralisée",
        "Un registre distribué et décentralisé",
        "Un type de cryptomonnaie",
        "Un logiciel antivirus"
      ],
      correct: 1
    },
    {
      q: "Quelle est la principale caractéristique d'une blockchain ?",
      options: [
        "Elle peut être modifiée facilement",
        "Elle est contrôlée par une seule entreprise",
        "Elle est immuable et transparente",
        "Elle nécessite un mot de passe"
      ],
      correct: 2
    },
    {
      q: "Qui a créé Bitcoin, la première blockchain ?",
      options: [
        "Elon Musk",
        "Satoshi Nakamoto",
        "Mark Zuckerberg",
        "Steve Jobs"
      ],
      correct: 1
    },
    {
      q: "À quoi sert un smart contract ?",
      options: [
        "À signer des documents papier",
        "À exécuter automatiquement des accords sans intermédiaire",
        "À protéger un ordinateur",
        "À créer des sites web"
      ],
      correct: 1
    },
    {
      q: "Dans quel domaine la blockchain peut-elle être utilisée ?",
      options: [
        "Uniquement la finance",
        "Uniquement les cryptomonnaies",
        "Finance, santé, supply chain, gouvernance et plus",
        "Uniquement les jeux vidéo"
      ],
      correct: 2
    }
  ];

  const handleAnswer = (selectedIndex) => {
    const newAnswers = [...answers, selectedIndex];
    setAnswers(newAnswers);
    
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStage('results');
    }
  };

  const restart = () => {
    setStage('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  };

  const getMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🎉 Parfait ! Tu es un expert blockchain !";
    if (percentage >= 80) return "🌟 Excellent ! Tu maîtrises bien le sujet !";
    if (percentage >= 60) return "👍 Bien joué ! Tu es sur la bonne voie !";
    if (percentage >= 40) return "💪 Pas mal ! Continue d'apprendre !";
    return "📚 Un bon début ! Rejoins-nous pour en savoir plus !";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Welcome Screen */}
        {stage === 'welcome' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-white/20 mt-8">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                🔗 Blockchain
              </h1>
              <p className="text-2xl text-purple-200 font-semibold">
                Découvre la Blockchain Autrement
              </p>
            </div>
            
            <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-lg text-white mb-4">
                Apprendre • Construire • Innover
              </p>
              <p className="text-purple-200">
                Regarde la vidéo, teste tes connaissances et gagne un sticker !
              </p>
            </div>

            <button
              onClick={() => setStage('video')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg"
            >
              <Play size={28} />
              Commencer l'aventure
            </button>
          </div>
        )}

        {/* Video Screen */}
        {stage === 'video' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mt-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              📺 Comprendre la Blockchain en 3 minutes
            </h2>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/lbNu4eHkPdY"
                title="Blockchain Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <p className="text-purple-200 text-center mb-6">
              Prends le temps de bien regarder la vidéo avant de passer au quiz ! 🎯
            </p>

            <button
              onClick={() => setStage('quiz')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg"
            >
              Passer au Quiz
              <Award size={24} />
            </button>
          </div>
        )}

        {/* Quiz Screen */}
        {stage === 'quiz' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mt-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-300 font-semibold">
                  Question {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-white font-bold">
                  Score: {score}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">
              {questions[currentQuestion].q}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-purple-400 text-white p-4 rounded-xl text-left transition-all transform hover:scale-102 font-semibold"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Screen */}
        {stage === 'results' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-white/20 mt-8">
            <div className="mb-8">
              <Award className="text-yellow-400 mx-auto mb-4" size={80} />
              <h2 className="text-4xl font-bold text-white mb-4">
                Quiz terminé !
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-6">
              <p className="text-6xl font-bold text-white mb-2">
                {score} / {questions.length}
              </p>
              <p className="text-2xl text-white font-semibold">
                {getMessage()}
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
              <p className="text-xl text-white font-bold mb-2">
                🎁 Viens récupérer ton sticker au stand !
              </p>
              <p className="text-purple-200">
                Rejoins notre association pour approfondir tes connaissances
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={restart}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg"
              >
                <RefreshCw size={24} />
                Recommencer
              </button>
            </div>

            <div className="mt-8 grid grid-cols-5 gap-3">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg flex items-center justify-center ${
                    answers[index] === questions[index].correct
                      ? 'bg-green-500/30 border-2 border-green-400'
                      : 'bg-red-500/30 border-2 border-red-400'
                  }`}
                >
                  {answers[index] === questions[index].correct ? (
                    <CheckCircle className="text-green-400" size={24} />
                  ) : (
                    <XCircle className="text-red-400" size={24} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
