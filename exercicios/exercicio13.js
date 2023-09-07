function inquiry(number ){ 
    
    if (number % 2 == 0)
        return ("{number} is pair")
    else
        return ("{number} is odd");
}
module.exports = {inquiry}