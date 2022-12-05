import React, { FC } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";

interface IInputFormOperacionProps {
  idp: any;
}

const InputFormOperacion: FC<IInputFormOperacionProps> = ({ idp }: IInputFormOperacionProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  switch (idp.tipoDato) {
    case "TEXTO":
      return (
        <TextField
          label={idp.nombre}
          variant="outlined"
          error={!!errors[idp.tag]}
          helperText={errors[idp.tag]?.message ?? ""}
          fullWidth
          margin="dense"
          {...register(idp.tag)}
        />
      );
    case "NUMERO":
      return (
        <TextField
          label={idp.nombre}
          variant="outlined"
          error={!!errors[idp.tag]}
          helperText={errors[idp.tag]?.message ?? ""}
          fullWidth
          margin="dense"
          {...register(idp.tag)}
        />
      );
    case "TABLA":
      return (
        <TextField
          select
          defaultValue={""}
          label={idp.nombre}
          variant="outlined"
          error={!!errors[idp.tag]}
          helperText={errors[idp.tag]?.message ?? ""}
          fullWidth
          margin="dense"
          {...register(idp.tag)}
        >
          {idp.tabla.contenidos.map((contenido: any) => {
            return (
              <MenuItem key={contenido.codigo} value={contenido.codigo}>
                {contenido.contenido}
              </MenuItem>
            );
          })}
        </TextField>
      );
    case "FECHA_VARIABLE":
      // return (
      //   <TextField
      //     label={idp.nombre}
      //     variant="outlined"
      //     error={!!errors[idp.tag]}
      //     helperText={errors[idp.tag]?.message ?? ""}
      //     fullWidth
      //     margin="dense"
      //     {...register(idp.tag)}
      //   />
      // );
      return null;
      // <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      //   <Controller
      //     name={idp.tag}
      //     control={control}
      //     defaultValue={new Date()}
      //     render={({ field: { ref, ...rest } }) => (
      //       <KeyboardDatePicker
      //         margin="dense"
      //         fullWidth
      //         id="date-picker-dialog"
      //         label="Date picker dialog"
      //         format="MM/dd/yyyy"
      //         KeyboardButtonProps={{
      //           "aria-label": "change date",
      //         }}
      //         inputRef={ref}
      //         {...rest}
      //       />
      //     )}
      //   />
      // </MuiPickersUtilsProvider>
    default:
      return null;
  }
};

export default InputFormOperacion;
