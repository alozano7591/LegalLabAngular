import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";

//pages
import{HomeComponent} from "./components/home/home.component";
import{AboutComponent} from "./components/about/about.component";
import{ServicesComponent} from "./components/services/services.component";
import{ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
