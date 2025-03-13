//Adiciona item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

//Calcula o valor total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

//Deleta item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

//Remove um item do carrinho
async function removeItem(userCart, item) {
    const itemFound = userCart.findIndex((p) => p.name === item.name)
    
    if (itemFound === -1) {
        console.log('Item not found')
        return
    }

    if (userCart[itemFound].quantity > 1) {
        userCart[itemFound].quantity -= 1
        return
    }

    if (userCart[itemFound].quantity == 1) {
        userCart.splice(itemFound, 1)
        return
    }
}

//Mostra os items do carrinho
async function displayCart(userCart) {
    console.log('Shopping Cart list:')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price} | ${item.quantity}X | subtotal = $${item.subtotal()}`)
    })
}
export { addItem, deleteItem, removeItem, calculateTotal, displayCart }