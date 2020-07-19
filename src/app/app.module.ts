import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router'
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { SampleDataService } from './sample-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CalculateComponent } from './calculate/calculate.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [ AuthguardGuard ],
    component: DashboardComponent
  },
  {
    path: 'home',
    canActivate: [ AuthguardGuard ],
    component: HomeComponent
  },
  {
    path: 'calculate',
    canActivate: [ AuthguardGuard ],
    component: CalculateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService, AuthguardGuard, SampleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
