"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts(); // all of them
result = _productService.getById(2); // id number 2
//but we need the write tsc app.ts again!
var p = new Product_1.Product();
p.name = "Iphone 9";
p.price = 24000;
p.category = "Phone";
// _productService.saveProduct(p);
_productService.deleteProduct(result); // it will delete 2
result = _productService.getProducts();
console.log(result);
//tsc app.ts
