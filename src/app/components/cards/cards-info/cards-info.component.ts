import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-info',
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.css']
})
export class CardsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.loadCarouselImages();
  }


  img: string = ".../../../../../../assets/img/vino-about.png";
  ratingNumber: number = 90;
  title: string = "Вино Красное Сухое Левкадия Резерв Крымск 2010";

  feedBackTitle:string="Отзыв о вино Красное Сухое Левкадия Резерв Крымск, 2015"
  productInfo = [
    {
      type: "Категория",
      title: "Вино"
    },
    {
      type: "Цвет",
      title: "Красное"
    },
    {
      type: "Сахар",
      title: "Сухое"
    },
    {
      type: "Регион",
      title: "США, Калифорния, Сонома Кантри"
    },
    {
      type: "Производитель",
      title: "Duckhorn"
    },
    {
      type: "Крепость",
      title: "13,9 %"
    },
    {
      type: "Виноград",
      title: "Каберне Совиньон 1%, Пити Верда 1%, Мерло 10%"
    }
  ]

  filters = [
    {
      name: "Винтажи",
      types: [
        {
          typeName: "2009",
          filterActive: false
        },
        {
          typeName: "2010",
          filterActive: false
        },
        {
          typeName: "2011",
          filterActive: false
        },
        {
          typeName: "2012",
          filterActive: false
        },
        {
          typeName: "2013",
          filterActive: false
        },
        {
          typeName: "2014",
          filterActive: false
        },
        {
          typeName: "2015",
          filterActive: false
        },
      ]
    },
    {
      name: "Объем",
      types: [
        {
          typeName: "0.75",
          filterActive: false
        },
        {
          typeName: "1.0",
          filterActive: false
        },
        {
          typeName: "1.5",
          filterActive: false
        },
      ]
    },
  ]

  filterActive: Boolean = false;
  
  active: Boolean = false;
  favorite: Boolean = false;

  filterActived(fil:any){
    if (!fil.filterActive) {
      fil.filterActive = true
    } else {
      fil.filterActive = false
    }
  }

  
  carouselImg = [
    {
      img: "../../../assets/img/expert1.png",
      name: "Роберт Паркер"
    },
    {
      img: "../../../assets/img/expert2.png",
      name: "Игорь Алексенко"
    },
    {
      img: "../../../assets/img/expert3.png",
      name:"Дмитрий Руденко"
    },
    {
      img: "../../../assets/img/expert1.png",
      name: "Роберт Паркер"
    },
    {
      img: "../../../assets/img/expert2.png",
      name: "Игорь Алексенко"
    },
  ]

  carousel = {
    mainImage: "",
    firstImage: "",
    secondImage: "",
    
    mainName: "",
    firstName: "",
    secondName: "",

    currentImageIndex: 0,
    totalImagesNumber: 0
  }

  feedBack=[
    {
      name:"Денис",
      date:"2.02.2021 г.",
      text:"Терпкое насыщенное вино. То, что надо. В принципе люблю риоху, но тут совсем другой аромат и насыщенность. Нотки лимона и имбиря присутствуют почти незаметно, всё завершает сладковато-приторный привкус граната, что совсем его не портит. "
    },
    {
      name:"Елена Высоцкая",
      date:"2.02.2021 г.",
      text:"Насыщенное, хорошо сбалансированное, кислотность практически не ощущается , чуть сладковатое, шелковистое.. элегантное.. ягодное.. ежевичный джем..чуть ванили.. Рекомендую!"
    },
    {
      name:"Дмитрий Борисов",
      date:"2.02.2021 г.",
      text:"Терпкое насыщенное вино. То, что надо. В принципе люблю риоху, но тут совсем другой аромат и насыщенность. Нотки лимона и имбиря присутствуют почти незаметно, всё завершает сладковато-приторный привкус граната, что совсем его не портит. "
    },
    {
      name:"Елена Высоцкая",
      date:"2.02.2021 г.",
      text:"Ооочень достойный и интересный вариант! Насыщенное, хорошо сбалансированное, кислотность практически не ощущается , чуть сладковатое, шелковистое"
    },
    {
      name:"Елена Высоцкая",
      date:"2.02.2021 г.",
      text:"Насыщенное, хорошо сбалансированное, кислотность практически не ощущается , чуть сладковатое, шелковистое.. элегантное.. ягодное.. ежевичный джем..чуть ванили.. Рекомендую!"
    },
  ]



  loadCarouselImages() {

    if (this.carouselImg.length > 0) {
      this.carousel.mainImage = this.carouselImg[0].img;
      this.carousel.firstImage = this.carouselImg[1] ? this.carouselImg[1].img : "";
      this.carousel.secondImage = this.carouselImg[2] ? this.carouselImg[2].img : "";

      
      this.carousel.mainName = this.carouselImg[0].name;
      this.carousel.firstName = this.carouselImg[1] ? this.carouselImg[1].name : "";
      this.carousel.secondName = this.carouselImg[2] ? this.carouselImg[2].name : "";

      this.carousel.totalImagesNumber = this.carouselImg.length;
    }
  }

  next() {

    if (this.carousel.currentImageIndex < this.carouselImg.length - 1) {
      let i = this.carousel.currentImageIndex;
      this.carousel.mainImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
      this.carousel.firstImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
      this.carousel.secondImage = this.carouselImg[i + 3] ? this.carouselImg[i + 3].img : "";
      
      this.carousel.mainName  = this.carouselImg[i + 1] ? this.carouselImg[i + 1].name : "";
      this.carousel.firstName = this.carouselImg[i + 2] ? this.carouselImg[i + 2].name : "";
      this.carousel.secondName = this.carouselImg[i + 3] ? this.carouselImg[i + 3].name : "";

      this.carousel.currentImageIndex = i + 1;
    }
  }

  prev() {

    if (this.carousel.currentImageIndex > 0) {
      let i = this.carousel.currentImageIndex - 1;
      this.carousel.mainImage = this.carouselImg[i] ? this.carouselImg[i].img : "";
      this.carousel.firstImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
      this.carousel.secondImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";

      this.carousel.mainName  = this.carouselImg[i] ? this.carouselImg[i].name : "";
      this.carousel.firstName = this.carouselImg[i + 1] ? this.carouselImg[i + 1].name : "";
      this.carousel.secondName = this.carouselImg[i + 2] ? this.carouselImg[i + 2].name : "";

      this.carousel.currentImageIndex = i;
    }
  }


  addComment(){
    if (!this.active) {
      this.active = true
    } else {
      this.active = false
    }
  }

  favoriteIcon(){
    if (!this.favorite) {
      this.favorite = true
    } else {
      this.favorite = false
    }
  }

}
