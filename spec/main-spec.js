const main = require('../main/main');

describe('main()', () => {
    it('guess correct number but position is not correct', ()=>{
        let input = "1234";
        let random = "4321";
        let expectText = main.calculateGuess(input, random);
        expect("0A4B").toBe(expectText);
    });

    it('guess correct number and position is correct', ()=>{
        let input = "1234";
        let random = "1234";
        let expectText = main.calculateGuess(input, random);
        expect("4A0B").toBe(expectText);
    });
});

describe('generateRandomNumber()', () => {
    it('generate 1 random number', ()=>{
        let expectText = main.generateRandomNumber();
        expect(1).toBe(expectText.length);
    });

    it('generate 4 random number', ()=>{
        let expectText = main.generate4RandomNumber();
        expect(4).toBe(expectText.length);
    });
});