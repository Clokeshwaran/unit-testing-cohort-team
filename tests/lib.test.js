const lib = require('../lib');
//  I90494
describe("FizzBuzz : I90494 : Atharsh S", () => {
    it("should return 'FizzBuzz' if input can be divide by 5 and 3", () => {
        const result = lib.FizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })
    it("should return 'Fizz' if input can be divide by 5", () => {
        const result = lib.FizzBuzz(5);
        expect(result).toBe('Fizz');
    })
    it("should return 'Buzz' if input can be divide by 3", () => {
        const result = lib.FizzBuzz(3);
        expect(result).toBe('Buzz');
    })
    it("should return 'BuzzBuzz' if input can be divide by 11", () => {
        const result = lib.FizzBuzz(11);
        expect(result).toBe('BuzzBuzz');
    })

})

//I90490
describe("evenornot : I90490 : Aarthi S", () => {
    it("should return 'Even' if input is even", () => {
        const result = lib.evenornot(10);
        expect(result).toBe('Even');
    })
    it("should return 'Odd' if input is odd", () => {
        const result = lib.evenornot(5);
        expect(result).toBe('Odd');
    })
})

//I90491
describe("oddornot : I90491 : Kannathal AR", () => {
    it("should return 'Odd' if input is odd", () => {
        const result = lib.oddornot(13);
        expect(result).toBe('Odd');
    })
    it("should return 'Even' if input is even", () => {
        const result = lib.oddornot(50);
        expect(result).toBe('Even');
    })
})

//90502
describe('validateEmail : 90502 : Vijay M', () => {
    it('It Should return Valid Email if the Input is Contains anystring@anystring.anystring pattern', () => {
        const result = lib.validateEmail("vijay98430@gmail.com");
        expect(result).toBe('valid email');
    })

    it('It Should return InValid Email if the Input is Contains anystring@anystring.anystring pattern', () => {
        const result = lib.validateEmail("vijay98430#gmail.com");
        expect(result).toBe('invalid email');
    })

    it('It Should return InValid Email if the Input is Contains anystring@anystring.anystring pattern', () => {
        const result = lib.validateEmail("vijay98430#gmail");
        expect(result).toBe('invalid email');
    })
})

//90511
describe('factorial : 90511 : Dhanaranjanii', () => {
    it('It Should return factorial of a number', () => {
        const result = lib.factorial(2);
        expect(result).toBe(2);
    })

    it('It Should return factorial of a number', () => {
        const result = lib.factorial(5);
        expect(result).toBe(120);
    })
})
    
//90501

    describe('checkIsEven : 90501 : Pavan ', () => {

        it('If input is multiple of 2 it should reply true', () => {
            const result = lib.checkIsEven(2)
            expect(result).toBe(true);
        })
    })
