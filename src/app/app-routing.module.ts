import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoBienvenidaComponent } from './saludo-bienvenida/saludo-bienvenida.component';
import { PreguntaComponent } from './pregunta/pregunta.component';

const routes: Routes = [
  { path: '', redirectTo: 'Bienvenida', pathMatch: 'full' },
  { path: 'Bienvenida', component: SaludoBienvenidaComponent },
  { path: 'Pregunta', component: PreguntaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
