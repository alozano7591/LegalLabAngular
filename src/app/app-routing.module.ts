import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {CommonModule} from "@angular/common";

//pages
import{HomeComponent} from "./components/home/home.component";
import{AboutComponent} from "./components/about/about.component";
import{ServicesComponent} from "./components/services/services.component";
import{ContactComponent} from "./components/contact/contact.component";
import {Contact2Component} from "./components/contact2/contact2.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
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
  },
  /*
  {

    path: 'contact2',
    component: Contact2Component

  }

   */

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
