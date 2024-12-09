import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   // Example static product data, can be replaced with API calls
   // Mock list of products
  public products: Product[] = [
        { productId: 1,productName: 'Organic Alovera Gel with Turmiric Extract',productImage: 'https://files.organicharvest.in/site-images/800x800/AT1_2.png',price: 199,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId:2, createdBy: 'Admin',category:'skin'},
        { productId: 2, productName: 'Sunscreen-Oily Skin SPF 60 100gm',  productImage: 'https://files.organicharvest.in/site-images/800x800/1-9at.jpg',price: 200,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId:2, createdBy: 'Admin',category:'skin'},
        { productId: 3, productName: 'Himalaya Triphala Tablets 100gm',  productImage: 'https://images.apollo247.in/pub/media/catalog/product/H/I/HIM0151_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',price: 310,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId:3, createdBy: 'Admin',category:'body' },
        { productId: 4, productName: 'Anti-Skin Tan Remover 100gm',  productImage: 'https://files.organicharvest.in/site-images/800x800/Anti-tan-scrub_6.jpg',price: 240,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 2,categoryId:3 , createdBy: 'Admin',category:'body'},
        { productId: 5, productName: 'Himalya Bhami for Mind Wellness',  productImage: 'https://images.apollo247.in/pub/media/catalog/product/b/r/bra0023_1-jan24_1_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',price: 50,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId:1 , createdBy: 'Admin',category:'hair' },
        { productId: 6, productName: 'OH Coconut Oil Comb Applicator', productImage: 'https://files.organicharvest.in/site-images/800x800/1-25CCOC.jpg', price: 600,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 31,categoryId:4 , createdBy: 'Admin',category:'immunity'},
        { productId: 7, productName: 'Organic Youthful Glow Face Serum',  productImage: 'https://files.organicharvest.in/site-images/800x800/1-23dr_2.jpg',price: 370,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId:2, createdBy: 'Admin',category:'skin' },
        { productId: 8, productName: 'Youthful Glow Face Cleanser - 100ml',  productImage: 'https://files.organicharvest.in/site-images/800x800/8906080039171-Organic-Face-Cleanser-Vitamin-A---100ml-5.jpg',price: 230,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId:4 , createdBy: 'Admin',category:'digestion'},
        { productId: 9, productName: 'Naveda Join Support & Calcium  Combo', productImage: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSfRNlu2mo3-anafImj-TBqs3AOrZGzHKQ76XZRJoNMX9yUt_jKfktIgIXVKCis8MoEmRRujBdgDI3n-7J61z_HLIuaXuDDWYo6CqDonlNTkyDYA7bHtncU&usqp=CAE',price: 500,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 30,categoryId: 2, createdBy: 'Admin',category:'skin'},
        { productId: 10, productName: 'Product 10                 ',  productImage: 'https://www.botanichearth.in/cdn/shop/files/81ZYH18t-2L._SL1500.jpg?v=1716451155',price: 500,description:'Natural oil enriched with Amla for hair growth.', stockQuantity: 3,categoryId:2 , createdBy: 'Admin',category:'skin'}
    
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getAllProducts(): Observable<Product[]> {
    return of(this.products);  // Return the product data as an observable
  }
}
