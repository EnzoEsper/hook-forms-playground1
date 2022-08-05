const idps = [
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
];

const fixed = [
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
    longitudMaxima: 999999,
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
      validations = [
        ...validations,
        {
          type: "max",
          params: [
            instruction.longitudMaxima,
            `${instruction.nombre} debe tener una logitud maxima de ${instruction.longitudMaxima}`,
          ],
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
      default:
        validationType = "string";
        break;
    }

    return {
      id: instruction.tag,
      label: instruction.nombre,
      placeholder: `Inserte ${instruction.nombre}`,
      type: "text",
      validationType: validationType,
      value: "",
      validations: validations,
    };
  });

  return fd;
};

export const formData = generateFormData([...fixed, ...idps]);
