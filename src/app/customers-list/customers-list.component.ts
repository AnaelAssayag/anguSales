import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../customers.service';
import {Customer} from '../customer'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any[];
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.getCustomers()
    .subscribe(data => {
      this.customers = data;
    })
  }

  addAllCustomers(){
    this.customersService.getCustomers().subscribe(
      customers => this.customers = customers,
      error => {
        console.error(error);
      }
    );
  }


  deleteMyCustomer(customer: Customer) {
    this.customersService.deleteCustomer(customer.id).subscribe(dog => {
    this.addAllCustomers()
    })
  }
 
}
