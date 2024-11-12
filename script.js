const cards = [
    { id: 1, img: 'sonic.png' },
    { id: 2, img: 'tails.png' },
    { id: 3, img: 'knuckles.png' },
    { id: 4, img: 'amy.png' },
    { id: 5, img: 'eggman.png' },
    { id: 6, img: 'shadow.png' },
    { id: 7, img: 'yellow-sonic.png' },
    { id: 8, img: 'zaz.png' },
];
let gameCards = [...cards, ...cards];  // Duplicando as cartas para formar os pares
let flippedCards = [];
let matchedCards = [];

// Embaralha as cartas
function shuffleCards() {
    gameCards.sort(() => Math.random() - 0.5);
}

// Cria o tabuleiro
function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';  // Limpa o tabuleiro antes de recriar
    gameCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'flipped'); // Adiciona a classe 'flipped' para exibir inicialmente
        cardElement.setAttribute('data-id', card.id);
        cardElement.innerHTML = `
         <img src="images/${card.img}" alt="${card.img}" width="10px" height="10px" />`
        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });

    // Espera 3 segundos e esconde as imagens
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
    }, 2000); // 3000 ms = 3 segundos
}

// Função para virar a carta ao ser clicada
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Verifica se as duas cartas viradas são iguais
function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.getAttribute('data-id') === card2.getAttribute('data-id')) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === gameCards.length) {
            setTimeout(() => alert('Você ganhou!'), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

// Reinicia o jogo
function resetGame() {
    flippedCards = [];
    matchedCards = [];
    shuffleCards();
    createBoard();
}

shuffleCards();
createBoard();

function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';  // Limpa o tabuleiro antes de recriar
    gameCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'flipped'); // Adiciona a classe 'flipped' para exibir inicialmente
        cardElement.setAttribute('data-id', card.id);
        cardElement.innerHTML = `
            <img src="images/${card.img}" alt="${card.img}" />`;
        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });

    // Espera 1 segundo e esconde as imagens
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
    }, 1800); // 1000 ms = 1 segundo
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.getAttribute('data-id') === card2.getAttribute('data-id')) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === gameCards.length) {
            setTimeout(() => {
                // Mostra a mensagem de vitória
                document.getElementById('victory-message').style.display = 'block';
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function playVictorySound() {
    const victorySound = document.getElementById('victory-sound');
    victorySound.play();
}

function showStars() {
    const starsContainer = document.getElementById('stars-container');
    starsContainer.style.display = 'block';

    // Cria e adiciona estrelinhas ao contêiner
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = '⭐';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.fontSize = `${Math.random() * 20 + 10}px`; // Tamanho aleatório

        starsContainer.appendChild(star);

        // Remove a estrelinha após a animação terminar
        setTimeout(() => {
            star.remove();
        }, 1000);
    }

    // Oculta as estrelinhas após um tempo
    setTimeout(() => {
        starsContainer.style.display = 'none';
    }, 1500);
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.getAttribute('data-id') === card2.getAttribute('data-id')) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === gameCards.length) {
            setTimeout(() => {
                playVictorySound();
                showStars();
                document.getElementById('victory-message').style.display = 'block';
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

setTimeout(() => {
    victoryMessage.style.display = 'none';
}, 3000);
