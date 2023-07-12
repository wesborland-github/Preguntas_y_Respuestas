import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-saludo-bienvenida',
  templateUrl: './saludo-bienvenida.component.html',
  styleUrls: ['./saludo-bienvenida.component.scss'],
})
export class SaludoBienvenidaComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  IniciarPreguntas() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
}
