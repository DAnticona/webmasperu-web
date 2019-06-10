import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuBar', [
      state('show', style({
        display: 'block',
        opacity: .9,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        display: 'none',
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('show <=> hidden', [
        animate(300)
      ])
    ]),
    trigger('header', [
      state('hidden', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('show', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden => show', [
        animate(500, style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ]),
      transition('show => hidden', [
        animate(500, style({
          transform: 'translateY(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  header = 'ninguno';

  scrollPositionOld = 0;

  umbralWidth = 600;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  menu(): void {
    this.showMenu = !this.showMenu;
  }

  onResize(event: any): void {
    if (event.target.innerWidth > this.umbralWidth) {
      this.showMenu = false;
    }
  }

  @HostListener('window:scroll', ['$event']) onScroll($event: Event) {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition === 0) {
      this.header = 'ninguno';
      this.renderer.setStyle(this.element.nativeElement, 'position', 'static');
    } else  if (scrollPosition > this.scrollPositionOld) {
      this.header = 'hidden';
      this.scrollPositionOld = scrollPosition;
    } else if (scrollPosition < this.scrollPositionOld) {
      this.header = 'show';
      this.renderer.setStyle(this.element.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.element.nativeElement, 'z-index', '1000');
      this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
      this.scrollPositionOld = scrollPosition;
    }
  }

}
