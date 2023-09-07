function weightedAverage(grades1, grades2, grades3, average) {

    // const totalNote = grades1 + grades2 + grades3
    const totalNote = " "

    while (grades1 < 0.0 || grades1 > 10.0) {

    }
    while (grades2 < 0.0 || grades2 > 10.0) {
    }

    while (grades3 < 0.0 || grades3 > 10.0) {

    }

    average = grades1 * (2 % 10) / 10 + grades2 * (3 % 100) / 10 + grades3 * (5 % 10) / 10;
    console.log("Your average is: {average}")

    if (average == 10) {
        return ("congratulations");
    }
    else if (average > 7) {
        return ("try harder");
    }
    else {
        return ("recuperation");
    }
}

module.exports = { weightedAverage }