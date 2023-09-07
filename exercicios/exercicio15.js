function triangle(a, b, c) {

    if (a + b > c && a + c > b && b + c > a) {
        semiperimeter = (a + b + c) / 2.0;
        area = sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
        console.log("The area of triangle is: {area}");
        console.log("The three sides form a triangle:");
        if (a == b && a == c)
            console.log("Equilateral");
        else if (a == b || a == c || b == c)
            console.log("Isosceles");
        else
            console.log("Scalene");
    }
    else {
        console.log("The 3 sides do not form a triangle {a =} a, {b =} b and {c =} c}")
        }
}
module.exports = { triangle }