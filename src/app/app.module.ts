import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { ProcressingPolicyComponent } from './components/procressing-policy/procressing-policy.component';
import { MainComponent } from './components/main/main.component';
import { CardsCatalogComponent } from './components/cards/cards-catalog/cards-catalog.component';
import { CardsListComponent } from './components/cards/cards-list/cards-list.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewsCatalogComponent } from './components/news/news-catalog/news-catalog.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NewsComponent } from './components/news/news/news.component';
import { BlockQuoteComponent } from './components/block-quote/block-quote.component';
import { CardsComponent } from './components/cards/cards/cards.component';
import { AboutTheProjectComponent } from './components/about-the-project/about-the-project.component';
import { ExpertInfoComponent } from './components/experts/expert-info/expert-info.component';
import { ExpertsComponent } from './components/experts/expert/experts.component';
import { NewInfoComponent } from './components/news/new-info/new-info.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsInfoComponent } from './components/cards/cards-info/cards-info.component';
import { LoginComponent } from './components/login/login.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TermsOfUseComponent,
    ProcressingPolicyComponent,
    MainComponent,
    CardsCatalogComponent,
    CardsListComponent,
    NewsListComponent,
    NewsCatalogComponent,
    SideMenuComponent,
    NewsComponent,
    BlockQuoteComponent,
    ExpertsComponent,
    CardsComponent,
    AboutTheProjectComponent,
    ExpertInfoComponent,
    NewInfoComponent,
    CarouselComponent,
    CardsInfoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
