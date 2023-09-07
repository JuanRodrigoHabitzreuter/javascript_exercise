function choiceOperation(number1, number2, operation) {
        switch (operation) {
            case "+":
                {                 
                    return number1 + number2                    
                };
            case "-":
                {                   
                    return number1 - number2                    
                };
            case "*":
                {
                    return number1 * number2                    
                };
            case "/":
                {                  
                    return number1 / number2                    
                };
            default:
                {
                  return 0         
                             
                }
        }    
}

// const result = 0

// return {
//     message1: operation,
//     message2: result
// }
// module.exports = { choiceOperation }

// double n1, n2, result = 0;
// char operation;

// Console.WriteLine("Tell what math operation do you want to do? [+, -, *, /]");
// operation = Convert.ToChar(Console.ReadLine());

// if (operation != '+' && operation != '-' && operation != '*' && operation != '/')
// {
//     Console.WriteLine("Please, you must inform +, -, * or /");
//     return true;
// }

// Console.WriteLine("Type a number:");
// n1 = Convert.ToDouble(Console.ReadLine());
// Console.WriteLine("Type other number:");
// n2 = Convert.ToDouble(Console.ReadLine());

// if (operation == '+')
//     result = n1 + n2;
// else if (operation == '-')
//     result = n1 - n2;
// else if (operation == '*')
//     result = n1 * n2;
// else if (operation == '/')
//     result = n1 / n2;

// Console.WriteLine($"{n1 operation n2} = is: {Math.Round(result, 2)}");
// }

// break;
// };

module.exports = { choiceOperation }