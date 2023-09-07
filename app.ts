import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getProducts(); // all of them
result = _productService.getById(2); // id number 2
//but we need the write tsc app.ts again!

let p = new Product();

p.name = "Iphone 9";
p.price = 24000;
p.category = "Phone";

// _productService.saveProduct(p);

_productService.deleteProduct(result); // it will delete 2
result = _productService.getProducts();
console.log(result);
//tsc app.ts
