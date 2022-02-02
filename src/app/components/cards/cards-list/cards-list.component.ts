import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vinoInfo =[
    {
      title: "Вино Красное Сухое Левкадия Резерв Крымск 2010",
      img: "../../../../assets/img/vinocl.png",
      ratingNumber: 86,
    },
    {
      title: "Вино Каберне Совиньон розовое 2010",
      img: "../../../../assets/img/vino2cl.png",
      ratingNumber: 90,
    },
    {
      title: "Вино Красное Сухое Левкадия Резерв Крымск 2010",
      img: "../../../../assets/img/vinocl.png",
      ratingNumber: 86,
    },
    {
      title: "Вино Каберне Совиньон розовое 2010",
      img: "../../../../assets/img/vino2cl.png",
      ratingNumber: 90,
    },
  ]

}
