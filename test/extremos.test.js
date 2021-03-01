const Extremos = require('../lib/extremos');

const extremos = new Extremos();

describe('Extremos', () => {
    test('test a small array', () =>{
        expect(extremos.acharExtremos([1,2,3,4,5,6])).toMatchObject({menor: 1, indiceMenor: 0, maior: 6, indiceMaior: 5});
    });

    test('test a unordened array', () =>{
        expect(extremos.acharExtremos([1, 99, 3, -5, 8])).toMatchObject({menor: -5, indiceMenor: 3, maior: 99, indiceMaior: 1});
    });

    test('test empty array', () =>{
        expect(()=>{
            extremos.acharExtremos([]);
        }).toThrow('vetor com zero elementos');
    });

    test('test empty array', () =>{
        expect(()=>{
            extremos.acharExtremos(null);
        }).toThrow('vetor nao pode ser nulo');
    });

});
