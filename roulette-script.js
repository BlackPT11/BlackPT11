const wheel = document.getElementById('wheel');
const spinButtonRoulette = document.getElementById('spinButtonRoulette');
const betAmountInputRoulette = document.getElementById('betAmountRoulette');
const rouletteResult = document.getElementById('rouletteResult');
const colorChoice = document.getElementById('colorChoice');

const outcomes = ['Vermelho','Preto', 'Verde'];

spinButtonRoulette.addEventListener('click',() => {
    const betAmount = parseFloat(betAmountInputRoulette.value);
    const chosenColor = colorChoice.value;

    if (isNaN(betAmount) || betAmount <= 0) {
        alert('Por favor, insira um valor de aposta válido.');
        return;
    }

    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    wheel.textContent = outcome;

    if (outcome === chosenColor) {
        let multiplier = chosenColor === 'Verde' ? 14 : 2;
        rouletteResult.textContent = `Você ganhou ${betAmount * multiplier} €!`;
    } else {
        rouletteResult.textContent = 'Você perdeu. Tente novamente.';
    }
});
