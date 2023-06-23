import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Menù',
    icon: 'layout-outline',
    children: [
      {
        title: 'Home',
        link: '/pages/home',
      },
      {
        title: 'Nodi Cluster',
        link: '/pages/nodes',
      },
      {
        title: 'Kubernetes Deployments',
        link: '/pages/deployments',
      },
      {
        title: 'Strategie MTD',
        link: '/pages/strategies',
      },
      {
        title: 'Parametri',
        link: '/pages/parameters',
      }
    ]
  },
 
];
