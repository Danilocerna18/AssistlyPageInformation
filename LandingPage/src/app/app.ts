import { Component } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar';
import { FooterComponent } from './components/shared/footer/footer';
import { CtaComponent } from './components/shared/cta/cta';
import { VisionComponent } from './components/sections-b/vision/vision';
import { HeroComponent } from './components/sections-a/hero/hero';
import { SolutionComponent } from './components/sections-a/solution/solution';
import { HowItWorksComponent } from './components/sections-b/how-it-works/how-it-works';
import { ValuePropComponent } from './components/sections-b/value-prop/value-prop';
import { ProblemComponent } from './components/sections-a/problem/problem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CtaComponent,
    HowItWorksComponent,
    VisionComponent,
    ValuePropComponent,
    HeroComponent,
    SolutionComponent,
    ProblemComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}