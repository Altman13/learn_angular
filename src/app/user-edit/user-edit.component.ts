import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SettingsComponent } from './../settings/settings.component';
import { UsersService } from '../users.service';


@Component({
  selector: 'plants-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./form.css', './user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private us: UsersService,
    private router: Router, private title: Title, private location: Location) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.us.getUser(id).subscribe((user: User) => {
        this.user = user;
      });
      this.title.setTitle('Правка :: Пользователи :: ' + SettingsComponent.title);
    } else {
      this.title.setTitle('Добавление :: Пользователи :: ' + SettingsComponent.title);
    }
  }

  submitUser(): void {
    this.us.setUser(this.user).subscribe(response => {
      if (response.status === 1) {
        this.router.navigate(['/user']);
      }
    });
  }
  goBack() {
    // window.history.back();
    this.location.back();

    console.log('goBack()...');
  }

}
