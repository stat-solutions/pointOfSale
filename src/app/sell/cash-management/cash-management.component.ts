import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-management',
  templateUrl: './cash-management.component.html',
  styleUrls: ['./cash-management.component.css']
})
export class CashManagementComponent implements OnInit {
  title='to be binded from the user input';

  constructor() { }

  ngOnInit(): void {
  }
  onRemove() {
    document.getElementById('removeCash').style.display = "block";
  }
  onAdd() {
    document.getElementById('addCash').style.display = "block";
  }
<<<<<<< HEAD
  

=======
>>>>>>> 745fde9f2e13269d1238ecc53f71858ad5470bd0

}
