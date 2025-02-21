import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo/todo.component";


@NgModule({
  declarations: [TodoComponent],
  imports: [
    FormsModule,
    CommonModule,
    TodoRoutingModule,
  ],
  exports: [],
  providers: [],
})
export class TodoModule {}



