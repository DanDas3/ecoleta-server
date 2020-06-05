import express from 'express';

const routes = express.Router();


routes.get('/', (request, response) => {
    console.log("Listagem de usuários!");

    response.send('<h3>Ecoleta</h3> <br> <h5>Develop!</h5>');
});

// routes.get('/users', (request, response) => {
//     console.log("Listagem de usuários!");
//
//     // response.send('<h3>Hello World!</h3> <br> <h5>Testing!</h5>');
//     let search:string = String(request.query.search);
//     let filteredUsers;
//     if(search == "")
//     {
//         console.log("Filtro existente!")
//         filteredUsers = users.filter(user =>  user.includes(search));
//     }
//     else
//     {
//         console.log("Sem filtragem!")
//         filteredUsers = users;
//     }
//     console.log(filteredUsers);
//     return response.json(filteredUsers);
// });
//
// routes.get('/users/:id', (request, response) => {
//     console.log("Listagem de um usuário!");
//     const id = Number(request.params.id);
//     // response.send('<h3>Hello World!</h3> <br> <h5>Testing!</h5>');
//
//     return response.json(users[id]);
// });
//
// routes.post('/users', (request, response) => {
//     const user = {
//         name: 'danilo',
//         email: 'email@email.com'
//     };
//     return response.json(user);
// });

export default routes;