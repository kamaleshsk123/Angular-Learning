import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Parent } from './app/parent/parent';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(Parent, config, context);

export default bootstrap;
