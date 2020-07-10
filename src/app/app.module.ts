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

const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [ AuthguardGuard ],
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
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
