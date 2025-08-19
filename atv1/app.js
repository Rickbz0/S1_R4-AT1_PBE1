const express = require('express');
const app = express();
const PORT = 8081

app.get("/soma/:numUm/:numDois", (req, res) => {

    try {

        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

        const resultado = parseFloat(numUm) + parseFloat(numDois);

        res.send(`<h1>O valor da sua Soma é ${resultado}!</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno do servidor!");

    }
});

app.get("/subtracao/:numUm/:numDois", (req, res) => {

    try {

        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

        const resultado = parseFloat(numUm) - parseFloat(numDois);

        res.send(`<h1>O valor da sua subtração é ${resultado}!</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno do servidor!");

    }
});

app.get("/multiplicacao/:numUm/:numDois", (req, res) => {

    try {

        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

        const resultado = parseFloat(numUm) * parseFloat(numDois);

        res.send(`<h1>O valor da sua multiplicação é ${resultado}!</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno do servidor!");

    }
});

app.get("/divisao/:numUm/:numDois", (req, res) => {

    try {

        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

        const resultado = parseFloat(numUm) / parseFloat(numDois);

        res.send(`<h1>O valor da sua Divisão é ${resultado}!</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno do servidor!");

    }
});


// INICIALIZA O SERVIDOR E DEVE SER A ULTIMA LINHA!!!
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost: ${PORT}`);
});