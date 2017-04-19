import { autoinject, TaskQueue } from 'aurelia-framework';
import { AddTodoModal } from "../resources/elements/modals/add-todo-modal";
import { Todo } from "../models/todo";

@autoinject()
export class TodoList {
  addTodoModal: AddTodoModal;
  tapTarget: any;
  todos: Todo[] = [];

  constructor(private taskQueue: TaskQueue) { }

  attached() {
    this.taskQueue.queueTask(() => {
      this.tapTarget.open();
    });
  }

  addTodo() {
    this.addTodoModal.open();
  }

  saveTodo(todo: Todo) {
    console.log('saveTodo', todo);
    this.todos.push(todo);
  }
}
