import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //observable content
  content$: Observable<any>;

  //content 
  content: String;
  
  /** boolean dictating whether to show login/register */
  showLoginRegisterBool: boolean; 

  constructor(public homeService: HomeService) {
    this.content$ = homeService.getContent();
    this.showLoginRegisterBool = false;
   }

  ngOnInit() {
    this.content$.subscribe(content => {
      this.content = content;
    })
  }

  showLoginRegister() {
    this.showLoginRegisterBool = true;
  }

}
