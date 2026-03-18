import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../molecules/table/table.component';
import { FoundsUI } from '../../../interfaces/founds-response';
import { FoundsService } from '../../../services/founds.service';
import { BalanceService } from '../../../services/balance.service';
import { TransactionService } from '../../../services/transaction.service';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ModalTransactionHistoryComponent } from '../../molecules/modal-transaction-history/modal-transaction-history.component';

@Component({
  selector: 'btg-funds-inquiry-template',
  imports: [TableComponent, ButtonComponent, ModalTransactionHistoryComponent],
  templateUrl: './funds-inquiry-template.component.html',
  styleUrl: './funds-inquiry-template.component.scss',
})
export class FundsInquiryTemplateComponent implements OnInit {
  columnsTable: string[] = ['Nombre', 'Monto mímimo', 'Categoría', 'Estado', 'Suscribir', 'Cancelar'];
  foundsTable: FoundsUI[] = [];
  isOpenHistory: boolean = false;

  constructor(
    private foundsService: FoundsService,
    private balanceService: BalanceService,
    private transactionService: TransactionService,
  ) {}

  ngOnInit(): void {
    this.foundsService.getFounds().subscribe((resp) => {
      this.foundsTable = resp.map((data) => ({
        ...data,
        suscrito: false,
      }));
    });
  }

  onSuscribe(found: FoundsUI) {
    if (this.balanceService.currentBalance < found.montoMinimo) {
      alert(
        'Tu saldo actual no es suficiente para suscribirte al fondo ' +
          found.nombre +
          ', por favor gestiona tu saldo y vuelve a intentarlo.',
      );
      return;
    }

    const notification = confirm(
      '¿Cómo deseas recibir la notificación de tu suscripción?\n\nAceptar = Email\nCancelar = SMS',
    );

    const method = notification ? 'email' : 'sms';

    if (notification) {
      alert('Al correo electrónico registrado se ha envido toda la información de la suscripción realizada.');
    } else {
      alert(
        'Al numero de telefono registrado se ha enviado un mensaje de texto con toda la información de la suscripción realizada.',
      );
    }

    this.foundsTable = this.foundsTable.map((data) => (data.id === found.id ? { ...data, suscrito: true } : data));
    this.balanceService.decreaseBalance(found.montoMinimo);

    this.transactionService.addTransaction({
      fondo: found.nombre,
      tipo: 'suscripción',
      monto: found.montoMinimo,
      metodo: method,
    });
  }

  onCancel(found: FoundsUI) {
    const cancel = confirm(
      'Está apunto de cancelar su suscripción al fondo ' +
        found.nombre +
        ', ¿está seguro de continuar con el proceso?.',
    );

    if (cancel) {
      alert('Se ha cancelado su suscripción al fondo ' + found.nombre + ' exitosamente.');
      this.foundsTable = this.foundsTable.map((data) => (data.id === found.id ? { ...data, suscrito: false } : data));

      this.transactionService.addTransaction({
        fondo: found.nombre,
        tipo: 'cancelación',
        monto: found.montoMinimo,
      });
    } else {
      return;
    }
  }

  openHistory() {
    this.isOpenHistory = true;
  }

  closeHistory() {
    this.isOpenHistory = false;
  }
}
