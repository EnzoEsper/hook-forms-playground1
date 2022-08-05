export interface IInstruccionDePagoFecha {
  orden: number;
  tipoDato: "FECHA_VARIABLE";
  tag: "FDV";
  nombre: string;
  longitudMaxima: number;
  longitudMinima: number;
  valorMaximo: number;
  valorMinimo: number;
  requerido: boolean;
}
