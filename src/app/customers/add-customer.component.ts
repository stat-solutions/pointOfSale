import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
   public customer: any;
  private _customerService: any;
  createCustomerForm: any;
  private _router: any;
  firstname: string;
  lastname: string;
  customerGroup: string;
  contact: number;
  email: string;

  constructor() { }

  ngOnInit(): void {
  }
  saveCustomer(): void {
     //const newCustomer: customer = Object.assign({}, this.customer);
    this._customerService.save(this.customer);
    this.createCustomerForm.reset();
    this._router.navigate(['customer']);

}
}
