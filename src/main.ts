import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Parent } from './app/parent/parent';

bootstrapApplication(Parent, appConfig).catch((err) => console.error(err));
