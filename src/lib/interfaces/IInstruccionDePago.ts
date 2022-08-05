import { IInstruccionDePagoFecha } from "./IInstruccionDePagoFecha";
import { IInstruccionDePagoNumero } from "./IInstruccionDePagoNumero";
import { IInstruccionDePagoTabla } from "./IInstruccionDePagoTabla";
import { IInstruccionDePagoTexto } from "./IInstruccionDePagoTexto";

// export type IInstruccionDePago =
//   | IInstruccionDePagoNumero
//   | IInstruccionDePagoTexto
//   | IInstruccionDePagoTabla
//   | IInstruccionDePagoFecha;

export interface IInstruccionDePago {
  [key: string]: string;
}
