import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { HomeComponent } from './website/home/home.component';
import { DevelopersComponent } from './website/developers/developers.component'; 
import { MobileDevelopersComponent } from './website/mobile-developers/mobile-developers.component';
import { DesignersComponent } from './website/designers/designers.component';
import { WritingsComponent } from './website/writings/writings.component';
import { AdministrativeSupportComponent } from './website/administrative-support/administrative-support.component';
import { CustomerServiceComponent } from './website/customer-service/customer-service.component';
import { SalesMarketingComponent } from './website/sales-marketing/sales-marketing.component';
import { AccountingConsultingComponent } from './website/accounting-consulting/accounting-consulting.component';
import { HireComponent } from './website/hire/hire.component';
import { JobPostingComponent } from './website/job-posting/job-posting.component';
 
import { HomeHireComponent } from './website/home-hire/home-hire.component';
import { GameDevelopersComponent } from './website/game-developers/game-developers.component';
import { LoginComponent } from './website/login/login.component';
import { SignupComponent } from './website/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DevelopersComponent, 
    MobileDevelopersComponent,
    DesignersComponent,
    WritingsComponent,
    AdministrativeSupportComponent,
    CustomerServiceComponent,
    SalesMarketingComponent,
    AccountingConsultingComponent,
    HireComponent,
    JobPostingComponent, 
    HomeHireComponent, GameDevelopersComponent, LoginComponent, SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
