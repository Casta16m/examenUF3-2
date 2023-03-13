import { Component } from '@angular/core';
import { DungeonsAndDragonsService } from '../../Serveis/dungeonsAndDragons/dungeons-and-dragons.service';
import { HttpClient } from '@angular/common/http';
import { monstres } from '../../Models/monstres';

@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent {

  monstres!: Array<any>;
  urlImatge!: string;

  constructor(private httpMonstres: DungeonsAndDragonsService) { }

  ngOnInit(): void {
    this.getMonstres();
  }

  getMonstres() {
    this.httpMonstres.getMonstres().subscribe(
      response => {
        this.monstres = response;
        console.log(this.monstres);
      });
  }

  mostrar(index: string) {
    let size = (document.getElementById("midaImatge") as HTMLInputElement).value;
    this.urlImatge = "https://www.dnd5eapi.co/api/monsters" + index + size;
  }

}