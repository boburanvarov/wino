import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  expertFilter=[
    {
      name:"Закупщики"
    },
    {
      name:"Виноделы"
    },
    {
      name:"Сомелье"
    },
    {
      name:"Кавист"
    }
  ]

  experts=[
    { 
      id:1,
      img:"../../../assets/img/expert1.png",
      name: "Роберт Паркер",
      subtitle: `Роберт Паркер - самый известным человеком в мире вина, новатором и даже немного революционером.
      Юрист по образованию. Поэтому свое издание, а потом и сайт он назвал Wine Advocate. Винная тема настолько увлекла юриста, что он начал выпускать свои заметки о вине, которые в 1970-е стали очень популярными благодаря понятному языку, простому изложению и четкой структуре и логике, которых в те времена так не хватало. 
      `,
      isActive:false
    },  
    { 
      id:2,
      img:"../../../assets/img/expert2.png",
      name: "Сергей Антонов",
      subtitle: `Сергей Антонов в качестве шеф-сомелье составлял винные карты таких популярных мест, как Wine and Crab, «Винный базар» и Blush, регулярно задает жару соперникам на слепых дегустациях Wine Wrestling и пишет остроумные колонки для винных неофитов и серьезных ценителей под псевдонимом «Деревенский сомелье». Сергей присоединился к команде Wineincognito и будет удивлять вас неожиданными эногастрономическими сочетаниями. 
      `,
      isActive:true
    },
    { 
      id:3,
      img:"../../../assets/img/expert3.png",
      name: "Роберт Паркер",
      subtitle: `Роберт Паркер - самый известным человеком в мире вина, новатором и даже немного революционером.
      Юрист по образованию. Поэтому свое издание, а потом и сайт он назвал Wine Advocate. Винная тема настолько увлекла юриста, что он начал выпускать свои заметки о вине, которые в 1970-е стали очень популярными благодаря понятному языку, простому изложению и четкой структуре и логике, которых в те времена так не хватало. 
      `,
      isActive:false
    },
    { 
      id:4,
      img:"../../../assets/img/expert2.png",
      name: "Сергей Антонов",
      subtitle: `Сергей Антонов в качестве шеф-сомелье составлял винные карты таких популярных мест, как Wine and Crab, «Винный базар» и Blush, регулярно задает жару соперникам на слепых дегустациях Wine Wrestling и пишет остроумные колонки для винных неофитов и серьезных ценителей под псевдонимом «Деревенский сомелье». Сергей присоединился к команде Wineincognito и будет удивлять вас неожиданными эногастрономическими сочетаниями.
      `,
      isActive:true
    },
  ]
  

}