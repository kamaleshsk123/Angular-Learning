import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LearningPipes } from './app/learning-pipes/learning-pipes';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
