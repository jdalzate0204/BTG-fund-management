import { Component, Input } from '@angular/core';

@Component({
  selector: 'btg-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  /**
   * Image source URL
   */
  @Input() src!: string;
  /**
   * Image alternative text
   */
  @Input() alt: string = 'Imagen referente a BTG';
  /**
   * Image title attribute
   */
  @Input() title: string = 'Imagen BTG';
  /**
   * Image loading strategy
   */
  @Input() loading?: 'lazy' | 'eager';
}
