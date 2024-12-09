export class Product {
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  description: string;
  stockQuantity: number;
  categoryId: number;
  createdBy: string;
  category: 'skin' | 'immunity' | 'digestion' | 'body' | 'hair';
  
}

