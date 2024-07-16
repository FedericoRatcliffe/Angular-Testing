import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

//PRUEBA DE INTEGRACION REAL
describe('Incrementador Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            // declarations: [ IncrementadorComponent ],
            imports: [ FormsModule, IncrementadorComponent ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); //DISPARAR LA DETECCION DE CAMBIOS DE ANGULAR

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });



    it('Debe de mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);

        fixture.detectChanges();
        fixture.whenStable().then( ()=>{

            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;
    
            expect( elem.value ).toBe('55');

        });
    });



    it('Debe de incrementar/decrementar en 5, con un click en el boton (que tenga el evento deseado)', () => {
        
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        console.log(botones);

        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);


        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);
        

    });


    xit('En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') )
        botones[0].triggerEventHandler('click', null);
        // botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('45');

    });

});
