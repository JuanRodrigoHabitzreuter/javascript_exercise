function incomeTax(minimumWage, numberOfDependents, monthlyIncome, cpf) {


    if (monthlyIncome < (minimumWage * 2)) {
        return ("you are isent. {monthlyIncome}");
    }
    else if (monthlyIncome < (minimumWage * 2) && numberOfDependents <= 3) {
        return ("Your wage is: {monthlyIncome - (monthlyIncome * 0.05)}");//(5/100));
    }
    else if (monthlyIncome < (minimumWage * 3) && numberOfDependents <= 5) {
        return ("Your wage is: {monthlyIncome - (monthlyIncome * 0.10)}");//(10/100));
    }
    else if (monthlyIncome < (minimumWage * 5) && numberOfDependents <= 7) {
        return ("Your wage is: {monthlyIncome - (monthlyIncome * 0.15)}");//(15/100));
    }
    else if (monthlyIncome >= (minimumWage * 7)) {
        return ("Your wage is: {monthlyIncome - (monthlyIncome * 0.20)}");//(20/100));
    }

}
module.exports = { incomeTax }