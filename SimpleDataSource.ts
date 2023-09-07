import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Xaomi 5se", "Telefon", 1000),
      new Product(2, "Xaomi 6se", "Telefon", 2000),
      new Product(3, "Xaomi 7se", "Telefon", 3000),
      new Product(4, "Xaomi 8se", "Telefon", 4000)
    );
  }
  getProducs(): Product[] {
    return this.products;
  }
}
