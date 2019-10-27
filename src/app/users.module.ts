// import { UsersModule } from './users.module';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDeleteComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
