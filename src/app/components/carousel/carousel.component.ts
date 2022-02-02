import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  carouselImg = [
    {
      img: "../../../assets/img/carusel.png"
    },
    {
      img: "../../../assets/img/banner.png"
    },
    {
      img: "../../../assets/img/news1.png"
    },
    {
      img: "../../../assets/img/vino.png"
    },
    {
      img: "../../../assets/img/expert1.png"
    }
  ]

  carousel = {
    mainImage: "",
    firstImage: "",
    secondImage: "",
    currentImageIndex: 0,
    totalImagesNumber: 0
  }


  ngOnInit(): void {
    this.loadCarouselImages();
  }

  loadCarouselImages() {

    if (this.carouselImg.length > 0) {
      this.carousel.mainImage = this.carouselImg[0].img;
      this.carousel.firstImage = this.carouselImg[1] ? this.carouselImg[1].img : "";
      this.carousel.secondImage = this.carouselImg[2] ? this.carouselImg[2].img : "";
      this.carousel.totalImagesNumber = this.carouselImg.length;
    }
  }

  next() {

    if (this.carousel.currentImageIndex < this.carouselImg.length - 1) {
      let i = this.carousel.currentImageIndex;
      this.carousel.mainImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
      this.carousel.firstImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
      this.carousel.secondImage = this.carouselImg[i + 3] ? this.carouselImg[i + 3].img : "";
      this.carousel.currentImageIndex = i + 1;
    }
  }

  prev() {

    if (this.carousel.currentImageIndex > 0) {
      let i = this.carousel.currentImageIndex - 1;
      this.carousel.mainImage = this.carouselImg[i] ? this.carouselImg[i].img : "";
      this.carousel.firstImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
      this.carousel.secondImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
      this.carousel.currentImageIndex = i;
    }
  }



}
