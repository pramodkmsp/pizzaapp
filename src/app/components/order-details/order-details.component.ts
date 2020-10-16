import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orderId: any;
  orderDetails: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
      this.route.paramMap.subscribe(params => {
        this.orderId = this.route.snapshot.paramMap.get('id');
        console.log(this.orderId);
        this.getOrderDetails();
      });
    }

  ngOnInit(): void {
  }

  getOrderDetails() {
    this.dataService.getOrderDetails(this.orderId).then((data: any) => {
      this.orderDetails = data;
    });
  }

  getTotalAmount(items: any) {
    return this.dataService.getTotalAmount(items)
  }
}
