import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cumple = new Date(1988,3,15)
  usuario = '';
  constructor() { }

  personas = [
    { nombre:'aa', apellido:'kkkk'},
    { nombre:'bb', apellido:'qqq'},
    { nombre:'cc', apellido:'eee'},
    { nombre:'dd', apellido:'yyy'},
  ]


  ngOnInit(): void {


  }


  seteaNombre() {
    console.log('lll>');
    this.usuario = 'Sandra';
  }


}
