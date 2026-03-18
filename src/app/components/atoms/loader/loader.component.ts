import { Component } from '@angular/core';

@Component({
  selector: 'btg-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  /**
   * Loader image path
   */
  imgLoader: string = 'graphics/ajax-loader.gif';
}
