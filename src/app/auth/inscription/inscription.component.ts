import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  logo : string = "./assets/images/logo.jpeg";

  onMessage(){
    let value = 
    console.log('get radio value ');
    
  }
}
