import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskManagerPageComponent } from './pages/task-manager-page/task-manager-page.component';
import { ListsComponent } from './components/lists/lists.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddUpdateItemComponent } from './components/add-update-item/add-update-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerPageComponent,
    ListsComponent,
    TasksComponent,
    AddUpdateItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
