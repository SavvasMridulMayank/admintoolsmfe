import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements } from '@savvaslearning/cel-components/dist-stencil/loader';

defineCustomElements();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
