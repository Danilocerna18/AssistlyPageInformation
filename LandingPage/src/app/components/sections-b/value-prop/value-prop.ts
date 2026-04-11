import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-value-prop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-prop.html',
  styleUrls: ['./value-prop.css']
})
export class ValuePropComponent {
  values = [
    {
      title: 'Reduce tiempo de búsqueda',
      description: 'De horas a minutos. Tu tiempo vale más que una búsqueda interminable.'
    },
    {
      title: 'Mejora la toma de decisiones',
      description: 'Con contexto experto y opciones curadas, decides con confianza.'
    },
    {
      title: 'Experiencia completamente personal',
      description: 'No eres un usuario anónimo. Eres una persona con un shopper dedicado.'
    },
    {
      title: 'Marketplace escalable',
      description: 'Red de shoppers verificados que crece con la demanda, sin perder calidad.'
    },
    {
      title: 'Tecnología + asesoría humana',
      description: 'Lo mejor de ambos mundos: velocidad de la tecnología, calidez del trato humano.'
    },
    {
      title: 'Modelo disruptivo',
      description: 'No optimiza el e-commerce existente. Lo repiensa desde cero.'
    }
  ];
}