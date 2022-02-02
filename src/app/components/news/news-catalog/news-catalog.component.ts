import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-catalog',
  templateUrl: './news-catalog.component.html',
  styleUrls: ['./news-catalog.component.css']
})
export class NewsCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  news=[
    {
      title: "Исследование винодельни Alma Valley",
      img: "../../../../assets/img/news1.png",
      subtitle: "Задача - оценка всего ассортимента винодельни. ",
      date:"6.12.2021"
    },
    {
      title: "Исследование пива для ритейла",
      img: "../../../../assets/img/news2.png",
      subtitle: "Мы создаём новое уникальное исследование с Сырным сомелье @chesom_ru @akrupetskov по сочетанию сыра и вина.  ",
      date:"14.12.2021"
    },
    {
      title: "Исследование гастросочетания вина и чипсов",
      img: "../../../../assets/img/news3.png",
      subtitle: "Цель - найти наилучшие гастрономические сочетания различных видов игристых вин и вкусов чипсов. ",
      date:"6.12.2021"
    },
    {
      title: "«Wineincognito» планирует провести дегустацию сыров и красных вин ",
      img: "../../../../assets/img/news4.png",
      subtitle: "Мы создаём новое уникальное исследование с Сырным сомелье @chesom_ru @akrupetskov по сочетанию сыра и вина.  ",
      date:"14.12.2021"
    },
  ]

}
