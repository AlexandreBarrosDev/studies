const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const { name, age } = req.query;   
    return res.json({ 
        message: `Hi ${name}, all good?!` ,
        age: age,
    });

});

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    return res.json({ 
        message: `Hi ${ name }, all good?!` ,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});