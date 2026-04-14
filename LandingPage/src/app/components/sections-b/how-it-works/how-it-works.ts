import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrls: ['./how-it-works.css']
})
export class HowItWorksComponent {
  steps = [
    {
      number: '1',
      title: 'Describe lo que necesitas',
      description: 'Escribe tu solicitud en lenguaje natural: un regalo, un outfit, un producto técnico. Sin formularios complicados.'
    },
    {
      number: '2',
      title: 'Un shopper acepta tu solicitud',
      description: 'En minutos, un personal shopper verificado toma tu caso y empieza a trabajar en tus recomendaciones.'
    },
    {
      number: '3',
      title: 'Recibe recomendaciones curadas',
      description: 'Opciones personalizadas basadas en tus preferencias, presupuesto y necesidades. Con chat en tiempo real para ajustar.'
    },
    {
      number: '4',
      title: 'Elige o delega la compra',
      description: 'Decides tú, o dejas que el shopper finalice la compra por ti. Control total, sin esfuerzo.'
    }
  ];
}