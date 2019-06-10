import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, data: { animation: 'InicioPage' } },
  { path: 'nosotros', component: NosotrosComponent, data: { animation: 'NosotrosPage' } },
  { path: 'servicios', component: ServiciosComponent, data: { animation: 'ServiciosPage' } },
  { path: 'contacto', component: ContactoComponent, data: { animation: 'ContactoPage' } },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
