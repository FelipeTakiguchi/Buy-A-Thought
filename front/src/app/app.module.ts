import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BuySecretComponent } from './buy-secret/buy-secret.component';
import { BuyIdeaComponent } from './buy-idea/buy-idea.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ResultIdeaComponent } from './result-idea/result-idea.component';
import { ResultSecretComponent } from './result-secret/result-secret.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuySecretComponent,
    BuyIdeaComponent,
    ResultIdeaComponent,
    ResultSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
