import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Greetings } from './app/greetings/greetings';
import { UserListManager } from './app/user-list-manager/user-list-manager';
import { ApiIntegration } from './app/api-integration/api-integration';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
