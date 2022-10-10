import { Component, OnInit } from '@angular/core';
import {TransfersService} from "../transfers.service";
import {AccountModel} from "./account.model";

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  account: AccountModel = new AccountModel();
  transfers: Array<any> = new Array<any>();
  public data: Date = new Date();

  constructor(private transfersService: TransfersService) { }

  ngOnInit(): void {
    this.listAccounts();
  }

  send(){
    this.transfersService.sendTransfer(this.account).subscribe(accounts =>{
      this.account = new AccountModel();
    }, error => {console.log(error)
    })
  }

  listAccounts(){
    this.transfersService.listAccounts().subscribe(accounts =>{
      this.transfers = accounts;
      this.listAccounts();
    }, error => {console.log("Deu erro", error)
    })
  }

}
