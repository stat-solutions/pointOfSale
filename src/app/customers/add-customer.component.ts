import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveCustomer(): void {
     const newCustomer: customer = Object.assign({}, this.customer);
    this._customerService.save(this.employee);
    this.createCustomerForm.reset();
    this._router.navigate(['customer']);

}
