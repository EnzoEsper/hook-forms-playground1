export const idps = [
  {
    orden: 1,
    tipoDato: "NUMERO",
    tag: "NDV",
    nombre: "Numero de MEP",
    longitudMaxima: 11,
    longitudMinima: 1,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
  {
    orden: 2,
    tipoDato: "TEXTO",
    tag: "TXT",
    nombre: "Observaciones",
    longitudMaxima: 100,
    longitudMinima: 1,
    valorMaximo: null,
    valorMinimo: null,
    requerido: false,
  },
  {
    orden: 3,
    tipoDato: "TABLA",
    tag: "T54",
    nombre: "Motivo de la Devolucion",
    longitudMaxima: 2,
    longitudMinima: 2,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
    tabla: {
      id: "054",
      nombre: "Devolucion de Transferencias",
      contenidos: [
        {
          codigo: "01",
          contenido: "Cuenta inexistente / cerrada / en tramite de cierre",
        },
        {
          codigo: "02",
          contenido: "Cuenta bloqueada / inmovilizada",
        },
        {
          codigo: "03",
          contenido: "Cliente Inexistente",
        },
        {
          codigo: "04",
          contenido: "A Solicitud del beneficiario",
        },
        {
          codigo: "05",
          contenido: "A Solicitud de la Entidad Emisora",
        },
        {
          codigo: "06",
          contenido: "Moneda Distinta a la Cuenta del Credito",
        },
        {
          codigo: "07",
          contenido: "Transferencia Duplicada",
        },
        {
          codigo: "08",
          contenido: "No coincide CUIT/CUIL/CDI con el del CBU",
        },
        {
          codigo: "09",
          contenido: "No coincide con comprobantes recibidos / Falta respaldo de documentacion",
        },
        {
          codigo: "10",
          contenido: "Falta instruction de pago",
        },
        {
          codigo: "11",
          contenido: "Falta algun dato / Imposibilidad de Cumplimiento (se especifica en observaciones)",
        },
      ],
    },
  },
  {
    orden: 4,
    tipoDato: "FECHA_VARIABLE",
    tag: "FDV",
    nombre: "Fecha Original de MEP",
    longitudMaxima: 8,
    longitudMinima: 8,
    valorMaximo: 0,
    valorMinimo: -365,
    requerido: true,
  },
];

export const fixed = [
  {
    orden: 1000,
    tipoDato: "TEXTO",
    tag: "CodigoOperatoria",
    nombre: "Codigo Operatoria",
    longitudMaxima: null,
    longitudMinima: null,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
  {
    orden: 1001,
    tipoDato: "NUMERO",
    tag: "Importe",
    nombre: "Importe",
    longitudMaxima: 5,
    longitudMinima: 1,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
  {
    orden: 1002,
    tipoDato: "TEXTO",
    tag: "CodigoEntidadDeudora",
    nombre: "Entidad Deudora",
    longitudMaxima: null,
    longitudMinima: null,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
  {
    orden: 1003,
    tipoDato: "TEXTO",
    tag: "CodigoCuentaDeudora",
    nombre: "Codigo Cuenta Deudora",
    longitudMaxima: null,
    longitudMinima: null,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
  {
    orden: 1004,
    tipoDato: "TEXTO",
    tag: "CodigoEntidadAcreedora",
    nombre: "Entidad Acreedora",
    longitudMaxima: null,
    longitudMinima: null,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
  {
    orden: 1005,
    tipoDato: "TEXTO",
    tag: "CodigoCuentaAcreedora",
    nombre: "Codigo Cuenta Acreedora",
    longitudMaxima: null,
    longitudMinima: null,
    valorMaximo: null,
    valorMinimo: null,
    requerido: true,
  },
];

export const formData2 = [
  {
    id: "NDV",
    label: "Numero de MEP",
    placeholder: "Inserte Numero de MEP",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "min",
        params: [1, "Numero de MEP debe tener una logitud minima de 1"],
      },
      {
        type: "max",
        params: [11, "Numero de MEP debe tener una logitud maxima de 11"],
      },
      {
        type: "required",
        params: ["Numero de MEP es requerido"],
      },
    ],
  },
  {
    id: "NDV",
    label: "Numero de MEP",
    placeholder: "Inserte Numero de MEP",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "min",
        params: [1, "Numero de MEP debe tener una logitud minima de 1"],
      },
      {
        type: "max",
        params: [11, "Numero de MEP debe tener una logitud maxima de 11"],
      },
      {
        type: "required",
        params: ["Numero de MEP es requerido"],
      },
    ],
  },
];

export const formData3 = [
  {
    id: "NDV",
    label: "Numero de MEP",
    placeholder: "Inserte Numero de MEP",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "min",
        params: [1, "Numero de MEP debe tener una logitud minima de 1"],
      },
      {
        type: "max",
        params: [11, "Numero de MEP debe tener una logitud maxima de 11"],
      },
      {
        type: "required",
        params: ["Numero de MEP es requerido"],
      },
    ],
  },
  {
    id: "TXT",
    label: "Observaciones",
    placeholder: "Inserte Observaciones",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "min",
        params: [1, "Observaciones debe tener una logitud minima de 1"],
      },
      {
        type: "max",
        params: [100, "Observaciones debe tener una logitud maxima de 100"],
      },
    ],
  },
];

const generateFormData = (instructions) => {
  let fd = instructions.map((instruction) => {
    let validationType;
    let validations = [];

    if (instruction.longitudMinima) {
      // let longitudMinima =
      //   instruction.tipoDato === "NUMERO" ? Math.pow(10, instruction.longitudMinima) - 1 : instruction.longitudMinima;
      validations = [
        ...validations,
        {
          type: "min",
          params: [
            instruction.longitudMinima,
            `${instruction.nombre} debe tener una logitud minima de ${instruction.longitudMinima}`,
          ],
        },
      ];
    }

    if (instruction.longitudMaxima) {
      let longitudMaxima =
        instruction.tipoDato === "NUMERO" ? Math.pow(10, instruction.longitudMaxima) - 1 : instruction.longitudMaxima;
      validations = [
        ...validations,
        {
          type: "max",
          params: [longitudMaxima, `${instruction.nombre} debe tener una logitud maxima de ${longitudMaxima}`],
        },
      ];
    }

    if (instruction.requerido) {
      validations = [
        ...validations,
        {
          type: "required",
          params: [`${instruction.nombre} es requerido`],
        },
      ];
    }

    switch (instruction.tipoDato) {
      case "TEXTO":
        validationType = "string";
        break;
      case "NUMERO":
        validationType = "number";
        break;
      case "TABLA":
        validationType = "string";
        break;
      case "FECHA_VARIABLE":
        validations = [
          {
            type: "required",
            params: [`${instruction.nombre} es requerido`],
          },
        ];
        validationType = "string";
        break;
      default:
        validationType = "string";
        break;
    }

    return {
      id: instruction.tag,
      label: instruction.nombre,
      placeholder: `Inserte ${instruction.nombre}`,
      // type: "text",
      dataType: instruction.tipoDato,
      validationType: validationType,
      value: "",
      validations: validations,
    };
  });

  return fd;
};

export const formData = generateFormData([...fixed, ...idps]);
