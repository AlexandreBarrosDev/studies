const player1 = {
    name: "Mario",
    speed: 4,
    handling: 3,
    power: 3,
    points: 0,
}

const player2 = {
    name: "Luigi",
    speed: 3,
    handling: 4,
    power: 4,
    points: 0,
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = 'Reta';
            break;
        
        case random < 0.66:
            result = 'Curva';
            break;

        default:
            result = 'Confronto';
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`Rodada ${round}!`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === 'Reta') {
            totalTestSkill1 = character1.speed + diceResult1;
            totalTestSkill2 = character2.speed + diceResult2;

            logRollResult(character1.name, block, diceResult1, character1.speed);
            logRollResult(character2.name, block, diceResult2, character2.speed);
        }
        if (block === 'Curva') {
            totalTestSkill1 = character1.handling + diceResult1;
            totalTestSkill2 = character2.handling + diceResult2;

            logRollResult(character1.name, block, diceResult1, character1.handling);
            logRollResult(character2.name, block, diceResult2, character2.handling);
        }
        if (block === 'Confronto') {
            powerResult1 = character1.power + diceResult1;
            powerResult2 = character2.power + diceResult2;

            console.log(`${character1.name} confrotou ${character2.name}!`);

            logRollResult(character1.name, block, diceResult1, character1.power);
            logRollResult(character2.name, block, diceResult2, character2.power);

            if(powerResult1 > powerResult2 && character1.points > 0) {
                console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto!`);
                character2.points--;
            }

            if(powerResult2 > powerResult1 && character2.points > 0) {
                console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto!`);
                character1.points--;
            }

            console.log(powerResult1 === powerResult2 ? 'Empate! nenhum ponto foi perdido' : '');
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.name} marcou um ponto!`);
            character1.points++;   
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.name} marcou um ponto!`);
            character2.points++;
        }
        console.log('--------------------------------------------------------');
    }
        
}

async function declareWinner(character1, character2) {
    console.log('Resultado final:');
    console.log(`${character1.name}: ${character1.points} pontos`);
    console.log(`${character2.name}: ${character2.points} pontos`);

    if (character1.points > character2.points) {
        console.log(`${character1.name} venceu a corrida!`);
    } else if (character2.points > character1.points) {
        console.log(`${character2.name} venceu a corrida!`);
    } else {
        console.log('Empate! Ninguém venceu a corrida!');
    }
}

(async function main() {
    console.log(`Corrida entre ${player1.name} e ${player2.name} está prestes a começar!... \n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();

