import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./attributes/md-auto-focus'),
    PLATFORM.moduleName('./elements/nav-bar'),
    PLATFORM.moduleName('./resources/elements/modals/add-todo-modal')
  ]);
}
