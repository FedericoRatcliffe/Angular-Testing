import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [],
  templateUrl: './medico.component.html',
  styles: [],
  providers: [MedicoService]
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor( public _medicoService:MedicoService ) {}

  ngOnInit() {
    
  }

  saludarMedico(nombre:string) {
    return 'Hola '+ nombre;
  }


  obtenerMedicos() {
    // this._medicoService.getMedicos().subscribe( (medicos:any) => this.medicos = medicos );
  }




}
