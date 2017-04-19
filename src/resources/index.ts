import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './attributes/md-auto-focus',
    './elements/nav-bar',
    './elements/modals/add-todo-modal'
  ]);
}
