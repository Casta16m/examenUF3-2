import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DungeonsAndDragonsService {

  constructor(private http: HttpClient) { };

  getMonstres(): Observable<any> {
    return this.http.get("https://www.dnd5eapi.co/api/monsters");
  }
}
