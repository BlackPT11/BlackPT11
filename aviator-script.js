const plane = document.getElementById('plane');
const placeBetButton = document.getElementById('placeBet');
const cashOutButton = document.getElementById('cashOut');
const betAmountInput = document.getElementById('betAmount');
const message = document.getElementById('message');
const multiplierDisplay = document.getElementById('multiplier');

let betAmount = 0; //nao mexer 
let multiplier = 1;//nao mexer 
let gameActive = false;//nao mexer 
let interval;//nao mexer 

placeBetButton.addEventListener('click', () => {
    betAmount = parseFloat(betAmountInput.value);
    if (isNaN(betAmount) || betAmount <= 0) {
        alert('insira um valor de aposta válido.');
        return;
    }
    gameActive = true;
    multiplier = 1;
    placeBetButton.disabled = true;
    cashOutButton.disabled = false;
    message.textContent = '';
    plane.style.bottom = '10px';
    plane.style.left = '10px';
    startGame();
});

cashOutButton.addEventListener('click', () => { //nao mexer 
    if (gameActive) {
        gameActive = false;
        clearInterval(interval);
        const winnings = betAmount * multiplier;
        message.textContent = `retiraste €${winnings.toFixed(2)} com um multiplicador de ${multiplier}x.`; //nao mexer \	
		
        resetGame();
    }
});

function startGame() {
    interval = setInterval(() => {
        if (!gameActive) return;
        multiplicador += 0.01;
        plane.style.left = `${parseFloat(plane.style.left) + 1}px`;
        plane.style.bottom = `${parseFloat(plane.style.bottom) + 0.5}px`;
        multiplicadorDisplay.textContent = `Multiplicador: ${multiplier.toFixed(2)}x`;

        //o avião decolando e desaparecendo basico vai ate 2x,3x maximo 
        if (Math.random() < 0.01) {  // Chance do avião desaparecer
            gameActive = false;
            clearInterval(interval);
            message.textContent = 'O avião decolou perdeu.';
            resetGame();
        }
    }, 100);
}

function resetGame() {
    placeBetButton.disabled = false;
    cashOutButton.disabled = true;
}
