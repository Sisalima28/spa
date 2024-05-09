import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  busqueda:Heroe[]=[];
  heroes:Heroe[]=[];
  textoBusqueda: string = '';

  constructor(private route: ActivatedRoute, private _heroesService: HeroesService, private router: Router){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.textoBusqueda = params['textoBusqueda'];
      this.busqueda = this._heroesService.getHeroeNombre(this.textoBusqueda);
      this.heroes = this._heroesService.getHeroes();
    });
  }

  verHeroe(idx:number) {
    const heroeSeleccionado = this.busqueda[idx];
    const indexEnListaCompleta = this.heroes.findIndex(heroe => heroe === heroeSeleccionado);
    this.router.navigate(['/heroe', indexEnListaCompleta]);
  }
}
