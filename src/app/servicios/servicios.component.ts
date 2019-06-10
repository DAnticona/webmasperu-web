import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  animations: [
    trigger('webTexto', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('webImagen', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('frase1', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('erpTexto', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('erpImagen', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('frase2', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('correoTexto', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('correoImagen', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('frase3', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('hostingTexto', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('hostingImagen', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('frase4', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('infraestructuraTexto', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('infraestructuraImagen', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('frase5', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('consultoriaTexto', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ]),
    trigger('consultoriaImagen', [
      state('ninguno', style({
        opacity: 0,
        transform: 'scaleX(0.9) scaleY(0.9)'
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1,
          transform: 'scaleX(1) scaleY(1)'
        }))
      ])
    ])
  ]
})
export class ServiciosComponent implements OnInit {

  webTexto = 'ninguno';
  webImagen = 'ninguno';

  erpTexto = 'ninguno';
  erpImagen = 'ninguno';

  correoTexto = 'ninguno';
  correoImagen = 'ninguno';

  hostingTexto = 'ninguno';
  hostingImagen = 'ninguno';

  infraestructuraTexto = 'ninguno';
  infraestructuraImagen = 'ninguno';

  consultoriaTexto = 'ninguno';
  consultoriaImagen = 'ninguno';

  frase1 = 'ninguno';
  frase2 = 'ninguno';
  frase3 = 'ninguno';
  frase4 = 'ninguno';
  frase5 = 'ninguno';

  @ViewChild('serviciosWeb') serviciosWeb: ElementRef;
  @ViewChild('serviciosFrase1') serviciosFrase1: ElementRef;
  @ViewChild('serviciosErp') serviciosErp: ElementRef;
  @ViewChild('serviciosFrase2') serviciosFrase2: ElementRef;
  @ViewChild('serviciosCorreo') serviciosCorreo: ElementRef;
  @ViewChild('serviciosFrase3') serviciosFrase3: ElementRef;
  @ViewChild('serviciosHosting') serviciosHosting: ElementRef;
  @ViewChild('serviciosFrase4') serviciosFrase4: ElementRef;
  @ViewChild('serviciosInfraestructura') serviciosInfraestructura: ElementRef;
  @ViewChild('serviciosFrase5') serviciosFrase5: ElementRef;
  @ViewChild('serviciosConsultoria') serviciosConsultoria: ElementRef;


  constructor() { }

  ngOnInit() {
    if (screen.width > 1024) {
      this.webTexto = this.erpTexto = this.correoTexto = this.hostingTexto = this.infraestructuraTexto = this.consultoriaTexto = 'ninguno';
      this.frase1 = this.frase2 = this.frase3 = this.frase4 = this.frase5 = 'ninguno';
      this.webImagen = this.erpImagen = this.correoImagen = this.hostingImagen = 'ninguno';
      this.infraestructuraImagen = this.consultoriaImagen = 'ninguno';
    } else {
      this.webTexto = this.erpTexto = this.correoTexto = this.hostingTexto = this.infraestructuraTexto = 'sinAnimacion';
      this.consultoriaTexto = this.frase1 = this.frase2 = this.frase3 = this.frase4 = this.frase5 = 'sinAnimacion';
      this.webImagen = this.erpImagen = this.correoImagen = this.hostingImagen = 'sinAnimacion';
      this.infraestructuraImagen = this.consultoriaImagen = 'sinAnimacion';
    }
  }

  @HostListener('window:scroll', ['$event']) onscroll($event: Event) {
    const position = window.pageYOffset;
    const parametro = window.outerHeight / 2;
    const serviciosWebPos = this.serviciosWeb.nativeElement.offsetTop - parametro;
    const serviciosFrase1Pos = this.serviciosFrase1.nativeElement.offsetTop - parametro;
    const serviciosErpPos = this.serviciosErp.nativeElement.offsetTop - parametro;
    const serviciosFrase2Pos = this.serviciosFrase2.nativeElement.offsetTop - parametro;
    const serviciosCorreoPos = this.serviciosCorreo.nativeElement.offsetTop - parametro;
    const serviciosFrase3Pos = this.serviciosFrase3.nativeElement.offsetTop - parametro;
    const serviciosHostingWebPos = this.serviciosHosting.nativeElement.offsetTop - parametro;
    const serviciosFrase4Pos = this.serviciosFrase4.nativeElement.offsetTop - parametro;
    const serviciosInfraestructuraPos = this.serviciosInfraestructura.nativeElement.offsetTop - parametro;
    const serviciosFrase5Pos = this.serviciosFrase5.nativeElement.offsetTop - parametro;
    const serviciosConsultoriaPos = this.serviciosConsultoria.nativeElement.offsetTop - parametro;

    if (screen.width > 1024) {
      if (position >= serviciosWebPos) {
        this.webTexto =  this.webImagen = 'show';
      } if (position >= serviciosFrase1Pos) {
        this.frase1 = 'show';
      } if (position >= serviciosErpPos) {
        this.erpTexto = this.erpImagen = 'show';
      } if (position >= serviciosFrase2Pos) {
        this.frase2 = 'show';
      } if (position >= serviciosCorreoPos) {
        this.correoTexto = this.correoImagen = 'show';
      } if (position >= serviciosFrase3Pos) {
        this.frase3 = 'show';
      } if (position >= serviciosHostingWebPos) {
        this.hostingTexto = this.hostingImagen = 'show';
      } if (position >= serviciosFrase4Pos) {
        this.frase4 = 'show';
      } if (position >= serviciosInfraestructuraPos) {
        this.infraestructuraTexto = this.infraestructuraImagen = 'show';
      } if (position >= serviciosFrase5Pos) {
        this.frase5 = 'show';
      } if (position >= serviciosConsultoriaPos) {
        this.consultoriaTexto = this.consultoriaImagen = 'show';
      } if (position === 0) {
        this.webTexto = this.erpTexto = this.correoTexto = this.hostingTexto = this.infraestructuraTexto = 'ninguno';
        this.consultoriaTexto = this.frase1 = this.frase2 = this.frase3 = this.frase4 = this.frase5 = 'ninguno';
        this.webImagen = this.erpImagen = this.correoImagen = this.hostingImagen = 'ninguno';
        this.infraestructuraImagen = this.consultoriaImagen = 'ninguno';
      }
    } else {
      this.webTexto = this.erpTexto = this.correoTexto = this.hostingTexto = this.infraestructuraTexto = 'sinAnimacion';
      this.consultoriaTexto = this.frase1 = this.frase2 = this.frase3 = this.frase4 = this.frase5 = 'sinAnimacion';
      this.webImagen = this.erpImagen = this.correoImagen = this.hostingImagen = 'sinAnimacion';
      this.infraestructuraImagen = this.consultoriaImagen = 'sinAnimacion';
    }
  }

}
