import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountsService} from "./accounts.service";
// import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Test Tokio Marine';

  accounts: any;

  constructor(private service: AccountsService) {
  }

  ngOnInit() {
     // this.http.get("http://localhost:3000/accounts/").subscribe()
    // this.service.getAccount().subscribe(dados => this.accounts = dados);
    // this.service.getAccount().subscribe(p => console.log(p));
  }
}
