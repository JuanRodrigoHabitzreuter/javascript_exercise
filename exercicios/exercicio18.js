function carSale(factoryCost, dealer, taxes, endValue){
   
    let value = ''
    dealer = factoryCost * (28 % 100) / 100;
    

    taxes = factoryCost * (45 % 100) / 100;
    

    endValue = factoryCost + dealer + taxes;

    return {
               value: endValue
    }
    
}
module.exports = {carSale}