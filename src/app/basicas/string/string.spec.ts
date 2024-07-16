


// AGRUPAR PRUEBAS
// describe('Pruebas de Strings');
// IT ES UNA PRUEBA ESPECIFICA 
// it('Debe de regresar un string');

import { mensaje } from "./string";


xdescribe( 'Pruebas de strings', () => {


    it( 'Debe de regresar un string', () => {

        const resp = mensaje('Federico');

        expect( typeof resp ).toBe('string');

    });


    // 
    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Juan';
        const resp = mensaje(nombre);

        expect( resp ).toContain(nombre);

    });





});

