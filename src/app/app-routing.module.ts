import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLayoutComponent } from './Layout/first-layout/first-layout.component';
import { FourthLayoutComponent } from './Layout/fourth-layout/fourth-layout.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layout/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './Layout/third-layout/third-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'FirstLayout',
    component: FirstLayoutComponent
  },
  {
    path: 'SecondLayout',
    component: SecondLayoutComponent
  },
  {
    path: 'ThirdLayout',
    component: ThirdLayoutComponent
  },
  {
    path: 'FourthLayout',
    component: FourthLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
