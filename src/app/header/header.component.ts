import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** display email if logged in */
  @Input() email: string;

  /** to display a list of validated emails */
  @Input() bonus: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToBonus() {
    this.router.navigate(['/bonus']);
  }
}
