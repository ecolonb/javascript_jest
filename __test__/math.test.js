import {
    sumar,
    multiplicar,
    restar,
    dividir
} from '../functions/math.js';

describe('Test a libreria matematica', () => {
    test('Test sumar', () => {
        expect(sumar(1, 1)).toBe(2);
    });
    test('Test multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(4);
    });
    test('Test restar', () => {
        expect(restar(34, 13)).toBe(21);
    });
    test('Test dividir', () => {
        expect(dividir(360, 2)).toBe(180);
    });
});