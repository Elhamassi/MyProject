import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { StartComponent } from './start/start.component';

const routes: Routes= [
  {path: "intro", component: IntroComponent},
  {path: "start", component: StartComponent},
  {path: "", component: IntroComponent},
  {path: "**", component: IntroComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
