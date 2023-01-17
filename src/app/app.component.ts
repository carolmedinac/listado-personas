import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import { DataService } from './data.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(){}
  ngOnInit(): void {
     firebase.initializeApp({
      apiKey: "AIzaSyCvzIFt__PI5MLjxFrLy68Tpdu15Yv55_I",
      authDomain: "listado-personas-3950c.firebaseapp.com",

     })
  }
}
