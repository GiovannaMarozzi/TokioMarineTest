import { Component, OnInit } from '@angular/core';
import {TransfersService} from "../transfers.service";

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  transfers: Array<any> = new Array<any>();

  constructor(private transfersService: TransfersService) { }

  ngOnInit(): void {
    this.listAccounts();
  }

  listAccounts(){
     this.transfersService.listAccounts().subscribe(accounts =>{
      this.transfers = accounts;
     }, error => {console.log("Deu erro", error)
     })
  }

}
