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
  valueFinal: any;
  accountMask = "999999";

  constructor(private transfersService: TransfersService) { }

  date1 = new Date();

  // currentYear =this.data.getFullYear()
  // currentMonth = this.data.getMonth() +1;
  // currentDay = this.data.getDate()
  // //YYYY-MM-DD
  // TodayDate = "2022-11-20";
  //
  // finalMonth: any;
  // finalDay: any;


  ngOnInit(): void {
    this.listAccounts();

    // if(this.currentMonth <10){
    //   this.finalMonth = "0" + this.currentDay;
    // }else{
    //   this.finalMonth = this.currentDay;
    // }
    //
    // if(this.currentDay <10){
    //   this.finalDay = "0" + this.currentDay;
    // }else{
    //   this.finalDay = this.currentDay;
    // }
    //
    // this.TodayDate = this.currentYear+"-"+this.finalMonth+"-"+this.finalDay;
    // console.log(this.currentYear)
    // console.log(this.finalMonth)
    // console.log(this.finalDay)

    // console.log(this.data.getDate())
    // console.log(this.data.getMonth() +1)
    // console.log(this.data.getFullYear())
  }

  calculator(){
    const d1 = this.account.dtTransfer;
    const d2 = this.account.dtAgendamento;
    // @ts-ignore
    const diffInMs = new Date(d1) - new Date(d2);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    let value = this.account.value

    // @ts-ignore
    if(diffInDays == 0 && this.account.value <= 1000){
      // @ts-ignore
      this.valueFinal = value + 3 + (30 / 100);
      // console.log(valueFinal)
      // @ts-ignore
    }else if (diffInDays <= 10 && (this.account.value >= 1001 && this.account.value <= 2000)){
      // @ts-ignore
      this.valueFinal = value + 12;
      // @ts-ignore
    }else if (diffInDays > 10 && this.account.value >= 2000){
      // @ts-ignore
      this.valueFinal = value - (8.2/100);
      // @ts-ignore
    }else if(diffInDays >= 20 && this.account.value >= 2000){
      // @ts-ignore
      this.valueFinal = value - (6.9/100);
      // @ts-ignore
    }else if(diffInDays >= 30 && this.account.value >= 2000){
      // @ts-ignore
      this.valueFinal = value - (4.7/100);
      // @ts-ignore
    }else if (diffInDays >= 40 && this.account.value >= 2000){
      // @ts-ignore
      this.valueFinal = value - (1.7/100);
    }else{
      alert("Erro ao realizar a transferência")
      this.valueFinal = "Error"
      this.account.valueFinal = this.valueFinal;
    }
    console.log(this.data)


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
