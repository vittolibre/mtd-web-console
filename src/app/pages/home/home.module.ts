import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbCardModule } from '@nebular/theme';
import { MENU_ITEMS } from '../pages-menu';
import { Routes, RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    RouterModule.forChild(MENU_ITEMS)
  ]
})
export class HomeModule { }
