function main(input) {
    let random = generate4RandomNumber();
    return calculateGuess(input, random);
}

function findCountAB(inputArray, randomArray) {
    let countA = 0;
    let countB = 0;

    let result = "";
    inputArray.forEach((value, index) => {
        randomArray.forEach((value2, index2) => {
            if (value2 === value && index2 === index) {
                countA++;
            } else if (value2 === value && index2 !== index) {
                countB++;
            }
        })
    });
    result += `${countA}A${countB}B`;

    return result;
}

function calculateGuess(input, random) {
    if(checkInputIsError(input)){
        return "error";
    }
    return findCountAB(Array.from(input), Array.from(random));
}

function checkInputIsError(input) {
    return (input.length !== 4 || inputHasChar(input));
}

function inputHasChar(input) {
    let regex = /^\+?[1-9][0-9]*$/;
    return !regex.test(input);
}

function generateRandomNumber() {
    return String(Math.round(Math.random() * 10));
}

function generate4RandomNumber() {
    let result = "";
    while (result.length !== 4) {
        let random = generateRandomNumber();
        result.includes(random) ? result : result += random;
    }
    return result;
}

module.exports = {
    main, generateRandomNumber, generate4RandomNumber, calculateGuess
}