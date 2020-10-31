import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  app: any
  constructor() { }

  ngOnInit(): void {
  }
  onReset() {
    document.getElementById('showMe').style.display = "block";

  }
  hideBox() {
    document.getElementById('showMe').style.display = "none";
  }


}
