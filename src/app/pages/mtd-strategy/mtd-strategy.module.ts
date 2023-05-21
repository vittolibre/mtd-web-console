import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtdStrategyComponent } from './mtd-strategy.component';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbToggleModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MtdStrategyComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbToggleModule,
    FormsModule
  ]
})
export class MtdStrategyModule { }
