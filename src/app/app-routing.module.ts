import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './Componentes/calculator/calculator.component';
import { CardsComponent } from './Componentes/cards/cards.component';
import { CheckListComponent } from './Componentes/check-list/check-list.component';
import { ParentComponent } from './Componentes/parent/parent.component';
import { PublicholidaysComponent } from './Componentes/publicholidays/publicholidays.component';
import { FormlyComponent } from './Componentes/formly/formly.component';

const routes: Routes = [
  {
    path: '',
    component: CheckListComponent,
  },
  {
    path: 'card',
    component: CardsComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'share',
    component: ParentComponent,
  },
  {
    path: 'holiday',
    component: PublicholidaysComponent
  },
  {
    path: 'form',
    component: FormlyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
