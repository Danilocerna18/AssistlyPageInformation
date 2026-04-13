import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.html',
  styleUrls: ['./cta.css']
})
export class CtaComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const popoverElements = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverElements.forEach(el => new bootstrap.Popover(el));
  }
}