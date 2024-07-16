import { MedicoComponent } from "./medico.component";

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MedicoService } from "./medico.service";
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from "@angular/common/http";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// PRUEBA DE INTEGRACION
describe('MedicoComponent', () => {


    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    
    // PARA TESTEAR CON MODULOS
    beforeEach(async () => {

        
        await TestBed.configureTestingModule({
            // imports: [MedicoComponent, HttpClientTestingModule],
            // providers: [MedicoService, HttpClient]
            // declarations: [],
            providers:[MedicoService, HttpClientTestingModule],
            imports: []
        }).compileComponents();

        //
        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    
    it('Debe de crearse el componente', () => {

        expect( component ).toBeTruthy();

    });



    it('Debe de retornar el nombre del medico', () => {

        const nombre = 'Juan';
        const msj = component.saludarMedico(nombre);

        expect( msj ).toContain(nombre);

    });
    
    // it('should create', () => {
    //     expect(fixture.nativeElement);
    // })


});





