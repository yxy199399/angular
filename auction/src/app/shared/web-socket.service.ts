import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: WebSocket;
  constructor() { }
  createObservableSocket(url: string, id: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observr => {
        this.ws.onmessage = (event) => observr.next(event.data);
        this.ws.onerror = (event) => observr.error(event);
        this.ws.onclose = (event) => observr.complete();
        this.ws.onopen = (event) => this.sendMessage({productId: id});
        return () => this.ws.close();
      }
    );
  }
  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }
}
