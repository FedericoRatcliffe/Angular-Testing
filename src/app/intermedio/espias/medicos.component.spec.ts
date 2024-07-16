import { Observable, from, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


xdescribe('MedicosComponent', () => {


    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);
    

    beforeEach( () => {
        componente = new MedicosComponent(servicio);

    });


    it('Init: Debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];
 
        spyOn(servicio, 'getMedicos').and.callFake( () => {
          return from([medicos]);
        });
     
        componente.ngOnInit();
     
        expect(componente.medicos.length).toBeGreaterThan(0);

    });


    it('Debe de llamar al servidor para agregar un medico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake(()=> new Observable());
 
        componente.agregarMedico();
        
        expect(espia).toHaveBeenCalled();


    });


    // ESTO TIENE QUE FALLAR
    xit('Debe de agregar un nuevo medico al array("DB") de medicos', () => {

        const medico = { id: 1, nombre: 'juan' };

        spyOn( servicio, 'agregarMedico' ).and.returnValue( of( [medico] ) );


        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });




    xit('Si falla la condicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar el medico';


        spyOn( servicio, 'agregarMedico' ).and.returnValue( throwError(miError) );


        componente.agregarMedico();

        expect( componente.mensajeError ).toBe(miError);

    });




    
    xit('Debe de llamar al servidor para borrar un medico', ()  => {

        spyOn( window, 'confirm' ).and.returnValue(true);

        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( throwError('Error') )

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');

    });


    xit('NO bebe de llamar al servidor para borrar un medico', ()  => {

        spyOn( window, 'confirm' ).and.returnValue(false);

        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( throwError('Error') )

        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');

    });

});
