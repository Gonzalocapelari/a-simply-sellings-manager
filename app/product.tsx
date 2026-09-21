export class ProductClass {
  id: number;
  name: string;
  description: string;
  price: number;
  costPrice: number;
  stock: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    costPrice: number,
    stock: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.costPrice = costPrice;
    this.stock = stock;
  }

  sell(quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

  }}