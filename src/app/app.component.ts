import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "./avanzado/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [HttpClient],
    imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent]
})
export class AppComponent {
  title = 'seccion21';
}
