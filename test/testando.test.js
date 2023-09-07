// const { describe, expect, it } = require('@jest/globals')
// const { somar } = require ('../exercicios/exercicio1.js');

 

// describe('Testes do primeiro exercício', () => {
   
// Executado antes de TODOS os testes

//  beforeAll(async () => {

//  console.info('Iniciando TDD com jest!');

//  });

 

// Executado após TODOS os testes

//  afterAll(() => {

//  console.info('Encerrados os testes');

//  });

 

//  it('Should sum two numbers', () => {

//  const result = exercicio1(1, 2)

 

//  expect(result).toBe(3);

//  })

 

// })

// const { describe, expect, it } = require('@jest/globals')
// const { sub } = require('../exercicios/dois.js')
// const { calcularMedia } = require('../exercicios/nove.js')

// describe('Testes do primeiro exercício', () => {
//    it('Should sum two numbers', () => {
//       const result = sub(1, 2)
      
//       expect(result).toBe(-1);
//    })

//    it('Should sum three grades and divide by three if approved', () => {
//       const expected = { media: 8, message: "Aprovado" }
//       const result = calcularMedia([7,8,9], 'joao')

//       expect(result).toEqual(expected)
//    })

//    it('Should sum three grades and divide by three if recovery', () => {
//       const expected = { media: 6, message: "Recuperação" }
//       const result = calcularMedia([6,6,6], 'Jhonyklei')

//       expect(result).toEqual(expected)
//    })

//    it('Should sum three grades and divide by three if reproved', () => {
//       const expected = { media: 3, message: "Reprovado" }
//       const result = calcularMedia([3,3,3], 'Jhonyklei')

//       expect(result).toEqual(expected)
//    })

// })

const { describe, expect, it } = require('@jest/globals')
const { somar } = require('../exercicios/exercicio1.js')


describe('Testes do primeiro exercício', () => {
   it('Should sum two numbers', () => {
      const result = somar(1, 2)
      
      expect(result).toBe(3);
   })
})

//    it('Should sum three grades and divide by three if approved', () => {
//       const expected = { media: 8, message: "Aprovado" }
//       const result = calcularMedia([7,8,9], 'joao')

//       expect(result).toEqual(expected)
//    })

//    it('Should sum three grades and divide by three if recovery', () => {
//       const expected = { media: 6, message: "Recuperação" }
//       const result = calcularMedia([6,6,6], 'Jhonyklei')

//       expect(result).toEqual(expected)
//    })

//    it('Should sum three grades and divide by three if reproved', () => {
//       const expected = { media: 3, message: "Reprovado" }
//       const result = calcularMedia([3,3,3], 'Jhonyklei')

//       expect(result).toEqual(expected)
//    })

// })