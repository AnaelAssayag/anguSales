import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomersService {
  customers: Customer[];
  constructor(private http: HttpClient) {}

  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers')
  }
  addCustomer(newCustomer: Customer) : Observable<Customer>{
    return this.http.post<Customer>(
        '/api/customers', 
        { customer: newCustomer });
  }
  deleteCustomer(id: Number):Observable<Customer>{
    return this.http.delete<Customer>('/api/customers/'+id)
  }

}
