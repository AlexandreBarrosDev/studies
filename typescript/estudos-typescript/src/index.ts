//tipos primitivos
const nome: string = 'Alexandre' //string
const idade: number = 44 //number
const estudando:boolean = true //boolean

//tipos indefinidos
const nulo: null = null //nulo
const indefinido: undefined = undefined

//tipos abrangentes
let retorno: void // vazio/sem retorno
const view: any = 'qualquer coisa' //any

//objetos - sem previsibilidade
const objeto: object = { nome: 'Alexandre', idade: 44} //não recomendado

//objeto
type ProdutoLoja = {
    nome: string;
    preco: number;
    testado: boolean;
}

//objeto tipado - com previsibilidade
let meuProduto: ProdutoLoja = {
    nome: 'Tênis',
    preco: 89.99,
    testado: true,
}

//arrays
let dados: string[] = ['Alexandre', 'Carol', 'Arthur']
let dados2: Array<string> = ['gato', 'cachorro', 'papagaio']
let infos: (string | number)[] = ['memória', 2, 'processador', 6] //array multi types

//tuplas
let boleto:[string, number, number] = ['agua conta', 199.00, 328457573]

//datas
let aniversario: Date = new Date('2025-02-20 12:00')
//console.log(aniversario.toString())

//funções
function addNumber(x: number, y:number) {
    return x + y
}
let soma:number = addNumber(4, 6)
//console.log(soma)

async function getDatabase(id: number): Promise<string> {
    return 'Alexandre'
}

//interface x type
type robot = {
    id: number
    name: string
}

interface robot2 {
    id: number
    name: string
}

const bot1: robot = {
    id: 1,
    name: 'Alexandre',
}

const bot2: robot2 = {
    id: 2,
    name: 'Carol',
}
//console.log(bot1)
//console.log(bot2)

//classes e modificadores
class Character {
    private name?: string //somente acessada dentro da classe e o campo não é obrigatório
    readonly strength: number //somente de leitura, não pode ter seu valor alterado
    protected skill: number // somente acessada por classe e subclasses

    constructor(strength: number, skill: number) {
        this.strength = strength
        this.skill = skill
    }
    attack(): void{
        console.log(`Attack with ${this.attack} points`)
    }
}

//subclasse

class Magician extends Character {
    magicPoints: number
    constructor(strength: number, skill: number, magicPoints: number) {
        super(strength, skill)
        this.magicPoints = magicPoints
    }
}

//generics
function concatArray<T>(...items: T[]): T[] {
    return new Array().concat(...items)
}

const numArrays = concatArray<number[]>([3, 8], [5])
const stringArrays = concatArray<string[]>(['alexandre', 'carol'], ['arthur'])

//console.log(numArrays)
//console.log(stringArrays)

//decorators
function ExibirNome(target: any) {
    console.log(target)
}

/*@ExibirNome
class Funcionario {}

@ExibirNome
class Professor {}*/

function apiVersion(version: string) {
    return (target: any) => Object.assign(target.prototype, {__version: version});
}

@apiVersion("1.14")
class Api {}

const api = new Api()
console.log(api.__version)