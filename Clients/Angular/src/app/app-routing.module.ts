import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotFoundPageComponent } from './notFoundPage/not-found-page/not-found-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'profile',
    component: ProfilePageComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
