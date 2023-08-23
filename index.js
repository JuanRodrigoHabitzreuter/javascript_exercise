//desafio1
//executar arquivo usando o comando: node " +nome da  pasta que criou"
//console.log("Hello World!");

//desafio2 lib express
//executar arquivo usando o comando:

import express from "express";
import { somar } from './exercicios/exercicio1.js';
import { diminuir } from "./exercicios/exercicio1plus.js";
import { wage } from "./exercicios/exercicio2.js";
import { mediaCinco } from "./exercicios/exercicio3.js";
import { convertFahrenheit } from "./exercicios/exercicio4.js";
import { convertKm } from "./exercicios/exercicio5.js";
import { duration } from "./exercicios/exercicio6.js";
import { convertMetersCentimeters } from "./exercicios/exercicio7.js";
import { multiplicationTables } from "./exercicios/exercicio8.js";
import { averages } from "./exercicios/exercicio9.js";


const app = express();
const port = 3000;
app.use(express.json())

app.post("/api/exercicio1", (req, res) => {

  const num1 = (req.body.num1)
  const num2 = (req.body.num2)

  res.json({
    message: `resultado ${somar(num1, num2)}`
  })
})

app.post("/api/exercicioplus1", (req, res) => {

  const num1 = (req.body.num1)
  const num2 = (req.body.num2)


  res.json({
    message: `resultado ${diminuir(num1, num2)}`
  })
})

app.post("/api/exercicio2", (req, res) => {

  const workedHours = (req.body.workedHours)
  const totalHours = (req.body.totalHours)
  const wages = (req.body.wage)

  res.json({
    message: `resultado ${wage(workedHours, totalHours, wages)}`
  })
})

app.post("/api/exercicio3", (req, res) => {

  const weight1 = (req.body.weight1)
  const weight2 = (req.body.weight2)
  const weight3 = (req.body.weight3)
  const weight4 = (req.body.weight4)
  const weight5 = (req.body.weight5)

  res.json({
    message: `resultado ${mediaCinco(weight1, weight2, weight3, weight4, weight5)}`

  })
})

app.post("/api/exercicio4", (req, res) => {

  const temperature = (req.body.temperature)

  res.json({
    message: `resultado ${convertFahrenheit(temperature)}`
  })
})

app.post("/api/exercicio5", (req, res) => {

  const milhas = (req.body.milhas)

  res.json({
    message: `resultado ${convertKm(milhas)}`
  })
})

// ?revisar não compreendi?
app.post("/api/exercicio6", (req, res) => {

  const timeInSeconds = (req.body.timeInSeconds)
  const hours = (req.body.hours)
  const minutes = (req.body.minutes)
  const seconds = (req.body.seconds)

  res.json({
    message: `resultado ${duration(timeInSeconds,hours, minutes, seconds)}`
  })
})

//?não aparece dois valores tbm?
app.post("/api/exercicio7", (req, res) => {

  const km = (req.body.km)

  res.json({
    message: `resultado ${convertMetersCentimeters(km)}`
  })
})

//?não aparece dois valores tbm, utizei [] array
app.post("/api/exercicio8", (req, res) => {

  const multiplicationTable = (req.body.multiplicationTable)

  res.json({
    message: `resultado ${multiplicationTables(multiplicationTable)}`
  })
})


  app.post("/api/exercicio9", (req, res) => {
    const average = req.body.average;
    const grade1 = req.body.grade1;
    const grade2 = req.body.grade2;
    const grade3 = req.body.grade3;
    const averages = (grade1 + grade2 + grade3) / 3;
  
    let resultMessage = "";
    if (averages >= 7) {
      resultMessage = `Your grade is: ${averages.toFixed(2)} Approved`;
    } else if (averages >= 5) {
      resultMessage = `Your grade is: ${averages.toFixed(2)} Recovery`;
    } else {
      resultMessage = `Your grade is: ${averages.toFixed(2)} Disapproved`;
    }
  
    console.log(resultMessage);
  
    res.json({
      message: `Resultado: ${averages.toFixed(2)}`,
      gradeStatus: resultMessage
    })
  })
  
//   const average = req.body.average;
//   const grade1 = req.body.grade1;
//   const grade2 = req.body.grade2;
//   const grade3 = req.body.grade3;
//   const averages = (grade1 + grade2 + grade3) / 3;

//   if (averages >= 7) {
//     average = (`Your grade is: ${averages.toFixed(2)} Approved`);
//   } else if (averages >= 5) {
//     avarage = (`Your grade is: ${averages.toFixed(2)} Recovery`);
//   } else {
//     avarage = (`Your grade is: ${averages.toFixed(2)} Disapproved`);
//   }

//   res.json({
//     message: `Resultado: ${[averages.toFixed(2),
//     avarage]}`
//   });
// });


// app.post("/api/exercicio9", (req, res) => {

//   const avarage = (req.body.average)
//   const grade1 = (req.body.grade1)
//   const grade2 = (req.body.grade2)
//   const grade3 = (req.body.grade3)
//   const avarages = (grade1 + grade2 + grade3) / 3

//   if (averages >= 7) {
//         console.log(`Your grade is: ${averages.toFixed(2)} Approved`)
//     } else if (averages >= 5) {
//         console.log(`Your grade is: ${averages.toFixed(2)} Recovery`)
//     } else {
//         console.log(`Your grade is: ${averages.toFixed(2)} Disapproved`)
//     }

//   res.json({
//     message: `resultado ${averages(avarage,grade1,grade2,grade3)}`
//   })
// })

// app.get("/api/exercicio2", (req, res) => {

   //console.log(req)

//   const num1 = parsefloat (req.query.num1)
//   const num2 = parsefloat (req.query.num2)

//   res.json({
//     message: 'resultado ${num1 - num2}'
//   })
// })

//  app.get("/", (req, res) => {

  //app.get("/", (_, res)
 //req: requisição
     //res: resposta
//   res.json({message: 'Olá Mundo!'});
//   res.json({message: 'Batata!'}); 
// });

// app.listen(port, ()  =>{
//   console.log(`Servidor rodando na porta ${port}!`);
 //para visualizar no navegaor
  //localhost:3000/
// });

 //desafio2 metodo get
//executar arquivo usando o comando:
// app.get('/api/:userid/:nome', (req, res) => {
//     const nome = req.query.nome;
//     const id = req.params.userid;
//     res.json({message: `você passou queryParam: ${nome}`});
//     res.json({message: `você passou id: ${id}`});
// });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
  //para visualizar no navegaor
  //localhost:3000/
});