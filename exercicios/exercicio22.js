function trafficTicket(roadSpeed, speed, limit) {

    limit = (roadSpeed + (roadSpeed * 0.20));

    if (speed > roadSpeed && speed <= limit) {
        Console.log("You will receive a fine in the amount of R$ 102,00");
    }
    else if (speed > (roadSpeed + (roadSpeed * 0.20))) {
        Console.log("You will receive a fine in the amount of R$ 500,00");
    }
    else {
        Console.log("Good driver! there is no fine.");
    }
    Console.WriteLine("");
}
module.exports = {trafficTicket}