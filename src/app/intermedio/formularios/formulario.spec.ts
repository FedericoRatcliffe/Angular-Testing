import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario";


xdescribe( 'Formulario', () => {

    let componente: FormularioRegister;

    beforeEach( () => {

        componente = new FormularioRegister( new FormBuilder() );

    });



    it( 'Debe de crear un formulario con 2 campos, EMAIL Y PASSWORD', () => {

        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();

    });



    it( 'El email debe de ser obligatorio', () => {

        const control = componente.form.get('email');
        control?.setValue('');


        expect( control?.valid ).toBeFalsy();

    });


    it( 'El email debe de ser un email valido', () => {

        const control = componente.form.get('email');
        control?.setValue('federico@');

        
        expect( control?.valid ).toBeTruthy();

    });


});






