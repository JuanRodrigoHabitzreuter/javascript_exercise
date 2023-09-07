function verification(number) {

    let msg = ''

    if (number > 0) {
       msg = ("The number is positive");
    }
    else if (number < 0) {
        msg = ("The number is negative");
    }
    else {
        msg = ("0 is neuter");
    }
    return {
            message: `View: ${number}`,
            leitor: msg,       
    
    }
}
module.exports = { verification }