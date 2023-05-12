const cardPlayer = comprarCarta();
const cardPlayer1 = comprarCarta();
const cardBot = comprarCarta();
const cardBot1 = comprarCarta();

const pointsPlayer = cardPlayer.valor + cardPlayer1.valor;
const pointsBot = cardBot.valor + cardBot1.valor;

console.log("Boas vindas ao jogo de BlackJack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  console.log("Resultado da rodada a seguir!");

  console.log(
    `Usuário - cartas: ${cardPlayer.texto} ${cardPlayer1.texto} - pontuação ${pointsPlayer}"`
  );
  console.log(
    `Computador - cartas: ${cardBot.texto} ${cardBot1.texto} - pontuação ${pointsBot}"`
  );

  if (pointsPlayer > 21) {
    console.log("O computador ganhou.");
  } else if (pointsBot > 21) {
    console.log("O usuário ganhou.");
  } else if (pointsPlayer > pointsBot && pointsPlayer < 21) {
    console.log("O usuário ganhou.");
  } else if (pointsBot > pointsPlayer && pointsBot < 21) {
    console.log("O computador ganhou.");
  } else {
    console.log("O jogo acabou.");
  }
}
