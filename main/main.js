function main(input) {
    let random = generate4RandomNumber();
    return calculateGuess(input, random);
}

function calculateGuess(input, random) {
    let inputArray = Array.from(input);
    let randomArray = Array.from(random);

    let result = "";
    let countA = 0;
    let countB = 0;
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