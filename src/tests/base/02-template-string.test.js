import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el 02-template-string.test.js', () => {
    test('Prueba en el método getSaludo, debe de retornar Hola Juan ', () => {
        const nombre = 'Juan Pablo';

        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola '+nombre)
    })

    test('la función getSaludo debe devolver Hola Juan si no se envía ningún parametro al invocar la función', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Juan');
    })
    
})