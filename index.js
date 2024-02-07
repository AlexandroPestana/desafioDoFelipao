
// minhas variáveis
let meuHeroi = "Goblin Slayer"
let pontosXP = 0
let goblinsMortos = 8
const xpDoGoblin = 750

//laços de repetição
for (pontosXP; pontosXP < goblinsMortos*xpDoGoblin; pontosXP = pontosXP + xpDoGoblin) {
    console.log( meuHeroi + " matou um goblin e ganhou 750 de experiencia.")   
}

console.log("Em sua batalha foram mortos um total de " + goblinsMortos + " goblin(s) e ganhou " + pontosXP + " de xp totais")

// estrutura de decisão
let nivelDoHeroi;

if (pontosXP <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (pontosXP > 1000 && pontosXP <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (pontosXP > 2000 && pontosXP <= 5000) {
    nivelDoHeroi = "Prata";
} else if (pontosXP > 5000 && pontosXP <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (pontosXP > 7000 && pontosXP <= 8000) {
    nivelDoHeroi = "Platina";
} else if (pontosXP > 8000 && pontosXP <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (pontosXP > 9000 && pontosXP <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Saída
console.log("O Herói " + (meuHeroi) + " está no nível de "  + (nivelDoHeroi) + "!")
