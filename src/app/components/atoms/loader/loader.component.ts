import { Component } from '@angular/core';

@Component({
  selector: 'btg-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  imgLoader: string = 'graphics/ajax-loader.gif';
}
