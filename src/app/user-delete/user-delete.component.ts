import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'plants-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private us: UsersService,
    private router: Router, private title: Title) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.us.getUser(id).subscribe((user: User) => {
      this.user = user;
    });

    this.title.setTitle('Удаление :: Пользователи :: ' + SettingsComponent.title);
  }
  private deleteUser(): void {
    this.us.deleteUser(this.user.id).subscribe(response => {
      if (response.data === 1) {
        this.router.navigate(['/user']);
      }
    });
  }
}
