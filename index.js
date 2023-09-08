//desafio1
//executar arquivo usando o comando: node " +nome da  pasta que criou"
//console.log("Hello World!");

//desafio2 lib express
//executar arquivo usando o comando:

//para rodar o teste 
// import express from "express";
// import { somar } from './exercicios/exercicio1.js';
// import { diminuir } from "./exercicios/exercicio1plus.js";
// import { wage } from "./exercicios/exercicio2.js";
// import { mediaCinco } from "./exercicios/exercicio3.js";
// import { convertFahrenheit } from "./exercicios/exercicio4.js";
// import { convertKm } from "./exercicios/exercicio5.js";
// import { duration } from "./exercicios/exercicio6.js";
// import { convertMetersCentimeters } from "./exercicios/exercicio7.js";
// import { multiplicationTables } from "./exercicios/exercicio8.js";
// import { averages, averages1, averages2 } from "./exercicios/exercicio9.js";
// import { IMC } from "./exercicios/exercicio10.js";

//novo modelo
const express = require('express')
const { somar } = require('./exercicios/exercicio1.js')
const { diminuir } = require('./exercicios/exercicio1plus.js')
const { wage } = require('./exercicios/exercicio2.js')
const { avarageFive } = require('./exercicios/exercicio3.js')
const { convertFahrenheit } = require('./exercicios/exercicio4.js')
const { convertKm } = require('./exercicios/exercicio5.js')
const { duration } = require('./exercicios/exercicio6.js')
const { convertMetersCentimeters } = require('./exercicios/exercicio7.js')
const { multiplicationTables } = require('./exercicios/exercicio8.js')
const { averages, averages1, averages2 } = require('./exercicios/exercicio9.js')
const { IMC } = require('./exercicios/exercicio10.js')
const { choiceOperation } = require('./exercicios/exercicio11.js')
const { verification } = require('./exercicios/exercicio12.js')
const { inquiry } = require('./exercicios/exercicio13.js')
const { biggerThen } = require('./exercicios/exercicio14.js')
const { triangle } = require('./exercicios/exercicio15.js')
const { incomeTax } = require('./exercicios/exercicio16.js')
const { gradeAvarage, weightedAverage } = require('./exercicios/exercicio17.js')
const { carSale } = require('./exercicios/exercicio18.js')
const { IPIs } = require('./exercicios/exercicio20.js')
// const { judgment } = require('./exercicios/exercicio21.js')
const { trafficTicket } = require('./exercicios/exercicio22.js')


// const express = require('express')
const app = express();
app.use(express.json())
const port = 3000;

// app.post("/api/exercicio1", (req, res) => {
app.post('/api/exercicio1', (req, res) => {

  const num1 = (req.body.num1)
  const num2 = (req.body.num2)

  res.status(200).json({
    message: `View: ${somar(num1, num2)}`
  })
})

app.post('/api/exercicioplus1', (req, res) => {

  const num1 = (req.body.num1)
  const num2 = (req.body.num2)


  res.status(200).json({
    message: `View: ${diminuir(num1, num2)}`
  })
})

app.post('/api/exercicio2', (req, res) => {

  const workedHours = (req.body.workedHours)
  const totalHours = (req.body.totalHours)
  const wages = (req.body.wage)

  res.json({
    message: `View: ${wage(workedHours, totalHours, wages)}`
  })
})

app.post('/api/exercicio3', (req, res) => {

  const weight1 = (req.body.weight1)
  const weight2 = (req.body.weight2)
  const weight3 = (req.body.weight3)
  const weight4 = (req.body.weight4)
  const weight5 = (req.body.weight5)

  res.json({
    message: `View: ${avarageFive(weight1, weight2, weight3, weight4, weight5)}`

  })
})

app.post('/api/exercicio4', (req, res) => {

  const temperature = (req.body.temperature)

  res.json({
    message: `View: ${convertFahrenheit(temperature)}`
  })
})

app.post('/api/exercicio5', (req, res) => {

  const milhas = (req.body.milhas)

  res.json({
    message: `View: ${convertKm(milhas)}`
  })
})

//?utizei [] array
app.post('/api/exercicio6', (req, res) => {

  const timeInSeconds = (req.body.timeInSeconds)
  const hours = (req.body.hours)
  const minutes = (req.body.minutes)
  const seconds = (req.body.seconds)

  res.json({
    message: `View: ${duration(timeInSeconds, hours, minutes, seconds)}`
  })
})

//utizei [] array
app.post('/api/exercicio7', (req, res) => {

  const km = (req.body.km)

  res.json({
    message: `View: ${convertMetersCentimeters(km)}`
  })
})

//utizei [] array
app.post('/api/exercicio8', (req, res) => {

  const multiplicationTable = (req.body.multiplicationTable)

  res.json({
    message: multiplicationTables(multiplicationTable)
    //     message: `View: ${multiplicationTables(multiplicationTable)}`
  })
})


