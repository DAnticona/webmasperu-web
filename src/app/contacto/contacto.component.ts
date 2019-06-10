import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EmailerService } from '../emailer.service';

import { Persona } from '../persona';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  lat: number;
  lon: number;
  zoom: number;

  submitted = false;

  contactoForm: FormGroup;

  persona: Persona;

  constructor(private emailerService: EmailerService) { }

  ngOnInit() {

    this.contactoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      telefono: new FormControl(''),
      mensaje: new FormControl('', Validators.required),
    });

    this.lat = -12.0951906;
    this.lon = -77.0682965;
    this.zoom = 16;
  }

  get nombre() { return this.contactoForm.get('nombre'); }

  get correo() { return this.contactoForm.get('correo'); }

  get mensaje() { return this.contactoForm.get('mensaje'); }

  get telefono() { return this.contactoForm.get('telefono'); }

  onSubmit() {
    this.submitted = true;
    this.persona = new Persona(this.nombre.value, this.correo.value, this.mensaje.value, this.telefono.value);

    this.enviar(this.persona);
    this.contactoForm.reset();
  }

  enviar(persona: Persona): void {
    this.emailerService.enviaMensaje(persona).subscribe();
    /*
    * VERIFICA LA RESPUESTA DE BACK-END EN ESTE CASO RESPONSE TEXT:

    this.emailerService.enviaMensaje(persona).subscribe(
      data => {
        console.log(data);
      }
    );

    */
  }

}
