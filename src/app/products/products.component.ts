import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  skip,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  setting = { skip: 0, limit: 12 };
  settings$ = new BehaviorSubject(this.setting);
  productService = inject(ProductService);
  isDisabled = false;
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  products$: Observable<Product[]> = this.settings$.pipe(
    // {0,12}, {12,1é}, {12,24} ...
    concatMap((setting) => this.productService.getProducts(setting)),
    // ApiResponse1, ApiResponse2, ApiResponse3
    map((productApiResponse) => productApiResponse.products),
    // [products]
    takeWhile((products) => {
      if (!products.length) {
        this.isDisabled = true;
        return false;
      }
      return true;
    }),
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );

  // [oldProducts, newProducts]
  constructor() {}

  moreProducts() {
    this.setting = {
      ...this.setting,
      skip: this.setting.skip + this.setting.limit,
    };
    this.settings$.next(this.setting);
  }
}
