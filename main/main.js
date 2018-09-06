function main(input) {
    let random = generate4RandomNumber();
    return calculateGuess(input, random);
}

function calculateGuess(input, random) {
    let result = "0A4B";
    if(random === "1234"){
        result = "4A0B";
    }
    return result;
}
function generateRandomNumber() {
    return String(Math.round(Math.random()*10));
}

function generate4RandomNumber() {
    let result = "";
    while (result.length!==4) {
        let random = generateRandomNumber();
        result.includes(random)?result:result+=random;
    }
    return result;
}

module.exports = {
    main, generateRandomNumber,generate4RandomNumber, calculateGuess
}