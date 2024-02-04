import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { error } from 'console';
import { ErrorComponent } from './error/error.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from 'src/services/route-guard-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestartComponent } from './gestart/gestart.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent 
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'welcome/:userId', component: WelcomeComponent, canActivate:[RouteGuardService]
  },
  {
    path: 'article', component: ArticleComponent, canActivate:[RouteGuardService]
  },
  {
    path: 'gestart/:codart', component: GestartComponent, canActivate:[RouteGuardService]
  },
  {
    path: 'gestart', component: GestartComponent, canActivate:[RouteGuardService]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[RouteGuardService]
  },
  {
    path: '', component: LoginComponent   /*se l'iri e' vuoto allora va a login*/
  },
  {
    path: '**', component: ErrorComponent   /*se nessuno dei precedenti iri non esiste allora va a error*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
