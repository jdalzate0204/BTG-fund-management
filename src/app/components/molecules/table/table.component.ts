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
  @Input() columns: string[] = [];
  @Input() founds: FoundsUI[] = [];
  @Output() handleSuscribe = new EventEmitter<any>();
  @Output() handleCancel = new EventEmitter<any>();
  isMobile: boolean = false;

  ngOnInit(): void {
    this.checkMobile();
  }

  onSuscribe(data: FoundsUI) {
    this.handleSuscribe.emit(data);
  }

  onCancel(data: FoundsUI) {
    this.handleCancel.emit(data);
  }

  private checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }
}
