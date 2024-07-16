import { obtenerAutos } from "./arreglos";



xdescribe( 'Pruebas de arreglos', () => {

    it( 'Debe de retornar al menos 4 autos', () => {
        
        const res = obtenerAutos();
        expect( res.length ).toBeGreaterThanOrEqual(4);

    });




    it( 'Debe de existir Volkswagen y BMW', () => {
        
        const res = obtenerAutos();
        expect( res ).toContain('Volkswagen');
        expect( res ).toContain('BMW');

    });





});


