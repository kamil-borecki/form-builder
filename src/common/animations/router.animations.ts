import { trigger, animate, style, query, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter',
      style({
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transform: 'translateY(100%)'
      }),
      { optional: true }),
    query(':leave',
      animate('500ms ease',
        style({
          position: 'absolute',
          width: '100%',
          transform: 'translateY(100%)',
          opacity: 0
        })
      ),
      { optional: true }),
    query(':enter',
      animate('500ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0%)'
        })
      ),
      { optional: true }),
  ])
]);

