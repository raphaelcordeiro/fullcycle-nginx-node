const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const config = {
    host: 'mysql',
    user: 'root',
    password: 'testdb',
    database: 'nodedb'
};

// Criando a conexão com o MySQL
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (err, results) => {
        if (err) {
            return res.status(500).send('<h2>Erro ao consultar o banco de dados</h2>');
        }

        // Criando a lista de nomes em HTML
        const namesList = results.map(row => `<li>${row.name}</li>`).join('');

        res.send(`
            <h2>Full Cycle Rocks</h2>
            <ul>${namesList}</ul>
        `);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});