import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {
  public name: string = '';

  constructor() {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
  }
}
