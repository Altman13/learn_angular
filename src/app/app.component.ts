import { Component, ViewChild } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'plants-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plants';
  @ViewChild(NavigationComponent) nav: NavigationComponent;
}
