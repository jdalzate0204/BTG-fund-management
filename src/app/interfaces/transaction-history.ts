export interface Transaction {
  id: number;
  fondo: string;
  tipo: 'suscripción' | 'cancelación';
  monto: number;
  metodo?: 'email' | 'sms';
  fecha: Date;
}
