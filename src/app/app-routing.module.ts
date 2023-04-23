import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path:'descripcion/:id',
    component: DescripcionComponent,
    pathMatch: "full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
