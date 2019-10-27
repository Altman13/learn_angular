import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plants-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  static title = 'Садовые растения';
  constructor() { }
  ngOnInit() {
  }
}
