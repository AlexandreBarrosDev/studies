const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

let customers = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Bob', email: 'bob@gmail.com'},
    {id: 3, name: 'Charlie', email: 'charlie@outlook.com'},
];

server.get('/customers', (req, res) => {
    res.json(customers);
});

server.get('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(c => c.id === id);
    const status = customer ? 200 : 404;
    res.status(status).json(customer);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});