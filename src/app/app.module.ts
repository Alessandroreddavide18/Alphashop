import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ArticleComponent } from './article/article.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AuthappService } from 'src/services/authapp.service';
import { LogoutComponent } from './logout/logout.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticoliGridComponent } from './components/articoli-grid/articoli-grid.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { GestartComponent } from './gestart/gestart.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    ArticleComponent,
    HomeComponent,
    LogoutComponent,
    ArticoliCardComponent,
    DashboardComponent,
    ArticoliGridComponent,
    JumbotronComponent,
    GestartComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
