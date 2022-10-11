import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountModel} from "./transfers/account.model";

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(private http: HttpClient) { }

  sendTransfer(account: AccountModel): Observable<any>{
    return this.http.post("http://localhost:3000/accounts", account);
  }

  listAccounts(): Observable<any>{
    return this.http.get("http://localhost:3000/accounts")
  }
}
