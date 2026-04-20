import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: '📋',
      title: 'Solicitudes personalizadas',
      description: 'Crea peticiones detalladas con contexto, budget y preferencias.'
    },
    {
      icon: '🤝',
      title: 'Matching con shoppers',
      description: 'Algoritmo que conecta tu solicitud con el shopper más adecuado.'
    },
    {
      icon: '✨',
      title: 'Recomendaciones curadas',
      description: 'Opciones seleccionadas a mano, no listas genéricas de algoritmo.'
    },
    {
      icon: '💬',
      title: 'Chat en tiempo real',
      description: 'Ajusta, pregunta y decide con tu shopper en la misma conversación.'
    },
    {
      icon: '🛒',
      title: 'Delegación de compra',
      description: 'El shopper puede completar la transacción directamente por ti.'
    },
    {
      icon: '⭐',
      title: 'Sistema de calificaciones',
      description: 'Evalúa cada experiencia y mejora el ecosistema de shoppers.'
    }
  ];
}