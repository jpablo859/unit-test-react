import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el 02-template-string.test.js', () => {
    test('Prueba en el método getSaludo, debe de retornar hola + nombre ', () => {
        const nombre = 'Juan Pablo';

        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola '+nombre)
    })
    
})