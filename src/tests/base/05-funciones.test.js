
import {getUser, getUserActivo} from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('Debe retornar un objeto', () => {

        const userTest ={
            uid:'ABC123',
            userName: 'jpablo859'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })
    
    test('debe retornar el usuario activo', () => {
        const nombre = 'Juan Pablo';
        const userText = {
            id: 123,
            name:nombre
        }


        const user = getUserActivo(nombre);
        console.log(user)

        expect(user).toEqual(userText);
    })
    
    
})