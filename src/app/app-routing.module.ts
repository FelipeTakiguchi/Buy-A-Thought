import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyIdeaComponent } from './buy-idea/buy-idea.component';
import { BuySecretComponent } from './buy-secret/buy-secret.component';

const routes: Routes = [
  { path: "", title: "Home", component: HomeComponent },
  { path: "Buy-Idea", title: "Buy Idea", component: BuyIdeaComponent },
  { path: "Buy-Secret", title: "Buy Secret", component: BuySecretComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
