interface ContenidoTabla {
  codigo: string;
  contenido: string;
}

export interface IInstruccionDePagoTabla {
  orden: number;
  tipoDato: "TABLA";
  tag: "TCD";
  nombre: string;
  longitudMaxima: number;
  longitudMinima: number;
  valorMaximo: null;
  valorMinimo: null;
  requerido: boolean;
  tabla: {
    id: string;
    nombre: string;
    contenidos: ContenidoTabla[];
  };
}
