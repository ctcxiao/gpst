function main() {

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
    main, generateRandomNumber,generate4RandomNumber
}