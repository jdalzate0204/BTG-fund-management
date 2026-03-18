import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NumberFormatPipe } from '../../../pipes/number-format-pipe';
import { FoundsUI } from '../../../interfaces/founds-response';
import { ImageComponent } from '../../atoms/image/image.component';

@Component({
  selector: 'btg-table',
  imports: [NumberFormatPipe, ImageComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  /**
   * Column headers for the table
   */
  @Input() columns: string[] = [];
  /**
   * List of funds to display in the table
   */
  @Input() founds: FoundsUI[] = [];
  /**
   * Event emitter for subscribing to a fund
   */
  @Output() handleSuscribe = new EventEmitter<any>();
  /**
   * Event emitter for cancelling a subscription
   */
  @Output() handleCancel = new EventEmitter<any>();
  /**
   * Flag indicating if the viewport is mobile
   */
  isMobile: boolean = false;

  /**
   * OnInit lifecycle hook
   * Checks initial mobile status
   * @return void
   */
  ngOnInit(): void {
    this.checkMobile();
  }

  /**
   * Emit subscribe event
   * @param data FoundsUI object representing the fund
   * @return void
   */
  onSuscribe(data: FoundsUI) {
    this.handleSuscribe.emit(data);
  }

  /**
   * Emit cancel event
   * @param data FoundsUI object representing the fund
   * @return void
   */
  onCancel(data: FoundsUI) {
    this.handleCancel.emit(data);
  }

  /**
   * Check if the screen width is mobile
   * Sets isMobile to true if width <= 768px
   * @return void
   */
  private checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  /**
   * Handle window resize
   * Updates mobile status when the viewport size changes
   * @return void
   */
  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }
}
