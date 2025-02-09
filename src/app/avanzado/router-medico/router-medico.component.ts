import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  standalone: true,
  imports: [],
  templateUrl: './router-medico.component.html',
  styleUrl: './router-medico.component.scss'
})
export class RouterMedicoComponent implements OnInit {

  id: string;

  constructor( public router:Router, public activatedRoute:ActivatedRoute ) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      // id = nuevo
      this.id = params['id'];

    } )


  }


  guardarMedico() {

    this.router.navigate(['medico', '123']);

  }

}
