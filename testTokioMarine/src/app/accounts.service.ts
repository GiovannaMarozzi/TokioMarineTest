import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private readonly API = "http://localhost:3000/accounts";

  constructor(private http: HttpClient) { }

  getAccount(){
     return this.http.get(this.API).pipe();
  }
}
