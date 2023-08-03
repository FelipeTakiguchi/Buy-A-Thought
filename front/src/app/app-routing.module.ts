import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyIdeaComponent } from './buy-idea/buy-idea.component';
import { BuySecretComponent } from './buy-secret/buy-secret.component';
import { ResultIdeaComponent } from './result-idea/result-idea.component';
import { ResultSecretComponent } from './result-secret/result-secret.component';

const routes: Routes = [
  { path: "", title: "Home", component: HomeComponent },
  { path: "Buy-Idea", title: "Buy Idea", component: BuyIdeaComponent },
  { path: "Buy-Secret", title: "Buy Secret", component: BuySecretComponent },
  { path: "Buy-Secret/:id", title: "Idea", component: ResultIdeaComponent },
  { path: "Buy-Secret/:id", title: "Secret", component: ResultSecretComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
