import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ChildListComponent } from './child-list/child-list.component';
import { HttpDataService } from './http-data.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ViewComponent } from './view/view.component';


const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'notFound', component: ErrorComponent},
  {path:'view/:id' , component: ViewComponent},
  {path: 'lists', component: ChildListComponent},
  {path: 'dashboard' , component: RegistrationFormComponent},
  {path: 'home' , component: HomeComponent},
  {path: '**' , redirectTo: '/notFound'}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ChildListComponent,
    HomeComponent,
    ErrorComponent,
    ViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
