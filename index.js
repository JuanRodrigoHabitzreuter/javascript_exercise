//desafio1
//executar arquivo usando o comando: node " +nome da  pasta que criou"
//console.log("Hello World!");

//desafio2 lib express
//executar arquivo usando o comando:

import express from "express";
import {somar} from './exercicios/exercicio1.js'
const app = express();
const port = 3000;
app.use(express.json())

app.post("/api/exercicio1", (req, res) => {

  const num1 = (req.body.num1)
  const num2 = (req.body.num2)

  res.json({
    message: `resultado ${num1 + num2}` 
  })
})

// app.get("/api/exercicio2", (req, res) => {

//   //console.log(req)

//   const num1 = parsefloat (req.query.num1)
//   const num2 = parsefloat (req.query.num2)

//   res.json({
//     message: 'resultado ${num1 - num2}'
//   })
// })

//  app.get("/", (req, res) => {
   
//     //app.get("/", (_, res)
//     //req: requisição
//     //res: resposta
// //   res.json({message: 'Olá Mundo!'});
//   res.json({message: 'Batata!'}); 
// });

// app.listen(port, ()  =>{
//   console.log(`Servidor rodando na porta ${port}!`);
//   //para visualizar no navegaor
//   //localhost:3000/
// });

// //desafio2 metodo get
// //executar arquivo usando o comando:
// app.get('/api/:userid/:nome', (req, res) => {
//     const nome = req.query.nome;
//     const id = req.params.userid;
//     res.json({message: `você passou queryParam: ${nome}`});
//     res.json({message: `você passou id: ${id}`});
// });

app.listen(port, ()  =>{
  console.log(`Servidor rodando na porta ${port}!`);
  //para visualizar no navegaor
  //localhost:3000/
});