app.post("/api/exercicio9", (req, res) => {
  const grade1 = req.body.grade1;
  const grade2 = req.body.grade2;
  const grade3 = req.body.grade3;
  const result = averages2(grade1, grade2, grade3);

  res.json(result)

  //   res.json({
  //     message: `View:: ${result1}`
  //   })

  // res.json(result2)
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
//     message: `View:: ${[averages.toFixed(2),
//     avarage]}`
//   })
// })


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
//     message: `View: ${averages(avarage,grade1,grade2,grade3)}`
//   })
// })

//! revisar
app.post("/api/exercicio10", (req, res) => {

  const gender = req.body.gender;
  const height = req.body.height;
  const result = IMC(gender, height)


  res.json(result)

})


app.post('/api/exercicio11', (req, res) => {

  const number1 = (req.body.number1)
  const number2 = (req.body.number2)
  const operation = (req.body.operation)


  res.status(200).json({
    message: `View: ${choiceOperation(number1, number2, operation)}`

  })

})

//? verificar outra forma na função para chamara o resultado
app.post('/api/exercicio12', (req, res) => {

  const number = (req.body.number)

  res.status(200).json(verification(number))

})

app.post('/api/exercicio13', (req, res) => {

  const number = (req.body.number)

  res.status(200).json({
    message: `View: ${inquiry(number)}`

  })

})

app.post('/api/exercicio14', (req, res) => {

  const number1 = (req.body.number1)
  const number2 = (req.body.number2)

  res.status(200).json({
    message: `View: ${biggerThen(number1, number2)}`

  })

})

//!verificar
app.post('/api/exercicio15', (req, res) => {

  const a = (req.body.a)
  const b = (req.body.b)
  const c = (req.body.c)

  res.status(200).json({
    message: `View: ${triangle(number1, number2)}`

  })

})

//!verificar
app.post('/api/exercicio16', (req, res) => {

  const cpf = (req.body.cpf)
  const minimumWage = (req.body.minimumWage)
  const numberOfDependents = (req.body.numberOfDependents)
  const monthlyIncome = (req.body.monthlyIncome)

  res.status(200).json({
    message: `View: ${incomeTax(cpf, minimumWage, numberOfDependents, monthlyIncome)}`

  })

})

app.post('/api/exercicio17', (req, res) => {

  const grade1 = (req.body.grade1)
  const grade2 = (req.body.grade2)
  const grade3 = (req.body.grade3)

  const avarage = (req.body.avarage)

  res.status(200).json({
    message: `View: ${weightedAverage(grade1, grade2, grade3, avarage)}`

  })

})
// verificar resutado
app.post('/api/exercicio18', (req, res) => {

  const factoryCost = (req.body.factoryCost)
  const dealer = (req.body.dealer)
  const taxes = (req.body.dealer)
  const endValue = (req.body.endValue)


  res.status(200).json({
    message: `View: ${carSale(factoryCost, dealer, taxes, endValue)}`

  })

})

app.post('/api/exercicio19', (req, res) => {

  const capital = (req.body.capital)
  const rate = req.body.rate
  const totalRate = (req.body.totalRate)
  const interestAmount = (req.body.interestAmount)
  const days = (req.body.days)
  const taxes = 0


  res.status(200).json({
    message: `View: ${taxes(capital, rate, totalRate, interestAmount, days)}`

  })

})

app.post('/api/exercicio20', (req, res) => {


  const code1 = (req.body.code1)
  const code2 = (req.body.code2)
  const pieces1 = (req.body.pieces1)
  const pieces2 = (req.body.pieces2)
  const value1 = (req.body.value1)
  const value2 = (req.body.value2)
  const IPI = (req.body.IPI)
  const totalValue = (req.body.totalValue)


  res.status(200).json({
    message: `View: ${IPIs(code1, code2, pieces1, pieces2, value1, value2, IPI, totalValue)}`

  })

})

//!verificar!
// app.post('/api/exercicio21', (req, res) => {

//   let respostasPositivas = 0 //(req.body.respostasPositivas)
//   let respostasNegativas = 0 //(req.body.respostasNegativas)
//   const verificarRespostas = (req.body.verificarRespostas)
//   const nRespostas = (req.body.nRespostas)

//   res.status(200).json({
//     message: `View: ${judgment(respostasPositivas, respostasNegativas, verificarRespostas, nRespostas)}`

//   })

// })

app.post('/api/exercicio22', (req, res) => {

  const roadSpeed = (req.body, roadSpeed)
  const speed = (req.body.speed)
  const limit = (req.body.limit)

  res.status(200).json({
    message: `View: ${trafficTicket(roadSpeed, speed, limit)}`

  })

})


// app.get("/api/exercicio2", (req, res) => {

//console.log(req)

//   const num1 = parsefloat (req.query.num1)
//   const num2 = parsefloat (req.query.num2)

//   res.json({
//     message: 'View: ${num1 - num2}'
//   })
// })

//  app.get("/", (req, res) => {

//app.get("/", (_, res)
//req: requisição
//res: resposta
//   res.json({message: 'Olá Mundo!'});
//   res.json({message: 'Batata!'}); 
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
  //para visualizar no navegaor
  //localhost:3000/
  console.log(`Servidor rodando na porta ${port}!`);
});