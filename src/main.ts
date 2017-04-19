import {Aurelia} from 'aurelia-framework'
import {PLATFORM} from 'aurelia-pal';
import {I18N, Backend} from 'aurelia-i18n';
import environment from './environment';
import 'materialize-css';
import 'aurelia-materialize-bridge';

//Configure Bluebird Promises.
// (<any>Promise).config({
//   warnings: {
//     wForgottenReturn: false
//   }
// });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  // if (environment.testing) {
  //   aurelia.use.plugin('aurelia-testing');
  // }

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-i18n'), (instance) => {
      instance.i18next.use(Backend.with(aurelia.loader));

      return instance.setup({
        backend: {
          loadPath: '../locales/{{lng}}/{{ns}}.json',
        },
        lng : 'de',
        attributes : ['t','i18n'],
        fallbackLng : 'en',
        debug : false
      });
    });
  
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
