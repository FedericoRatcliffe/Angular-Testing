import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Subject, empty } from 'rxjs';
// import 'rxjs/add/observable/empty';
// import { EMPTY } from 'rxjs/internal/observable/empty';
import { Observable } from 'rxjs/internal/Observable';


class FakeRouter {

  navigate(params) {

    return Promise.resolve(true);

  }

}

class FakeActivatedRoute {


  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  push( valor ) {
    this.subject.next( valor );
  }

  get params() {
    return this.subject.asObservable();
  }

}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterMedicoComponent],
      providers: [{ provide: Router, useClass: FakeRouter }, { provide: ActivatedRoute, useClass: FakeActivatedRoute },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // Add your test cases here
  it('Debe de redireccionar a Medico cuando se guarde', () => {
    
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( ['medico', '123'] );



  });



  it( 'Debe de colocar el ID = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute:FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push( { id:'nuevo' } );

    expect( component.id ).toBe('nuevo');

    

  });



});
