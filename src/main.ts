import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Greetings } from './app/greetings/greetings';
import { UserListManager } from './app/user-list-manager/user-list-manager';
import { ApiIntegration } from './app/api-integration/api-integration';
import { LearningReactiveForms } from './app/learning-reactive-forms/learning-reactive-forms';

bootstrapApplication(LearningReactiveForms, appConfig).catch((err) => console.error(err));
