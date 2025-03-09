import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TabMultiTallyComponent } from './tab-multi-tally/tab-multi-tally.component';
import { TabMultiFormulaComponent } from './tab-multi-formula/tab-multi-formula.component';

export const routes: Routes = [

  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'multi-tally', component: TabMultiTallyComponent },
  { path: 'multi-formula', component: TabMultiFormulaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }