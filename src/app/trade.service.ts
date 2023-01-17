import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private socket = new WebSocket('wss://ws.bitstamp.net');
  private trades = new Subject<any>();

  constructor(){  
  }

  connect() {
    this.socket.onopen = ()=> {this.data()}
    this.socket.onmessage = (event) => {
      const trade = JSON.parse(event.data);
      this.trades.next(trade.data);
    };
  }

  data() {
    this.socket.send(JSON.stringify({
      event: "bts:subscribe",
      data: {
      channel:"live_trades_btceur"
       }
      }));
  }

  getTrades() {
    return this.trades.asObservable();
  }
}

