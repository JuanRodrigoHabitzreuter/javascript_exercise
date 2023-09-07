function taxes(capital, rate, totalRate, interestAmount, days) { 
    

    totalRate = capital * rate * days
    interestAmount = capital + totalRate

    return [totalRate, 
        interestAmount];

}
module.exports = { taxes }