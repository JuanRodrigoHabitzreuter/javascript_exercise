//desafio1
//executar arquivo usando o comando: node " +nome da  pasta que criou"
//console.log("Hello World!");

//desafio2 lib express
//executar arquivo usando o comando:

import express from "express";
import {somar} from './exercicios/exercicio1.js';
import { diminuir } from "./exercicios/exercicio1plus.js";
import { wage } from "./exercicios/exercicio2.js";
import { mediaCinco } from "./exercicios/exercicio3.js";

const app = express();
const port = 3000;
app.use(express.json())

app.post("/api/exercicio1", (req, res) => {
  
  const num1 = (req.body.num1)
  const num2 = (req.body.num2)

  res.json({
    message: `resultado ${somar(num1,num2)}` 
  })
})

app.post("/api/exercicioplus1", (req, res) => {

  const num1 = (req.body.num1)
  const num2 = (req.body.num2)


  res.json({
    message: `resultado ${diminuir(num1,num2)}` 
  })
})

app.post("/api/exercicio2", (req, res) => {
  
  const workedHours = (req.body.workedHours)
  const totalHours = (req.body.totalHours)
  const wages = (req.body.wage)

  res.json({
    message: `resultado ${wage(workedHours,totalHours,wages)}` 
  })
})

app.post("/api/exercicio3", (req, res) => {
  
  const weight1 = (req.body.weight1)
  const weight2 = (req.body.weight2)
  const weight3 = (req.body.weight3)
  const weight4 = (req.body.weight4)
  const weight5 =  (req.body.weight5)

  res.json({
    message: `resultado ${mediaCinco(weight1,weight2,weight3,weight4,weight5)}` 
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