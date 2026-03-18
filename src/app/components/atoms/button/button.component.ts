import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btg-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  /**
   * Button label text
   */
  @Input() textButton!: string;
  /**
   * Click event emitter
   */
  @Output() handleClick = new EventEmitter<any>();

  /**
   * Emit click event
   * Emits the handleClick event when the button is clicked
   * @return void
   */
  onClick() {
    this.handleClick.emit();
  }
}
