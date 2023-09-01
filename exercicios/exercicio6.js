function duration(timeInSeconds) {

        return [(timeInSeconds / 3600),
        ((timeInSeconds % 3600) / 60),
        (timeInSeconds % 60)];

}


            // return ((timeInSeconds / 3600)),
            // ((timeInSeconds % 3600) / 60),
            // ((timeInSeconds % 3600) % 60);
            module.exports = {duration}


