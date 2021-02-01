import { retornaArreglo } from "../../base/07-deses-arr"


describe('Prueba de 07-deses-arr.js (desestructuracion)', () => {
    test('debe retornar un arreglo string y número', () => {
        const [letras, numeros] = retornaArreglo();

        // expect(arreglo).toEqual(['ABC', 123]);

        expect(typeof letras).toBe('string');
    })
    
})