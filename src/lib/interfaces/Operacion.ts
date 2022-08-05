import { IdCuenta } from "./IdCuenta";
import { IInstruccionDePago } from "./IInstruccionDePago";

export interface Operacion {
  codigoOperatoria: string;
  importe: number;
  idCuentaDeudora: IdCuenta;
  idCuentaAcreedora: IdCuenta;
  instruccionDePago: any;
}
