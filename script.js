// Toutes les questions disponibles
const allQuestions = [
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
    },
    {
        q: "Que signifie 'décentralisé' dans le contexte de la blockchain ?",
        options: [
            "Géré par un gouvernement central",
            "Réparti entre tous les utilisateurs sans serveur central",
            "Stocké sur un seul ordinateur",
            "Accessible uniquement aux banques"
        ],
        correct: 1
    },
    {
        q: "Qu'est-ce qu'un 'mineur' dans une blockchain ?",
        options: [
            "Une personne qui cherche de l'or",
            "Un utilisateur qui valide les transactions",
            "Un hacker informatique",
            "Un vendeur de cryptomonnaies"
        ],
        correct: 1
    },
    {
        q: "Que contient un 'bloc' dans une blockchain ?",
        options: [
            "Uniquement des virus informatiques",
            "Des transactions et un lien cryptographique vers le bloc précédent",
            "Des photos et vidéos",
            "Des mots de passe"
        ],
        correct: 1
    },
    {
        q: "Quelle est l'utilité principale de la cryptographie dans la blockchain ?",
        options: [
            "Rendre les données jolies",
            "Garantir la sécurité et l'intégrité des données",
            "Accélérer internet",
            "Créer des jeux vidéo"
        ],
        correct: 1
    },
    {
        q: "Qu'est-ce que le 'consensus' dans une blockchain ?",
        options: [
            "Un vote politique",
            "Un mécanisme pour valider collectivement les transactions",
            "Un bug informatique",
            "Un type de monnaie"
        ],
        correct: 1
    },
    {
        q: "Pourquoi dit-on qu'une blockchain est 'transparente' ?",
        options: [
            "Elle est invisible",
            "Toutes les transactions sont visibles par tous les participants",
            "Elle est en verre",
            "Elle n'existe pas vraiment"
        ],
        correct: 1
    },
    {
        q: "Qu'est-ce qu'un token (jeton) sur une blockchain ?",
        options: [
            "Une pièce de monnaie physique",
            "Un actif numérique représentant de la valeur ou un droit",
            "Un jeton de casino",
            "Un ticket de métro"
        ],
        correct: 1
    },
    {
        q: "Quelle est la différence entre blockchain publique et privée ?",
        options: [
            "Il n'y a aucune différence",
            "La publique est ouverte à tous, la privée est réservée à certains utilisateurs",
            "La publique est gratuite, la privée est payante",
            "La publique est illégale"
        ],
        correct: 1
    },
    {
        q: "Que signifie 'Proof of Work' (preuve de travail) ?",
        options: [
            "Un certificat de travail",
            "Un mécanisme de validation basé sur la résolution de calculs complexes",
            "Une preuve d'emploi",
            "Un contrat de travail"
        ],
        correct: 1
    },
    {
        q: "Dans quoi la blockchain peut-elle révolutionner la santé ?",
        options: [
            "Remplacer les médecins",
            "Sécuriser et partager les dossiers médicaux",
            "Créer des médicaments",
            "Soigner les maladies"
        ],
        correct: 1
    }
];

// Variables globales
let currentQuestions = [];
let currentQuestion = 0;
let answers = [];
let score = 0;

// Éléments DOM
const welcomeScreen = document.getElementById('welcome-screen');
const videoScreen = document.getElementById('video-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const quizBtn = document.getElementById('quiz-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const answersGrid = document.getElementById('answers-grid');

// Fonction pour sélectionner 5 questions aléatoires
function selectRandomQuestions() {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
}

// Navigation entre écrans
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Démarrer l'application
startBtn.addEventListener('click', () => {
    showScreen(videoScreen);
});

// Passer au quiz
quizBtn.addEventListener('click', () => {
    currentQuestions = selectRandomQuestions();
    currentQuestion = 0;
    answers = [];
    score = 0;
    showScreen(quizScreen);
    loadQuestion();
});

// Charger une question
function loadQuestion() {
    const question = currentQuestions[currentQuestion];
    
    questionCounter.textContent = `Question ${currentQuestion + 1} / ${currentQuestions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    
    const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    questionText.textContent = question.q;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => handleAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

// Gérer une réponse
function handleAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestion];
    answers.push(selectedIndex);
    
    if (selectedIndex === question.correct) {
        score++;
    }
    
    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        setTimeout(loadQuestion, 300);
    } else {
        setTimeout(showResults, 300);
    }
}

// Afficher les résultats
function showResults() {
    finalScore.textContent = `${score} / ${currentQuestions.length}`;
    
    const percentage = (score / currentQuestions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = "🎉 Parfait ! Tu es un expert blockchain !";
    } else if (percentage >= 80) {
        message = "🌟 Excellent ! Tu maîtrises bien le sujet !";
    } else if (percentage >= 60) {
        message = "👍 Bien joué ! Tu es sur la bonne voie !";
    } else if (percentage >= 40) {
        message = "💪 Pas mal ! Continue d'apprendre !";
    } else {
        message = "📚 Un bon début ! Rejoins-nous pour en savoir plus !";
    }
    
    resultMessage.textContent = message;
    
    // Afficher les réponses correctes/incorrectes
    answersGrid.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const indicator = document.createElement('div');
        indicator.className = `answer-indicator ${
            answers[index] === question.correct ? 'answer-correct' : 'answer-wrong'
        }`;
        indicator.textContent = answers[index] === question.correct ? '✓' : '✗';
        answersGrid.appendChild(indicator);
    });
    
    showScreen(resultsScreen);
}

// Recommencer
restartBtn.addEventListener('click', () => {
    showScreen(welcomeScreen);
});