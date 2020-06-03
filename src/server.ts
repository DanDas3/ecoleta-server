import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de usuários!");

    response.send('<h3>Hello World!</h3> <br> <h5>Testing!</h5>');

    response.json([
        'Danilo',
        'Lucas'
    ]);
});

app.listen(3333)