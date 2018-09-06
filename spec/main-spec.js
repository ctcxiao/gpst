const main = require('../main/main');

describe('main()', () => {
    /*it('guess no correct number', ()=>{
        var inputs = "1234";
        let expectText = main.main();
        expect("0A4B").toBe(expectText);
    });*/
});

describe('generateRandomNumber()', () => {
    it('generate 1 random number', ()=>{
        let expectText = main.generateRandomNumber();
        expect(1).toBe(expectText.length);
    });
});