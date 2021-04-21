import {Component, OnInit} from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: []
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Marco',
    favoritos: [
      {id: 1, nombre: 'Metal-gear'},
      {id: 2, nombre: 'DeathStranding'},
    ]
  };
  nuevoJuego: string = '';


  guardar() {
    console.log('formulario posteado');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = ''
  }
}
