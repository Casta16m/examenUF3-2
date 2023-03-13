import { Component } from '@angular/core';
import { DungeonsAndDragonsService } from '../../Serveis/dungeonsAndDragons/dungeons-and-dragons.service';

@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent {

  monstres!: Array<any>;

  constructor(private Monstres: DungeonsAndDragonsService) { }

  ngOnInit(): void {
    this.getMonstres();
  }

  getMonstres() {
    this.Monstres.getMonstres().subscribe(
      response => {
        this.monstres = response.data;
        console.log(this.monstres);
      });
  }

}
