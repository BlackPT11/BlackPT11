const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');

const symbols = ['🍒', '🍋', '🍉', '🍇', '🍓', '🍌'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

spinButton.addEventListener('click', () => {
    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    reel1.textContent = symbol1;
    reel2.textContent = symbol2;
    reel3.textContent = symbol3;

    if (symbol1 === symbol2 && symbol2 === symbol3) {
        result.textContent = 'Você ganhou!';
    } else {
        result.textContent = 'Tente novamente.';
    }
});
