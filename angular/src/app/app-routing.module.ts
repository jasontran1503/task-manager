import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerPageComponent } from './pages/task-manager-page/task-manager-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'task-manager', pathMatch: 'full' },
  { path: 'task-manager', component: TaskManagerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
