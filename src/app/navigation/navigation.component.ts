import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plants-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  role: string = ' ';
  constructor(private as: AuthService) { }

  ngOnInit() {
    this.refreshRole();
  }
  refreshRole(): void {
    this.as.getRole().subscribe((role: string) => { this.role = role; });
  }

}
