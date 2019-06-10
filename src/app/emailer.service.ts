import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Persona } from './persona';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {

  private emailUrl = 'http://localhost/curso_php/envioCorreo/enviarmensaje_webmas.php';

  constructor(private http: HttpClient) { }

  enviaMensaje(persona: Persona): Observable<any> {
    return this.http.post(this.emailUrl, persona, { responseType: 'text' });
  }

}
