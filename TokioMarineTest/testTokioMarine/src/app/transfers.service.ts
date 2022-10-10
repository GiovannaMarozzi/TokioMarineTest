import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(private http: HttpClient) { }

  listAccounts(): Observable<any>{
    return this.http.get("http://localhost:3000/accounts")
  }
}
