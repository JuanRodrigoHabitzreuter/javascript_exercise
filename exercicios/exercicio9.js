// function averages(grade1, grade2, grade3) {
//     return
//       ((grade1 + grade2 + grade3) / 3)

//     if (averages >= 7) {
//         console.log(`Your grade is: ${averages.toFixed(2)} Approved`)
//     } else if (averages >= 5) {
//         console.log(`Your grade is: ${averages.toFixed(2)} Recovery`)
//     } else {
//         console.log(`Your grade is: ${averages.toFixed(2)} Disapproved`)
//     }
// }

//  function averages1(grade1, grade2, grade3) {
//     const media = ((grade1 + grade2 + grade3) / 3)

//     if (media >= 7) {
//         return (`Your grade is: ${media.toFixed(2)} Approved`)
//     } else if (media >= 5) {
//         return (`Your grade is: ${media.toFixed(2)} Recovery`)
//     } else {
//         return (`Your grade is: ${media.toFixed(2)} Disapproved`)
//     }
// }

function averages2(grade1, grade2, grade3) {
    const media = ((grade1 + grade2 + grade3) / 3)

    let msg = ''
    if (media >= 7) {
        msg = 'Approved'
    } else if (media >= 5) {
        msg = 'Recovery'
    } else {
        msg = 'Disapproved'
    }

    return {
        message: `Resultado: ${media.toFixed(2)}`,
        gradeStatus: msg
    }
}

module.exports = {averages2}