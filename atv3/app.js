const express = require('express');
const app = express();
const PORT = 8081

app.get("/operacao/:tipo", (req, res) => {

    try {

        const { tipo } = req.params;
        const { numUm } = req.query;
        const { numDois } = req.query;

        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

    let resultado;

      if (tipo == "soma" || tipo == "+")    {
        
          resultado = parseFloat(numUm) + parseFloat(numDois);
        
      } else if (tipo =="divisao" || tipo == "/")   {

          resultado = parseFloat(numUm) / parseFloat(numDois);

      } else if (tipo == "subtracao" || tipo == "-")    {

          resultado = parseFloat(numUm) - parseFloat(numDois);

      } else if (tipo == "multiplicacao" || tipo == "*")    {

          resultado = parseFloat(numUm) * parseFloat(numDois);
        
        }
    

        res.send(`<h1>O valor da sua conta é ${resultado}!</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno do servidor!");

    }
});

// INICIALIZA O SERVIDOR E DEVE SER A ULTIMA LINHA!!!
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost: ${PORT}`);
});