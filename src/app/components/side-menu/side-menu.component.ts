import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  active: Boolean = false;
  selectedItems = [];

  filter = [
    {
      id: 1,
      name: "Тип",
      active: false,
      children: [
        {
          id: 1,
          name: "1980",
        },
        {
          id: 2,
          name: "1949",
        },
      ]
    },
    {
      id: 2,
      name: "Цвет",
      active: false,
      children: [
        {
          id: 1,
          name: "Красное",
        },
        {
          id: 2,
          name: "Белое",
        },
      ]
    },
    {
      id: 3,
      name: "Сахар",
      active: false,
      children: [
        {
          id: 1,
          name: "Сахар1",
        },
        {
          id: 2,
          name: "Сахар2",
        },
      ]
    },
    {
      id: 4,
      name: "Страна",
      active: false,
      children: [
        {
          id: 1,
          name: "Россия",
        },
        {
          id: 2,
          name: "Узбекистан",
        },
      ]
    },
    {
      id: 5,
      name: "Регион",
      active: false,
      children: [
        {
          id: 1,
          name: "Москва",
        },
        {
          id: 2,
          name: "Ташкент",
        },
      ]
    },
    {
      id: 6,
      name: "Сорт винограда",
      active: false,
      children: [
        {
          id: 1,
          name: "Высший сорт",
        },
        {
          id: 2,
          name: "первый сорт",
        },
      ]
    },
    {
      id: 7,
      name: "Производитель",
      active: false,
      children: [
        {
          id: 1,
          name: "Аврора",
        },
        {
          id: 2,
          name: "Белвино",
        },
      ]
    },
    {
      id: 8,
      name: "Год",
      active: false,
      children: [
        {
          id: 1,
          name: "1920 год",
        },
        {
          id: 2,
          name: "1855 год",
        },
      ]
    },
  ]


  filterActive(fil: any) {
    if (!fil.active) {
      fil.active = true
    } else {
      fil.active = false
    }

  }

  question(){
    if (!this.active) {
      this.active = true
    } else {
      this.active = false
    }
  }





}
