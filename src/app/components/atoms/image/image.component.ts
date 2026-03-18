import { Component, Input } from '@angular/core';

@Component({
  selector: 'btg-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() src!: string;
  @Input() alt: string = 'Imagen referente a BTG';
  @Input() title: string = 'Imagen BTG';
  @Input() loading?: 'lazy' | 'eager';
}
