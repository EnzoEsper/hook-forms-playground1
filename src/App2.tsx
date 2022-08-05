import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaOf, object, string, number, boolean, array, lazy } from "yup";
import "./App.css";
import { Button, Divider, Grid, TextField, Typography } from "@material-ui/core";
import { Operacion } from "./lib/interfaces/Operacion";

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
];

const operacionSchema: SchemaOf<Operacion> = object().shape({
  codigoOperatoria: string().required("Codigo Operatoria es Requerido"),
  importe: number().required("Importe es Requerido"),
  idCuentaDeudora: object({
    codigoEntidad: string().required(),
    codigoCuenta: string().required(),
  }),
  idCuentaAcreedora: object({
    codigoEntidad: string().required(),
    codigoCuenta: string().required(),
  }),
  instruccionDePago: object({
    dada: string(),
  }),
});

function App() {
  const methods = useForm<Operacion>({
    resolver: yupResolver(operacionSchema),
  });

  const formSubmitHandler: SubmitHandler<Operacion> = (data: Operacion) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Grid container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <Grid item>
              <TextField
                label="Codigo Operatoria"
                variant="outlined"
                error={!!methods.formState.errors.codigoOperatoria}
                helperText={methods.formState.errors.codigoOperatoria?.message ?? ""}
                fullWidth
                {...methods.register("codigoOperatoria")}
              />
            </Grid>
            <br />
            <Grid item>
              <TextField
                label="Importe"
                variant="outlined"
                error={!!methods.formState.errors.importe}
                helperText={methods.formState.errors.importe?.message ?? ""}
                fullWidth
                {...methods.register("importe")}
              />
            </Grid>
            <br />
            <Grid item>
              <TextField
                label="Entidad Acreedora"
                variant="outlined"
                error={!!methods.formState.errors.idCuentaAcreedora?.codigoEntidad}
                helperText={methods.formState.errors.idCuentaAcreedora?.codigoEntidad?.message ?? ""}
                fullWidth
                {...methods.register("idCuentaAcreedora.codigoEntidad")}
              />
            </Grid>
            <br />
            <Grid item>
              <TextField
                label="Cuenta Acreedora"
                variant="outlined"
                error={!!methods.formState.errors.idCuentaAcreedora?.codigoCuenta}
                helperText={methods.formState.errors.idCuentaAcreedora?.codigoCuenta?.message ?? ""}
                fullWidth
                {...methods.register("idCuentaAcreedora.codigoCuenta")}
              />
            </Grid>
            <br />
            <Grid item>
              <TextField
                label="Entidad Deudora"
                variant="outlined"
                error={!!methods.formState.errors.idCuentaDeudora?.codigoEntidad}
                helperText={methods.formState.errors.idCuentaDeudora?.codigoEntidad?.message ?? ""}
                fullWidth
                {...methods.register("idCuentaDeudora.codigoEntidad")}
              />
            </Grid>
            <br />
            <Grid item>
              <TextField
                label="Cuenta Deudora"
                variant="outlined"
                error={!!methods.formState.errors.idCuentaDeudora?.codigoCuenta}
                helperText={methods.formState.errors.idCuentaDeudora?.codigoCuenta?.message ?? ""}
                fullWidth
                {...methods.register("idCuentaDeudora.codigoCuenta")}
              />
            </Grid>
            <br />
            <Typography>Instruccion de pago</Typography>
            <Divider />
            <br />
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </div>
  );
}

export default App;
