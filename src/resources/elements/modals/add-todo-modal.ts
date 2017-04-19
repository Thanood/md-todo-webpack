import { MdModal } from 'aurelia-materialize-bridge';
import { DOM } from "aurelia-pal";
import { inject } from "aurelia-framework";

@inject(Element)
export class AddTodoModal {
  input: Element;
  keepOpen = false;
  modal: MdModal;
  newTodo = {
    done: false,
    title: ''
  }

  constructor(private element: Element) { }

  onReady($event) {
    const nativeInput = this.input.querySelector('input');
    nativeInput.focus();
    nativeInput.nextElementSibling.classList.add('active');
  }

  open() {
    this.modal.open();
  }

  saveTodo() {
    const event = DOM.createCustomEvent('todo-added', {
      bubbles: true,
      detail: {...this.newTodo}
    });
    this.element.dispatchEvent(event);
    this.newTodo.title = '';
    if (!this.keepOpen) {
      this.modal.close();
    }
  }
}
