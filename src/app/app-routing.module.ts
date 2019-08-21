import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DataInputComponent } from './data-input/data-input.component';

const routes: Routes = [
  {path:'charts', component: ChartsComponent},
  {path:'input', component: DataInputComponent},
  {path:'',pathMatch:'full', redirectTo: 'charts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
