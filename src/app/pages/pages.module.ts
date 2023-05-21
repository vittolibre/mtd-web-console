import { KubeDeploymentModule } from './kube-deployment/kube-deployment.module';
import { KubeNodeModule } from './kube-node/kube-node.module';
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { MtdStrategyModule } from './mtd-strategy/mtd-strategy.module';
import { ParameterModule } from './parameter/parameter.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    KubeNodeModule,
    KubeDeploymentModule,
    MtdStrategyModule,
    ParameterModule,
    MiscellaneousModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
