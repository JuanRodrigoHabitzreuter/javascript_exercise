//desafio1
//executar arquivo usando o comando: node " +nome da  pasta que criou"
console.log("Hello World!");

//desafio2 lib express
//executar arquivo usando o comando:

import express from "express";
const app = express();
const port = 3000;

 app.get("/", (req, res) => {
   
    //app.get("/", (_, res)
    //req: requisição
    //res: resposta
//   res.json({message: 'Olá Mundo!'});
  res.json({message: 'Batata!'}); 
});

app.listen(port, ()  =>{
  console.log(`Servidor rodando na porta ${port}!`);
  //para visualizar no navegaor
  //localhost:3000/
});

//desafio2 metodo get
//executar arquivo usando o comando:
app.get('/api/:userid/:nome', (req, res) => {
    const nome = req.query.nome;
    const id = req.params.userid;
    res.json({message: `você passou queryParam: ${nome}`});
    res.json({message: `você passou id: ${id}`});
});

app.listen(port, ()  =>{
  console.log(`Servidor rodando na porta ${port}!`);
  //para visualizar no navegaor
  //localhost:3000/
});
