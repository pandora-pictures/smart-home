import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule' },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'},
      {
        path: 'devices',
        loadChildren: '../devices/devices.module#DevicesPageModule'},
      {
        path: 'programs',
        loadChildren: '../programs/programs.module#ProgramsPageModule'},
      {
        path: 'create',
        loadChildren: '../programs/create/create.module#CreatePageModule'},
    ]
  },
  {
    path: 'create',
    loadChildren: '../programs/create/create.module#CreatePageModule'},
  {
    path: 'edit',
    loadChildren: '../programs/edit/edit.module#EditPageModule'},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
