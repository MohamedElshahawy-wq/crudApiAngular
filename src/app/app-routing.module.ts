import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './Components/login-page/create-user/create-user.component';
import { DetailsForDdlComponent } from './Components/login-page/details-for-ddl/details-for-ddl.component';
import { HomePageComponent } from './Components/login-page/home-page/home-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: 'LoginPage', component: LoginPageComponent },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'Details', component: DetailsForDdlComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: '', redirectTo: 'LoginPage', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
