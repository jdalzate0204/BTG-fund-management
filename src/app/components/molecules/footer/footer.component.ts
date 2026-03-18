import { Component } from '@angular/core';
import { ImageComponent } from '../../atoms/image/image.component';

@Component({
  selector: 'btg-footer',
  imports: [ImageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  btgLogo: string = 'graphics/btg-logo-white.svg';
}
