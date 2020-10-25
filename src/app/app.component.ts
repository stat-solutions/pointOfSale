import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PointOfSale';

  constructor(private router:Router){}
  importcustomer(customerName:string):void{
    this.router.navigate(['$(customerName)']);
  }
}
