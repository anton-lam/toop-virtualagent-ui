import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

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

  constructor(public homeService: HomeService) {
    this.content$ = homeService.getContent();
   }

  ngOnInit() {
    this.content$.subscribe(content => {
      this.content = content;
    })
  }

}
