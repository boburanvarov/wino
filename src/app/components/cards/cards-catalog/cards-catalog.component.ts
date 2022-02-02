import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-catalog',
  templateUrl: './cards-catalog.component.html',
  styleUrls: ['./cards-catalog.component.css']
})
export class CardsCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vinoInfo =[
    {
      title: "Вино Каберне Совиньон розовое 2010",
      img: "../../../../assets/img/vino.png",
      ratingNumber: 90,
    },
    {
      title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
      img: "../../../../assets/img/vino2.png",
      ratingNumber: 84,
    },
    {
      title: "Вино Каберне Совиньон розовое 2010",
      img: "../../../../assets/img/vino.png",
      ratingNumber: 90,
    },
    {
      title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
      img: "../../../../assets/img/vino2.png",
      ratingNumber: 84,
    },
    // 
    
    {
      title: "Вино Каберне Совиньон розовое 2010",
      img: "../../../../assets/img/vino.png",
      ratingNumber: 90,
    },
    {
      title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
      img: "../../../../assets/img/vino2.png",
      ratingNumber: 84,
    },
    {
      title: "Вино Каберне Совиньон розовое 2010",
      img: "../../../../assets/img/vino.png",
      ratingNumber: 90,
    },
    {
      title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
      img: "../../../../assets/img/vino2.png",
      ratingNumber: 84,
    },
  ]

}
