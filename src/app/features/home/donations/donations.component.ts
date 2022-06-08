import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  donations: any[] = []
  currentDonations: number = 0;
  goal: number = 0
  startDate: Date;
  venmoUsername: string;


  constructor(homeService: HomeService) {
    homeService.getDonations().subscribe((value) => {
      this.donations = value.body;
      let tmp = 0
      this.donations.forEach(donation => {
        tmp += donation.amount;
      })
      this.currentDonations = tmp;
      console.log(this.donations)
    })
    homeService.getinfo().subscribe((value) => {
      this.goal = value.body.goal
      this.startDate = new Date(value.body.startDate)
      this.venmoUsername = value.body.venmoUsername
      console.log(this.goal, this.startDate, this.venmoUsername)
    })
  }

  ngOnInit(): void {
  }

}
