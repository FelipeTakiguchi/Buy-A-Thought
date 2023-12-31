import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BuySecretComponent } from './buy-secret/buy-secret.component';
import { BuyIdeaComponent } from './buy-idea/buy-idea.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResultIdeaComponent } from './result-idea/result-idea.component';
import { ResultSecretComponent } from './result-secret/result-secret.component';
import { SellIdeaComponent } from './sell-idea/sell-idea.component';
import { SellSecretComponent } from './sell-secret/sell-secret.component';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SACComponent } from './sac/sac.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewSecretComponent } from './view-secret/view-secret.component';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { BuyedItemsComponent } from './buyed-items/buyed-items.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuySecretComponent,
    BuyIdeaComponent,
    ResultIdeaComponent,
    ResultSecretComponent,
    SellIdeaComponent,
    SellSecretComponent,
    SACComponent,
    LogInComponent,
    SignUpComponent,
    ViewSecretComponent,
    ViewIdeaComponent,
    BuyedItemsComponent,
    WalletComponent,
    ProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
