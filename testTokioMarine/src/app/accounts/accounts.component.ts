import { Component, OnInit } from '@angular/core';
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Array<any> = new Array<any>();

  constructor(private accountsService: AccountsService) { }

  // Será chamado semmpre que for solicitado
  ngOnInit(): void {
    // this.verificationAccount
  }

  // verificationAccount(){
  //   this.accountsService.getAccount().subscribe(
  //     accounts => {
  //      this.accounts = accounts;
  //     }, error => {
  //       console.log("Erro ao trazer a conta " + error)
  //     })
  //
  // }


}
