import { AppComponent } from './app/app';
import { config } from './app/app.config.server';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { mergeApplicationConfig } from '@angular/core';

export default () => bootstrapApplication(
  AppComponent,
  mergeApplicationConfig(config, {
    providers: [provideServerRendering()]
  })
);