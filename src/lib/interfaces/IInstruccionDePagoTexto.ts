export interface IInstruccionDePagoTexto {
  orden: number;
  tipoDato: "TEXTO";
  tag: "TXT";
  nombre: string;
  longitudMaxima: number;
  longitudMinima: number;
  valorMaximo: null;
  valorMinimo: null;
  requerido: boolean;
}
