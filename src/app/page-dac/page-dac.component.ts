import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-dac',
  templateUrl: './page-dac.component.html',
  styleUrls: ['./page-dac.component.css']
})
export class PageDacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logo : string = "./assets/images/logo.jpeg";
}
