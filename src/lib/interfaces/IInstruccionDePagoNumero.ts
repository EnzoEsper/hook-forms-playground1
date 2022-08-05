export interface IInstruccionDePagoNumero {
  orden: number;
  tipoDato: "NUMERO";
  tag: "NDV";
  nombre: string;
  longitudMaxima: number;
  longitudMinima: number;
  valorMaximo: null;
  valorMinimo: null;
  requerido: boolean;
}
