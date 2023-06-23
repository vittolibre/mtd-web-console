import { KubeDeploymentComponent } from './kube-deployment/kube-deployment.component';
import { KubeNodeComponent } from './kube-node/kube-node.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { MtdStrategyComponent } from './mtd-strategy/mtd-strategy.component';
import { ParameterComponent } from './parameter/parameter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
   
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'nodes',
      component: KubeNodeComponent,
    },
    {
      path: 'deployments',
      component: KubeDeploymentComponent,
    },
    {
      path: 'strategies',
      component: MtdStrategyComponent,
    },
    {
      path: 'parameters',
      component: ParameterComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
