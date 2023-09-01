function IMC(gender,height){
    // ImcMan= (72.7 * height)
    // ImcWoman= (62.1 * height)
    let y ='k';
    let x = 0;
    if (gender == 'm' ){
       x = (72.7 * height) 
       y= 'm';
    }
    else   {
       x = (62.1 * height)
       y= 'w';
    };
    return {
        message1: x,
        message2: y
    }
    }
    module.exports = {IMC}

// para homens (72.7*h)-58
// para mulheres: (62.1*h)-44.7


