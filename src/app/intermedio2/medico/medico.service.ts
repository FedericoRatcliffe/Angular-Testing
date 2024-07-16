import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  // constructor( public http:HttpClient ) { }


  getMedicos() {
    // return this.http.get('...');
  }

}
