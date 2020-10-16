export interface Orders {
  customerName: string;
  address: string;
  status: string;
  items: [{
    itemName: string;
    price: number;
  }];
}
