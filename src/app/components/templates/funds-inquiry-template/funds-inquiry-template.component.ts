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
  /**
   * Table columns headers
   */
  columnsTable: string[] = ['Nombre', 'Monto mímimo', 'Categoría', 'Estado', 'Suscribir', 'Cancelar'];
  /**
   * Table data for funds
   */
  foundsTable: FoundsUI[] = [];
  /**
   * Flag to indicate if transaction history modal is open
   */
  isOpenHistory: boolean = false;

  /**
   * Constructor
   * @param foundsService Service to fetch fund data
   * @param balanceService Service to manage user balance
   * @param transactionService Service to manage transaction history
   */
  constructor(
    private foundsService: FoundsService,
    private balanceService: BalanceService,
    private transactionService: TransactionService,
  ) {}

  /**
   * OnInit lifecycle hook
   * Fetches funds and initializes the table
   * @return void
   */
  ngOnInit(): void {
    this.foundsService.getFounds().subscribe((resp) => {
      this.foundsTable = resp.map((data) => ({
        ...data,
        suscrito: false,
      }));
    });
  }

  /**
   * Handle subscription to a fund
   * Validates user balance, asks for notification method, updates table and transactions
   * @param found FoundsUI object representing the selected fund
   * @return void
   */
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

  /**
   * Handle cancellation of a fund subscription
   * Confirms cancellation, updates table and transaction history
   * @param found FoundsUI object representing the selected fund
   * @return void
   */
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

  /**
   * Open transaction history modal
   * @return void
   */
  openHistory() {
    this.isOpenHistory = true;
  }

  /**
   * Close transaction history modal
   * @return void
   */
  closeHistory() {
    this.isOpenHistory = false;
  }
}
