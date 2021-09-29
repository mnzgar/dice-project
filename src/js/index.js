const [rollDice1, rollDice2, rollDice3] = document.querySelectorAll('button');
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const rollDice = (num) => {
  const indexDiceFace = Math.floor(Math.random() * 6);
  const face = document.querySelector(`#roll-dice-${num} + .face`);
  face.innerHTML += diceFaces[indexDiceFace];
}

rollDice1.addEventListener('click', () => rollDice(1));
rollDice2.addEventListener('click', () => rollDice(2));
rollDice3.addEventListener('click', () => rollDice(3));
