import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



import { RouterModule, Routes } from  '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http';

const  appRoutes:  Routes  = [
  {
    path: 'login',
    component:  LoginComponent
  },
  { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent
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
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
