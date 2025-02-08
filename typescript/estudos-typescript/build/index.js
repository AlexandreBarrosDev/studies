"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nome = 'Alexandre';
const idade = 44;
const estudando = true;
const nulo = null;
const indefinido = undefined;
let retorno;
const view = 'qualquer coisa';
const objeto = { nome: 'Alexandre', idade: 44 };
let meuProduto = {
    nome: 'Tênis',
    preco: 89.99,
    testado: true,
};
let dados = ['Alexandre', 'Carol', 'Arthur'];
let dados2 = ['gato', 'cachorro', 'papagaio'];
let infos = ['memória', 2, 'processador', 6];
let boleto = ['agua conta', 199.00, 328457573];
let aniversario = new Date('2025-02-20 12:00');
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 6);
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return 'Alexandre';
    });
}
const bot1 = {
    id: 1,
    name: 'Alexandre',
};
const bot2 = {
    id: 2,
    name: 'Carol',
};
class Character {
    constructor(strength, skill) {
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.attack} points`);
    }
}
class Magician extends Character {
    constructor(strength, skill, magicPoints) {
        super(strength, skill);
        this.magicPoints = magicPoints;
    }
}
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArrays = concatArray([3, 8], [5]);
const stringArrays = concatArray(['alexandre', 'carol'], ['arthur']);
console.log(numArrays);
console.log(stringArrays);
