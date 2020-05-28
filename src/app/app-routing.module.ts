import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './website/header/header.component';
import { HomeComponent } from './website/home/home.component';
import { HireComponent } from './website/hire/hire.component';
import { DevelopersComponent } from './website/developers/developers.component';
import { MobileDevelopersComponent } from './website/mobile-developers/mobile-developers.component';
import { DesignersComponent } from './website/designers/designers.component';
import { WritingsComponent } from './website/writings/writings.component';
import { AdministrativeSupportComponent } from './website/administrative-support/administrative-support.component';
import { CustomerServiceComponent } from './website/customer-service/customer-service.component';
import { SalesMarketingComponent } from './website/sales-marketing/sales-marketing.component';
import { AccountingConsultingComponent } from './website/accounting-consulting/accounting-consulting.component';
import { JobPostingComponent } from './website/job-posting/job-posting.component';
 
import { HomeHireComponent } from './website/home-hire/home-hire.component';
import { GameDevelopersComponent } from './website/game-developers/game-developers.component';
import { LoginComponent } from './website/login/login.component';
import { SignupComponent } from './website/signup/signup.component';


const routes: Routes = [
  {
    path : '', component : HeaderComponent , children: [
      { path: '', component: HomeComponent} ,
      { path: 'hire', component:     HireComponent , children: [
        { path: '', component: HomeHireComponent } ,
      { path: 'game-developers ', component: GameDevelopersComponent} ,
       
      ] } ,


       
      { path: 'developers', component: DevelopersComponent} ,
      { path: 'mobile-developers', component: MobileDevelopersComponent} ,
      { path: 'designers', component: DesignersComponent} ,
      { path: 'writing', component: WritingsComponent} ,
      { path: 'administrative-support', component: AdministrativeSupportComponent} ,
      { path: 'customer-service', component: CustomerServiceComponent} ,
      { path: 'sales-marketing', component: SalesMarketingComponent} ,
      { path: 'accounting-consulting', component: AccountingConsultingComponent} ,
    
      

    
    ]
   
       
  },
    { path: 'job-posting', component: JobPostingComponent} ,
    { path: 'login', component: LoginComponent} ,
    { path: 'signup', component: SignupComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
