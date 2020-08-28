import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerPageComponent } from './pages/task-manager-page/task-manager-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account', component: UserAccountPageComponent, children: [
      { path: '', redirectTo: 'log-in', pathMatch: 'full' },
      { path: 'log-in', component: LogInComponent }
    ]
  },
  { path: 'task-manager', component: TaskManagerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
