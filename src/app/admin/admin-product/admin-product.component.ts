import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  standalone: false,
  
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {

  // Dummy product data
  products= [
    { id: 1, name: 'Product A', category: 'Category 1', price: 100 },
    { id: 2, name: 'Product B', category: 'Category 2', price: 200 },
    { id: 3, name: 'Product C', category: 'Category 3', price: 300 },
  ];

  // Add Product
  onAddProduct() {
    const newProduct = { id: this.products.length + 1, name: 'New Product', category: 'New Category', price: 0 };
    this.products.push(newProduct);
  }

  // Edit Product
  onEditProduct(product: any) {
    const updatedName = prompt('Enter new product name:', product.name);
    const updatedCategory = prompt('Enter new product category:', product.category);
    const updatedPrice = prompt('Enter new product price:', product.price.toString());

    if (updatedName && updatedCategory && updatedPrice) {
      product.name = updatedName;
      product.category = updatedCategory;
      product.price = parseFloat(updatedPrice);
    }
  }

  // Delete Product
  onDeleteProduct(productId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.products = this.products.filter(product => product.id !== productId);
    }
  }

}
