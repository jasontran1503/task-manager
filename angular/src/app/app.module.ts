import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskManagerPageComponent } from './pages/task-manager-page/task-manager-page.component';
import { ListsComponent } from './components/lists/lists.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddUpdateItemComponent } from './components/add-update-item/add-update-item.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LogOutComponent } from './components/log-out/log-out.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerPageComponent,
    ListsComponent,
    TasksComponent,
    AddUpdateItemComponent,
    SpinnerComponent,
    LogOutComponent,
    UserAccountPageComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
