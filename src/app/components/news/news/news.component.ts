import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  years=[
    {
      name:"2022"
    },
    {
      name:"2021"
    },
    {
      name:"2020"
    },
    {
      name:"2019"
    },
    {
      name:"2018"
    },
  ]

}
