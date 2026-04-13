import { Component } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar';
import { FooterComponent } from './components/shared/footer/footer';
import { CtaComponent } from './components/shared/cta/cta';
import { VisionComponent } from './components/sections-b/vision/vision';
import { HeroComponent } from './components/sections-a/hero/hero';
import { ValuePropComponent } from './components/sections-b/value-prop/value-prop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CtaComponent,
    VisionComponent,
    ValuePropComponent,
    HeroComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}