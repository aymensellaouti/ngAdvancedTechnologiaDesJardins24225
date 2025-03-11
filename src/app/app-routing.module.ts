import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";

import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { TestObservableComponent } from "./rxjs/test-observable/test-observable.component";
import { SliderComponent } from "./rxjs/slider/slider.component";
import { ProductsComponent } from "./products/products.component";

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'rh', component: RhComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'word', component: MiniWordComponent },
      { path: 'rxjs', component: TestObservableComponent },
      { path: 'slider', component: SliderComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'color', component: ColorComponent }],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {enableTracing: true}
  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
