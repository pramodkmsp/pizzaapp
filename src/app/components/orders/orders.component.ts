import {
  Component,
  OnInit
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Orders
} from 'src/app/interface/orders';
import {
  DataService
} from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {}

  orderedData: Orders[];
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.dataService.getOrders().then((data: any) => {
      this.orderedData = data;
    });
  }

  getTotalAmount(items: any) {
    return this.dataService.getTotalAmount(items);
  }

  changeStatus(order: any) {
    const req = {
      ...order,
      status: order.status === 'Order Received' ? 'Preparing' : order.status === 'Preparing' ? 'Ready to serve' : order.status
    };
    this.dataService.changeStatus(req).then((data: any) => {
      if (data) {
        this.snackBar.open('Order status changed successfully', '', {
          duration: 2000,
        });
        this.getOrders();
      }
    });
  }
}
