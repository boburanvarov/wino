import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expert-info',
  templateUrl: './expert-info.component.html',
  styleUrls: ['./expert-info.component.css']
})
export class ExpertInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  systemInfo=[
    {
      number: "22",
      title: "проведенных исследований"
    },
    {
      number: "40",
      title: "участий в конкурсах"
    },
    {
      number: "103",
      title: "оцененных образцов"
    },
    {
      number: "456",
      title: "дня работы в системе"
    },
    {
      number: "91",
      title: "средняя оценка оцененных вин"
    },
  ]

}
