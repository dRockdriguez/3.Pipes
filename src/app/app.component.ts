import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Fernando";
  nombre2:string = "david rodríguez hernández";

  lista = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Falsa",
      casa: "19"
    }
  };

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("Promesa terminada"), 3500);
  });

  fecha = new Date();

  video:string = "UPyeFsh7SfA";

  activar:boolean = false;
}
