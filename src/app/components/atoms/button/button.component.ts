import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btg-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textButton!: string;
  @Output() handleClick = new EventEmitter<any>();

  onClick() {
    this.handleClick.emit();
  }
}
