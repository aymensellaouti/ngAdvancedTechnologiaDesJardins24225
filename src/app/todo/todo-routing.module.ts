import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { APP_ROUTES } from "src/config/routes.config";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ])],
    exports: [RouterModule]
})
export class TodoRoutingModule {}
