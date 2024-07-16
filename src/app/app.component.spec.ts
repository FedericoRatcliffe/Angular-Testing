import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';

import { By } from '@angular/platform-browser'
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';


describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule.withRoutes([]), NavbarComponent],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  it( 'Debe de tener un router-outlet', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ) );


    expect( debugElement ).not.toBeNull();

  });






  
//   xit( 'Debe de tener un link a la pagina de medicos', () => {

//     const fixture = TestBed.createComponent(AppComponent);

//     const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    
//     console.error(elementos);

//     let existe = false;

//     for ( const elem of elementos ) {

//         if( elem.attributes['routerLink'] === '/medicos' ) {
//             existe = true;
//             break;
//         }

//     }

//     expect( existe ).toBeTruthy();

//   });



//   it(`should have the 'seccion21' title`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('seccion21');
//   });



//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, seccion21');
//   });



});
