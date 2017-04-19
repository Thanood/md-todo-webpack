import { autoinject } from "aurelia-framework";
import { RouterConfiguration, Router } from "aurelia-router";
import { I18N } from 'aurelia-i18n';

@autoinject()
export class App {
  router: Router;

  constructor(private i18n: I18N) { }
  
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Todos';
    config.map([
      { route: '', redirect: 'all' },
      { route: 'all', name: 'all', moduleId: 'views/todo-list', title: this.i18n.tr('nav.all'), nav: true }
    ]);
  }
}
