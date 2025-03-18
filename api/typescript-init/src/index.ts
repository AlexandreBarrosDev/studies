//objeto literal em typescript
// const typeUser = {
//     admin: 'seja bem vindo admin',
//     estudante: 'olá estudante',
//     professor: 'bem vindo querido professor'
// }

// function validateUser(user: string) {
//     console.log(typeUser[user as keyof typeof typeUser])
// }

// const user = 'estudante'
// validateUser(user)
//-----------------------------------------------------------
//Manipulando elementos de arrays no typescript com push e pop
const array: Array<number> = [1, 2, 3, 4]
const stringArray: string[] = ['a', 'b', 'c']

// console.log('Array original', array)
// array.push(5)//adiciona um elemento no final do array
// console.log('Array com push', array)
// console.log('Array de strings original', stringArray)
// stringArray.pop()//remove o último elemento do array
// console.log('Array de strings com pop', stringArray)
//-----------------------------------------------------------
//Manipulando Arrays com map, filter e reduce
// const buscaNum = array.find(num => num === 5)
// console.log('Buscar número', buscaNum)
// const buscaIndex = stringArray.findIndex(string => string === 'c')
// console.log('Buscar index', buscaIndex)
console.log(array)
array.forEach(num => console.log(num))
array.map(num => console.log(num * 2))