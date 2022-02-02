import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  data: any;

  getData() {
    this.apiService.get('articles').subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
  }

}
