import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Orders } from '../interface/orders';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): Promise<HttpResponse<[Orders[]]>> {
    return new Promise((resolve, reject) => {
      const apiURL = baseUrl + 'orders';
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getOrderDetails(orderId: any) {
    return new Promise((resolve, reject) => {
      const apiURL = baseUrl + 'orders/' + orderId;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getTotalAmount(items) {
    if(items) {
      return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
    return 0;
  }

  changeStatus(req: any) {
    return new Promise((resolve, reject) => {
      const apiURL = baseUrl + 'orders/' + req.id;
      this.httpClient.put(apiURL, req)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }
}
