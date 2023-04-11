import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RootComponent as aComponent} from "../app/shaixuanceshiform/components/root-component/rootcomponent";
import { RootComponent as bComponent} from "../app/testcardform/components/root-component/rootcomponent";
import { RootComponent as cComponent} from "../app/list/components/root-component/rootcomponent";
const routes: Routes = [
  // { path: 'shaixuanceshiForm', loadChildren:'./shaixuanceshiform/shaixuanceshiform.module#shaixuanceshiFormModule'}
  { path: "shaixuanceshiForm", component: aComponent },
  { path: "testcardform", component: bComponent },
  { path: "list", component: cComponent }
  // { path: 'shaixuanceshiForm2', loadChildren:'./shaixuanceshiform2/shaixuanceshiform2.module#shaixuanceshiForm2Module'},
  // { path: 'shaixuanceshiForm3', loadChildren:'./shaixuanceshiform3/shaixuanceshiform3.module#shaixuanceshiForm3Module'},
  // { path: 'shaixuanceshiForm4', loadChildren:'./shaixuanceshiform4/shaixuanceshiform4.module#shaixuanceshiForm4Module'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
