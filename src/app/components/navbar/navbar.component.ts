import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  
  isVisible = false;
  searchActive:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  searchActived(){
    if(!this.searchActive){
      this.searchActive=true;
    }else{
      this.searchActive=false;
    }
  }

  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
