const express = require('express');
const app = express();
const PORT = 8081

app.get("/ano/:ano", (req, res) => {

    try {

        const { ano } = req.params;
        const numero = parseInt(ano);

        if (isNaN(numero)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

        const bissexto = (numero % 4 === 0 && numero % 100 !==0) || (numero % 400 === 0);


         if (bissexto) {
            res.send(`o ano de ${numero} é um ano bissexto`);
         } else {
             res.send(`o ano de ${numero} não é um bissexto`);
     }

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno do servidor!");

    }
});

// INICIALIZA O SERVIDOR E DEVE SER A ULTIMA LINHA!!!
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost: ${PORT}`);
});