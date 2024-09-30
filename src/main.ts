import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './shared/app/app.config';
import { AppComponent } from './shared/app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
