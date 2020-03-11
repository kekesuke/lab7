import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leinstercounties',
  templateUrl: './leinstercounties.page.html',
  styleUrls: ['./leinstercounties.page.scss'],
})
export class LeinstercountiesPage implements OnInit {

  constructor() { }
  
  counties: string[] = ["Carlow", "Dublin", "Kildare",
  "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  "Offaly", "Westmeath", "Wexford", "Wicklow"];

  ngOnInit() {
  }

}
