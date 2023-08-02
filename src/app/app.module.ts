import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BuySecretComponent } from './buy-secret/buy-secret.component';
import { BuyIdeaComponent } from './buy-idea/buy-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuySecretComponent,
    BuyIdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
