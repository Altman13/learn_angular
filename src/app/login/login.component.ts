import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SettingsComponent } from './../settings/settings.component';
import { AuthService } from './../auth.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'plants-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { name: '', password: '' };
  constructor(private as: AuthService, private router: Router,
    private title: Title, private ac: AppComponent) { }

  ngOnInit() {
    this.title.setTitle('Вход:: ' + SettingsComponent.title);
  }
  login(): void {
    this.as.login(this.credentials).subscribe((role: string) => {
      if (role !== '') {
        this.router.navigate(['']);
        // this.ac.title.refreshRole();
      }
    });
  }
}
