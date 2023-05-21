import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KubeDeploymentComponent } from './kube-deployment.component';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [
    KubeDeploymentComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
  ]
})
export class KubeDeploymentModule { }
