import { Component, OnInit } from '@angular/core';
import { TradeService } from './trade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  trades: any[] = [];
  
  constructor(private tradeService: TradeService) {}
  
  ngOnInit() {
    this.tradeService.connect();
    this.tradeService.getTrades().subscribe((trade) => {
      this.trades.push(trade);
      console.log(trade);
    });
  }

  sumdata(){   
    if(this.trades.length > 1){
      const prices = this.trades.map((trade:any) => trade?.price);
      console.log(prices);
      prices.shift();
      return prices.reduce((a:number,b:number) => a + b,0)/(this.trades.length - 1);            
    }
    return 0;     
  }

  
}
