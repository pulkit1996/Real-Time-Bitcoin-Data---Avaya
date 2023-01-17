import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeService } from './trade.service';

const routes: Routes = [];

@NgModule({
  providers: [
    TradeService
   ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
