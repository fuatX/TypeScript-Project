"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Xaomi 5se", "Telefon", 1000), new Product_1.Product(2, "Xaomi 6se", "Telefon", 2000), new Product_1.Product(3, "Xaomi 7se", "Telefon", 3000), new Product_1.Product(4, "Xaomi 8se", "Telefon", 4000));
    }
    SimpleDataSource.prototype.getProducs = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
