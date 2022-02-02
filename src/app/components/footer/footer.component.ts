import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
 
  terms(){
    this.router.navigate(['terms-of-use'],{ queryParams: { order: 'popular' } })
  }
  procressingPolicy(){
    this.router.navigate(['procressing-policy'],{ queryParams: { order: 'popular' } })
  }

}
