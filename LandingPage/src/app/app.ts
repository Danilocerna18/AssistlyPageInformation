import { Component } from '@angular/core';
import { CtaComponent } from './components/shared/cta/cta';
import { VisionComponent } from './components/sections-b/vision/vision';
import { ValuePropComponent } from './components/sections-b/value-prop/value-prop';
import { FooterComponent } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CtaComponent,
    VisionComponent,
    ValuePropComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}