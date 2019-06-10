import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
  animations: [
    trigger('nosotrosTexto', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('nosotrosImagen', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('frase1', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('misionTexto', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('misionImagen', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('frase2', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('visionTexto', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
    trigger('visionImagen', [
      state('ninguno', style({
        opacity: 0.2
      })),
      transition('ninguno => show', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ]),
  ]
})
export class NosotrosComponent implements OnInit {

  @ViewChild('acercaNosotros') acercaNosotros: ElementRef;
  @ViewChild('nosotrosFrase1') nosotrosFrase1: ElementRef;
  @ViewChild('mision') mision: ElementRef;
  @ViewChild('nosotrosFrase2') nosotrosFrase2: ElementRef;
  @ViewChild('vision') vision: ElementRef;

  nosotrosTexto = 'ninguno';
  nosotrosImagen = 'ninguno';

  frase1 = 'ninguno';

  misionTexto = 'ninguno';
  misionImagen = 'ninguno';

  frase2 = 'ninguno';

  visionTexto = 'ninguno';
  visionImagen = 'ninguno';


  constructor() { }

  ngOnInit() {

    if (screen.width > 1024) {
      this.nosotrosTexto = this.frase1 = this.misionTexto = this.frase2 = this.visionTexto = 'ninguno';
      this.nosotrosImagen = this.misionImagen = this.visionImagen = 'ninguno';
    } else {
      this.nosotrosTexto = this.frase1 = this.misionTexto = this.frase2 = this.visionTexto = 'sinAnimacion';
      this.nosotrosImagen = this.misionImagen = this.visionImagen = 'sinAnimacion';
    }
  }

  @HostListener('window:scroll', ['$event']) onscroll($event: Event) {
    const parametro = window.outerHeight / 2;
    const position = window.pageYOffset;

    const acercaNosotrosPos = this.acercaNosotros.nativeElement.offsetTop - parametro;
    const nosotrosFrase1Pos = this.nosotrosFrase1.nativeElement.offsetTop - parametro;
    const misionPos = this.mision.nativeElement.offsetTop - parametro;
    const nosotrosFrase2Pos = this.nosotrosFrase2.nativeElement.offsetTop - parametro;
    const visionPos = this.vision.nativeElement.offsetTop - parametro;

    if (screen.width > 1024) {
      if (position > acercaNosotrosPos) {
        this.nosotrosTexto =  this.nosotrosImagen = 'show';
      } if (position >= nosotrosFrase1Pos) {
        this.frase1 = 'show';
      } if (position >= misionPos) {
        this.misionTexto = this.misionImagen = 'show';
      } if (position >= nosotrosFrase2Pos) {
        this.frase2 = 'show';
      } if (position >= visionPos) {
        this.visionTexto = this.visionImagen = 'show';
      } if (position === 0) {
        this.nosotrosTexto = this.frase1 = this.misionTexto = this.frase2 = this.visionTexto = 'ninguno';
        this.nosotrosImagen = this.misionImagen = this.visionImagen = 'ninguno';
      }
    } else {
      this.nosotrosTexto = this.frase1 = this.misionTexto = this.frase2 = this.visionTexto = 'sinAnimacion';
      this.nosotrosImagen = this.misionImagen = this.visionImagen = 'sinAnimacion';
    }
  }
}
