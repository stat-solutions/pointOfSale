import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  naraDress() {
    alert("Hey select the size of the dress you want");
  }

}
