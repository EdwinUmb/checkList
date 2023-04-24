import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './Componentes/check-list/check-list.component';
import { CardsComponent } from './Componentes/cards/cards.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './Componentes/calculator/calculator.component';
import { ParentComponent } from './Componentes/parent/parent.component';
import { FirstChildComponent } from './Componentes/first-child/first-child.component';
import { SecondChildComponent } from './Componentes/second-child/second-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicholidaysComponent } from './Componentes/publicholidays/publicholidays.component';
import { FormComponent } from './Componentes/form/form.component';
import { FormlyComponent } from './Componentes/formly/formly.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CardsComponent,
    CalculatorComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    PublicholidaysComponent,
    FormComponent,
    FormlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({}),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
