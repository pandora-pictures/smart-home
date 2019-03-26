import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'devices', loadChildren: './devices/devices.module#DevicesPageModule' },
  { path: 'programs', loadChildren: './programs/programs.module#ProgramsPageModule' },
  { path: 'create', loadChildren: './programs/create/create.module#CreatePageModule' },
  { path: 'edit', loadChildren: './programs/edit/edit.module#EditPageModule' },
];

// localhost/tabs

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
