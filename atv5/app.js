const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {
  const nome = req.params;
  const hora = parseInt(req.query);

  if (isNaN(hora) || hora < 0 || hora > 23) {
            return res.status(400).send(`Campos obrigatorios não preenchidos!`);
  }

  let saudacao = "Boa noite";

  if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia";
  }

  if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde";
  }

  res.send(`${saudacao}, ${nome}!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



