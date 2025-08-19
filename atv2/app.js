const express = require('express');
const app = express();
const PORT = 8081

app.get("/calculadora", (req, res) => {

    try {

        const { operacao } = req.query;
        const { numUm } = req.query;
        const { numDois } = req.query;

        if (isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
        }

    let resultado;

    console.log(operacao)

      if (operacao == "soma" || operacao == "+"){
          resultado = parseFloat(numUm) + parseFloat(numDois);
        
      }else if (operacao =="divisao" || operacao == "/"){
          resultado = parseFloat(numUm) / parseFloat(numDois);

      }else if (operacao == "subtracao" || operacao == "-"){
          resultado = parseFloat(numUm) - parseFloat(numDois);

      }else if (operacao == "multiplicacao" || operacao == "*"){
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