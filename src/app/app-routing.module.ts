import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryTryComponent } from './try-try/try-try.component';

const routes: Routes = [
  {
    path: 'try',
    component: TryTryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
