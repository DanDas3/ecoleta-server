import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de usuários!");

    response.send('<h3>Hello World!</h3>')
});

app.listen(3333)