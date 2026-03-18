import { Component } from '@angular/core';
import { HomeTemplateComponent } from '../../components/templates/home-template/home-template.component';

@Component({
  selector: 'btg-home',
  imports: [HomeTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
