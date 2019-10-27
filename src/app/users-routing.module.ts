import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create', component: UserEditComponent },
      { path: 'edit/:id', component: UserEditComponent },
      { path: 'delete/:id', component: UserDeleteComponent },
      { path: '', component: UserListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
