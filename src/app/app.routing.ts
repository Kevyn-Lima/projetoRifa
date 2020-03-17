import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {AuthGuard} from './views/guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      canActivate: [AuthGuard]
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-usuarios',
        loadChildren: () => import('./views/lista-usuarios/lista-usuarios.module').then(m => m.ListaUsuariosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-itens',
        loadChildren: () => import('./views/lista-itens/lista-itens.module').then(m => m.ListaItensModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-tickets',
        loadChildren: () => import('./views/lista-tickets/lista-tickets.module').then(m => m.ListaTicketsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-transacao',
        loadChildren: () => import('./views/lista-transacao/lista-transacao.module').then(m => m.ListaTransacaoModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lista-pacotes',
        loadChildren: () => import('./views/lista-pacotes/lista-pacotes.module').then(m => m.ListaPacotesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'editar-lista-usuarios/:id',
        loadChildren: () => import('./views/editar-lista-usuarios/editar-lista-usuarios.module').then(m => m.EditarListaUsuariosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'editar-lista-itens/:id',
        loadChildren: () => import('./views/editar-lista-itens/editar-lista-itens.module').then(m => m.EditarListaItensModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'editar-lista-pacotes/:id',
        loadChildren: () => import('./views/editar-lista-pacotes/editar-lista-pacotes.module').then(m => m.EditarListaPacotesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'adicionar-lista-itens',
        loadChildren: () => import('./views/adicionar-lista-itens/adicionar-lista-itens.module').then(m => m.AdicionarListaItensModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'adicionar-lista-usuarios',
        loadChildren: () => import('./views/adicionar-lista-usuarios/adicionar-lista-usuarios.module').then(m => m.AdicionarListaUsuariosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'adicionar-lista-pacotes',
        loadChildren: () => import('./views/adicionar-lista-pacotes/adicionar-lista-pacotes.module').then(m => m.AdicionarListaPacotesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
