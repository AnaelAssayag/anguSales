import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import {CustomersService} from '../customers.service'


@Component({
  selector: 'app-crm-customers',
  templateUrl: './crm-customers.component.html',
  styleUrls: ['./crm-customers.component.css']
})
export class CrmCustomersComponent implements OnInit {

  constructor(
    // private customerService: CustomerService,
    // private route: ActivatedRoute

  ) { }

  ngOnInit() {
  }

}
