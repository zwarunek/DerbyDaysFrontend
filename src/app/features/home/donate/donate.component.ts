import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  displayDonate = false;
  format;
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.format = new FormGroup({
      username: new FormControl(),
      amount: new FormControl(),
      note: new FormControl()
    });
  }
  onClickSubmit(data) {
    this.homeService.donate(data).subscribe((value) => {
      console.log(value)
    })
  }

  showDialog() {
    this.displayDonate = true;
  }
}
