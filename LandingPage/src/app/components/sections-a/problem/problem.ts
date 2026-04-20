 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem.html',
  styleUrls: ['./problem.css']
})
export class ProblemComponent {
  problems = [
    {
      icon: '🔍',
      title: 'Demasiadas opciones',
      description: 'Millones de productos sin filtro real. Horas buscando sin llegar a una decisión clara.'
    },
    {
      icon: '⏱',
      title: 'Falta de tiempo',
      description: 'El tiempo es el recurso más valioso. Nadie debería gastarlo comparando especificaciones.'
    },
    {
      icon: '🤔',
      title: 'Decisiones difíciles',
      description: 'Sin contexto personal ni asesoría, cualquier compra se convierte en una apuesta.'
    },
    {
      icon: '😰',
      title: 'Estrés de compra',
      description: 'El e-commerce prometió facilidad, pero entregó abrumamiento. Eso tiene que cambiar.'
    }
  ];
}