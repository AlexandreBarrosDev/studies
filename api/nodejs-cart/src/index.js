import * as cartService from './services/cart.js'
import createItem from './services/item.js'

const cart = []

console.log('Welcome to the shopping cart!')

const item1 = await createItem('hotwheels Ferrari', 29.99, 1)
const item2 = await createItem('hotwheels Lamborghini', 39.99, 2)
const item3 = await createItem('hotwheels Porsche', 25.99, 2)

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)
await cartService.addItem(cart, item3)

await cartService.removeItem(cart, item3)

await cartService.displayCart(cart)

//await cartService.deleteItem(cart, 'hotwheels Lamborghini')
//await cartService.deleteItem(cart, item1.name)

console.log('shopping cart total: ')
await cartService.calculateTotal(cart)