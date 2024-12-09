import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // Add product to the cart
  addToCart(product: Product) {
    if (product && product.productId) {  // Check if product is valid
      this.cartService.addToCart(product);
      alert(`${product.productName} added to cart!`);
    } else {
      console.error('Invalid product:', product); // Log if the product is invalid
    }
  }
  

  // Buy product immediately and proceed to payment
  buyNow(product: Product) {
    // Check if the product is in stock
    if (product.stockQuantity > 0) {
      this.cartService.addToCart(product);
      // Navigate to the payment page
      this.router.navigate(['/payment']);
    } else {
      alert(`${product.productName} is out of stock.`);
    }
  }
}
