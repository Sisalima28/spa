import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  textoBusqueda: string = '';

  constructor(private router: Router) {}

  buscar() {
    this.router.navigate(['/search', this.textoBusqueda]);
  }
}
