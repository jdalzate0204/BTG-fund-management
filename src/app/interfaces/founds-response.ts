export interface FoundsResponse {
  id: number;
  nombre: string;
  montoMinimo: number;
  categoria: string;
}

export interface FoundsUI extends FoundsResponse {
  suscrito: boolean;
}
