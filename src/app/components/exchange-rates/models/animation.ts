import {animate, group, query, style} from '@angular/animations';

export const animationRight = [
  query(':enter, :leave', style({position: 'fixed', width: '200px'}), {optional: true}),
  group([
    query(':enter', [style({transform: 'translateX(200px)'}), animate('.8s ease-out', style({transform: 'translateX(0%)'}))], {
      optional: true,
    }),
    query(':leave', [style({transform: 'translateX(0%)'}), animate('.8s ease-out', style({transform: 'translateX(-200px)'}))], {
      optional: true,
    }),
  ]),
];

export const animationLeft = [
  query(':enter, :leave', style({position: 'fixed', width: '200px'}), {optional: true}),
  group([
    query(':enter', [style({transform: 'translateX(-200px)'}), animate('.8s ease-out', style({transform: 'translateX(0%)'}))], {
      optional: true,
    }),
    query(':leave', [style({transform: 'translateX(0%)'}), animate('.8s ease-out', style({transform: 'translateX(200px)'}))], {
      optional: true,
    }),
  ]),
];
