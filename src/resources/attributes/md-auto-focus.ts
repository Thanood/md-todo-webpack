import { autoinject, TaskQueue } from 'aurelia-framework';

@autoinject()
export class MdAutoFocusCustomAttribute {
  element: Element;
  taskQueue: TaskQueue;

  constructor(element: Element, taskQueue: TaskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      var inputs = this.element.getElementsByTagName('input');
      if (inputs.length > 0) {
        let input = inputs[0];
        input.focus();
        let label = input.nextElementSibling;
        if (label.nodeName === "LABEL") {
          this.taskQueue.queueTask(() => { label.classList.add("active"); });
        }
      }
      else {
        console.warn('No input element found for auto-focus');
      }
    });

  }
}

