import { Jugador } from "../clases/clase";


xdescribe( 'Pruebas de Clase', () => {

    // const jugador = new Jugador();
    let jugador = new Jugador();


    beforeAll( () => {
        // console.log('beforeAll');

    });
    beforeEach( () => {
        // console.log('beforeEach');

    });
    afterAll( () => {
        // console.log('afterAll');

    });
    afterEach( () => {
        // console.log('afterEach');
        // jugador.hp = 100;
        jugador = new Jugador();
    });

    it( 'Debe retonar 80hp si recibe 20 de daño', () => {

        const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);


        expect( resp ).toBe(80);

    });



    it( 'Debe retonar 50 si recibe 50 de daño', () => {

        const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);


        expect( resp ).toBe(50);

    });


});
