import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyIdeaComponent } from './buy-idea/buy-idea.component';
import { BuySecretComponent } from './buy-secret/buy-secret.component';
import { ResultIdeaComponent } from './result-idea/result-idea.component';
import { ResultSecretComponent } from './result-secret/result-secret.component';
import { SellIdeaComponent } from './sell-idea/sell-idea.component';
import { SellSecretComponent } from './sell-secret/sell-secret.component';
import { SACComponent } from './sac/sac.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { ViewSecretComponent } from './view-secret/view-secret.component';
import { BuyedItemsComponent } from './buyed-items/buyed-items.component';

const routes: Routes = [
  { path: "", title: "Home", component: HomeComponent },
  { path: "Log-In", title: "Log In", component: LogInComponent },
  { path: "Sign-Up", title: "Sign Up", component: SignUpComponent },
  { path: "Buy-Idea", title: "Buy Idea", component: BuyIdeaComponent },
  { path: "Buy-Secret", title: "Buy Secret", component: BuySecretComponent },
  { path: "Buy-Idea/:id", title: "Idea", component: ResultIdeaComponent },
  { path: "Buy-Secret/:id", title: "Secret", component: ResultSecretComponent },
  { path: "View-Idea/:id", title: "Idea", component: ViewIdeaComponent },
  { path: "View-Secret/:id", title: "Secret", component: ViewSecretComponent },
  { path: "Buyed-List", title: "Items", component: BuyedItemsComponent },
  { path: "Sell", title: "Secret", component: HomeComponent },
  { path: "Sell-Idea", title: "Sell Idea", component: SellIdeaComponent },
  { path: "Sell-Secret", title: "Sell Secret", component: SellSecretComponent },
  { path: "SAC", title: "SAC", component: SACComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
