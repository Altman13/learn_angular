import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticPageComponent } from './static-page/static-page.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MainComponent
  },

  {
    path: 'howtobuy', component: StaticPageComponent,
    data: {
      fileName: 'howtobuy.html',
      title: 'Оплата'
    }
  },
  {
    path: 'about', component: StaticPageComponent,
    data: {
      fileName: 'about.html',
      title: 'О фирме'
    }
  },
  {
    path: 'user', loadChildren: './users.module#UsersModule'
  },
  {
    path: '**', component: StaticPageComponent,
    data: {
      fileName: '404.html',
      title: 'Ошибка'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
