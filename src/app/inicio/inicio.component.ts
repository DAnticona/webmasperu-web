import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, transition, animate, style, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('muestraTexto', [
      state('showWeb', style({
        transform: 'translateY(0)',
        opacity: .8
      })),
      state('showERP', style({
        transform: 'translateY(0)',
        opacity: .8
      })),
      state('showInfraestructura', style({
        transform: 'translateY(0)',
        opacity: .8
      })),
      state('showMail', style({
        transform: 'translateY(0)',
        opacity: .8
      })),
      state('showHosting', style({
        transform: 'translateY(0)',
        opacity: .8
      })),
      state('showConsultoria', style({
        transform: 'translateY(0)',
        opacity: .8
      })),
      state('hidden', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      transition('* <=> *', [
        animate(200)
      ])
    ]),
    trigger('nosotros', [
      state('ninguno', style({
        transform: 'translateY(100px)',
        opacity: 0.5
      })),
      transition('ninguno => nosotros', [
        animate(500, style({
          transform: 'translateY(0)',
          opacity: 0.5
        }))
      ])
    ]),
    trigger('frase1', [
      state('ninguno', style({
        transform: 'translateY(100px)',
        opacity: 0
      })),
      transition('ninguno => frase1', [
        animate(500, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('servicios', [
      state('ninguno', style({
        transform: 'translateY(100px)',
        opacity: 0
      })),
      transition('ninguno => servicios', [
        animate(500, style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('frase2', [
      state('ninguno', style({
        transform: 'translateY(100px)',
        opacity: 0
      })),
      transition('ninguno => frase2', [
        animate(500, style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class InicioComponent implements OnInit {

  mostrarWeb = false;
  mostrarERP = false;
  mostrarInfraestructura = false;
  mostrarMail = false;
  mostrarHosting = false;
  mostrarConsultoria = false;

  estado1: string;
  estado2: string;
  estado3: string;
  estado4: string;

  @ViewChild('iniNos') iniNos: ElementRef;
  @ViewChild('iniFrase1') iniFrase1: ElementRef;
  @ViewChild('iniSer') iniSer: ElementRef;
  @ViewChild('iniFrase2') iniFrase2: ElementRef;
  @ViewChild('iniCon') iniCon: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

    if (screen.width > 1024) {
      this.estado1 = this.estado2 = this.estado3 = this.estado4 = 'ninguno';
    } else {
      this.estado1 = this.estado2 = this.estado3 = this.estado4 = 'sinAnimacion';
    }

  }

  @HostListener('window:scroll', ['$event']) onScroll($event: Event) {

    const parametro = window.outerHeight / 2;
    const iniNosPos = this.iniNos.nativeElement.offsetTop - parametro;
    const iniFrase1Pos = this.iniFrase1.nativeElement.offsetTop - parametro;
    const iniSerPos = this.iniSer.nativeElement.offsetTop - parametro;
    const iniFrase2Pos = this.iniFrase2.nativeElement.offsetTop - parametro;
    const scrollPosition = window.pageYOffset;

    if (screen.width > 1024) {

      if (scrollPosition >= iniNosPos) {
        this.estado1 = 'nosotros';
      } if (scrollPosition >= iniFrase1Pos) {
        this.estado2 = 'frase1';
      } if (scrollPosition >= iniSerPos) {
        this.estado3 = 'servicios';
      } if (scrollPosition >= iniFrase2Pos) {
        this.estado4 = 'frase2';
      } if (scrollPosition === 0) {
        this.estado1 = this.estado2 = this.estado3 = this.estado4 = 'ninguno';
      }

    } else {
      this.estado1 = this.estado2 = this.estado3 = this.estado4 = 'sinAnimacion';
    }
  }
}
