import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTheProjectComponent } from './components/about-the-project/about-the-project.component';
import { CardsCatalogComponent } from './components/cards/cards-catalog/cards-catalog.component';
import { CardsListComponent } from './components/cards/cards-list/cards-list.component';
import { CardsComponent } from './components/cards/cards/cards.component';
import { ExpertInfoComponent } from './components/experts/expert-info/expert-info.component';
import { ExpertsComponent } from './components/experts/expert/experts.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news/news.component';
import { ProcressingPolicyComponent } from './components/procressing-policy/procressing-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, data: {customBreadcrumb: "Main Page"},
  },
  {
    path: 'cards', component: CardsComponent, children: [
      {
        path: 'card-list', component: CardsListComponent
      },
      {
        path: 'card-catalog', component: CardsCatalogComponent
      },
    ]
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'experts', component: ExpertsComponent
  },
  {
    path: 'expert-info', component: ExpertInfoComponent
  },
  {
    path: 'about-project', component: AboutTheProjectComponent, data: {customBreadcrumb: 'About Project'}
  },
  {
    path: 'terms-of-use', component: TermsOfUseComponent
  },
  {
    path: 'procressing-policy', component: ProcressingPolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
