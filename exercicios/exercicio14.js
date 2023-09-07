function biggerThen(number1, number2) {

    if (number1 > number2) {
       return ("{number1} is bigger than {number2}");
    }
    else {
        return ("{number2} is bigger than {number1}");
    }

}
module.exports = {biggerThen}