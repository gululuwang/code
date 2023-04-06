import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RootComponent } from './shaixuanceshiform/components/root-component/rootcomponent'
const routes: Routes = [
  // { path: 'shaixuanceshiForm', loadChildren:'./shaixuanceshiform/shaixuanceshiform.module#shaixuanceshiFormModule'}
  { path: '', component:RootComponent}
  // { path: 'shaixuanceshiForm2', loadChildren:'./shaixuanceshiform2/shaixuanceshiform2.module#shaixuanceshiForm2Module'},
  // { path: 'shaixuanceshiForm3', loadChildren:'./shaixuanceshiform3/shaixuanceshiform3.module#shaixuanceshiForm3Module'},
  // { path: 'shaixuanceshiForm4', loadChildren:'./shaixuanceshiform4/shaixuanceshiform4.module#shaixuanceshiForm4Module'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }