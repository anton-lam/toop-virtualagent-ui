import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



import { RouterModule, Routes } from  '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeService } from './home/home.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './register/register.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BonusComponent } from './bonus/bonus.component';

const  appRoutes:  Routes  = [
  {
    path: 'login',
    component:  LoginComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bonus', component: BonusComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    BonusComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule

  ],
  providers: [HomeService, AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
