import { trigger, animate, style, query, transition, sequence } from '@angular/animations';

export const fadeInTransition = trigger('show', [
  transition(':enter', [
    query('.field', [
      sequence([
        style({
          opacity: 0,
          transform: 'translateX(-50px)',
          'max-height': '0px',
          height: 'auto',
          'max-width': '0px',
          width: 'auto',
          overflow: 'hidden'
        }),
        animate('200ms ease-out', style({ 'max-height': '600px', 'max-width': '600px' })),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ], { optional: true })
  ]),
  transition(':leave', [
    query('.field', [
      sequence([
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(50px)' })),
        style({ 'max-height': '400px', height: 'auto', 'max-width': '600px', width: 'auto', overflow: 'hidden' }),
        animate('200ms ease-out', style({ 'max-height': 0, 'max-width': 0 }))
      ])
    ], { optional: true })
  ]),
]);

