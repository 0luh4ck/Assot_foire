// Toutes les questions disponibles
const allQuestions = [
    {
        q: "Que promettait Internet à ses débuts ?",
        options: [
            "De remplacer les gouvernements",
            "De créer une monnaie virtuelle",
            "De supprimer la distance entre les individus",
            "D’éliminer les intermédiaires"
        ],
        correct: 2
    },
    {
        q: "Quelle est la promesse principale de la blockchain ?",
        options: [
            "Se passer d’intermédiaires dans les échanges",
            "Supprimer les ordinateurs",
            "Accélérer les connexions Internet"
        ],
        correct: 0
    },
    {
        q: "Comment la vidéo décrit-elle la blockchain ?",
        options: [
            "Comme une application mobile",
            "Comme un simple disque dur",
            "Comme un gigantesque registre de comptes",
            "Comme un moteur de recherche"
        ],
        correct: 2
    },
    {
        q: "Que représente chaque « page » du registre dans la blockchain ?",
        options: [
            "Une clé privée",
            "Un bloc",
            "Une transaction",
            "Un contrat"
        ],
        correct: 1
    },
    {
        q: "Qui valide les transactions sur la blockchain ?",
        options: [
            "Les mineurs",
            "Les gouvernements",
            "Les banques",
            "Les utilisateurs lambda"
        ],
        correct: 0
    },
    {
        q: "Que se passe-t-il une fois qu’un bloc est complété ?",
        options: [
            "Il devient infalsifiable et immuable",
            "Il peut être modifié à tout moment",
            "Il est supprimé du réseau"
        ],
        correct: 0
    },
    {
        q: "Pour qu’un bloc soit modifié, il faut :",
        options: [
            "Une autorisation du créateur du bloc",
            "Un consensus entre les mineurs",
            "Une décision d’un administrateur",
            "L’accord d’une banque centrale"
        ],
        correct: 1
    },
    {
        q: "Quelle qualité essentielle garantit la blockchain ?",
        options: [
            "Le stockage illimité",
            "La sécurité et la transparence des données",
            "Le secret absolu",
            "La rapidité d’exécution"
        ],
        correct: 1
    },
    {
        q: "À quoi la vidéo compare-t-elle la blockchain pour un artiste ?",
        options: [
            "À une galerie d’art virtuelle",
            "À un moyen de dater et sécuriser ses créations",
            "À un outil de marketing",
            "À une plateforme de streaming"
        ],
        correct: 1
    },
    {
        q: "Que se passe-t-il lorsqu’un artiste inscrit son œuvre dans la blockchain ?",
        options: [
            "Elle disparaît du réseau",
            "Elle est datée, sécurisée et liée à son identité virtuelle",
            "Elle perd ses droits d’auteur",
            "Elle devient modifiable par tous"
        ],
        correct: 1
    },
    {
        q: "Quel outil permet de générer automatiquement des revenus pour un artiste ?",
        options: [
            "Un cloud privé",
            "Un serveur sécurisé",
            "Un smart contract",
            "Un NFT"
        ],
        correct: 2
    },
    {
        q: "Que signifie « smart contract » ?",
        options: [
            "Contrat signé par une personne intelligente",
            "Formulaire numérique",
            "Contrat automatisé exécuté sans intermédiaire",
            "Application de messagerie sécurisée"
        ],
        correct: 2
    },
    {
        q: "Dans quel pays la blockchain aide-t-elle à créer un cadastre fiable ?",
        options: [
            "Ghana",
            "Kenya",
            "Afrique du Sud",
            "Nigeria"
        ],
        correct: 0
    },
    {
        q: "Quel est le problème rencontré par de nombreux propriétaires au Ghana ?",
        options: [
            "Absence de titre légal de propriété",
            "Mauvaise qualité du sol",
            "Trop de taxes foncières",
            "Manque d’électricité"
        ],
        correct: 0
    },
    {
        q: "Pourquoi l’absence de titre est-elle un frein au développement ?",
        options: [
            "Car les biens perdent de la valeur",
            "Car les banques refusent de les acheter",
            "Car les habitants n’ont pas Internet",
            "Car les biens ne peuvent pas servir de garantie pour un prêt"
        ],
        correct: 3
    },
    {
        q: "Quelle solution propose la blockchain pour un cadastre fiable ?",
        options: [
            "Construire un centre de données",
            "Utiliser la reconnaissance faciale",
            "Inscrire des coordonnées GPS sur le réseau",
            "Créer une base privée"
        ],
        correct: 2
    },
    {
        q: "Quel est l’avantage d’un cadastre basé sur la blockchain ?",
        options: [
            "Il dépend du gouvernement",
            "Il est infalsifiable et accessible à tous",
            "Il nécessite des mises à jour manuelles",
            "Il est réservé aux notaires"
        ],
        correct: 1
    },
    {
        q: "Dans quel domaine la vidéo évoque-t-elle un usage pour l’assurance ?",
        options: [
            "Accident à l’étranger",
            "Éducation",
            "Agriculture",
            "Industrie"
        ],
        correct: 0
    },
    {
        q: "Que permettrait la blockchain en cas d’accident à l’étranger ?",
        options: [
            "De géolocaliser les proches",
            "D’accéder rapidement aux informations du patient",
            "De bloquer les paiements médicaux",
            "De contacter un avocat"
        ],
        correct: 1
    },
    {
        q: "Grâce à la blockchain, les informations de santé peuvent :",
        options: [
            "Être supprimées automatiquement",
            "Être modifiées par n’importe qui",
            "Être stockées de manière sécurisée et consultables facilement",
            "Être envoyées aux compagnies d’assurance"
        ],
        correct: 2
    },
    {
        q: "À long terme, que pourrait contenir la blockchain ?",
        options: [
            "Le dossier médical complet d’un patient",
            "Une copie des passeports",
            "Un historique de navigation",
            "Un moteur de recherche de docteurs"
        ],
        correct: 0
    },
    {
        q: "Quel bénéfice immédiat la blockchain offre-t-elle ?",
        options: [
            "La réduction de la paperasse et la priorité au patient",
            "La suppression des hôpitaux",
            "L’interdiction des assurances privées",
            "L’automatisation du paiement"
        ],
        correct: 0
    },
    {
        q: "Que souligne la vidéo à propos des possibilités de la blockchain ?",
        options: [
            "Elles sont réservées aux experts",
            "Elles sont infinies",
            "Elles sont limitées",
            "Elles sont en déclin"
        ],
        correct: 1
    },
    {
        q: "Que faut-il pour profiter pleinement de la blockchain ?",
        options: [
            "Être mineur",
            "Se préparer à cette révolution",
            "Être programmeur",
            "Investir dans le Bitcoin"
        ],
        correct: 1
    },
    {
        q: "Que signifie littéralement le mot « blockchain » ?",
        options: [
            "Registre ouvert",
            "Réseau central",
            "Chaîne de blocs",
            "Code crypté"
        ],
        correct: 2
    },
    {
        q: "Quelle est la nature du réseau blockchain ?",
        options: [
            "Hiérarchisé",
            "Propriétaire",
            "Décentralisé et distribué",
            "Centralisé"
        ],
        correct: 2
    },
    {
        q: "Quel est l’un des grands avantages d’un réseau public blockchain ?",
        options: [
            "Il appartient à une entreprise privée",
            "Personne ne peut modifier les données sans consensus",
            "Les gouvernements le contrôlent",
            "Il s’arrête la nuit"
        ],
        correct: 1
    },
    {
        q: "Pourquoi la blockchain est-elle considérée comme révolutionnaire ?",
        options: [
            "Parce qu’elle rend Internet plus rapide",
            "Parce qu’elle remplace la confiance humaine par un protocole vérifiable",
            "Parce qu’elle supprime les réseaux sociaux",
            "Parce qu’elle est à la mode"
        ],
        correct: 1
    },
    {
        q: "Quel rôle jouent les mineurs dans l’écosystème ?",
        options: [
            "Ils valident les transactions et sécurisent le réseau",
            "Ils contrôlent les utilisateurs",
            "Ils fixent le prix des cryptomonnaies",
            "Ils stockent les données"
        ],
        correct: 0
    },
    {
        q: "Quelle conclusion principale tire la vidéo ?",
        options: [
            "La blockchain doit être interdite",
            "La blockchain appartient à l’État",
            "La blockchain pourrait être la prochaine grande révolution",
            "La blockchain est une mode passagère"
        ],
        correct: 2
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
    return shuffled.slice(0, 7);
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

    // Afficher la box sticker seulement si score > 50%

    const stickerBox = document.getElementById('sticker-box');
    if (percentage > 50) {
        stickerBox.style.display = 'block';
    } else {
        stickerBox.style.display = 'none';
    }
    
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
