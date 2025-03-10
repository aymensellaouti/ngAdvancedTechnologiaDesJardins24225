import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from './week-todo/week-todo.component';


@NgModule({
  declarations: [TodoComponent, WeekTodoComponent],
  imports: [
    FormsModule,
    CommonModule,
    TodoRoutingModule,
  ],
  exports: [WeekTodoComponent],
  providers: [],
})
export class TodoModule {}



