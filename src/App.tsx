import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField } from "@material-ui/core";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import "./App.css";
import { formData } from "./lib/utils/formData";
import { createYupSchema } from "./lib/utils/yupSchemaCreator";

function App() {
  const yepSchema = formData.reduce(createYupSchema, {});
  console.log(yepSchema);
  const validateSchema = yup.object().shape(yepSchema);

  const methods = useForm<any>({
    resolver: yupResolver(validateSchema),
  });

  const formSubmitHandler: SubmitHandler<any> = (data: any) => {
    console.log("data", data);
  };

  console.log("FD", formData);
  console.log("methods", methods.formState.errors);
  return (
    <div className="App">
      <Grid container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            {formData.map((idp: any) => (
              <Grid item key={idp.id}>
                <TextField
                  label={idp.label}
                  variant="outlined"
                  error={!!methods.formState.errors?.[idp.id]}
                  helperText={methods.formState.errors?.[idp.id]?.message ?? ""}
                  fullWidth
                  {...methods.register(idp.id)}
                />
                <br />
                <br />
              </Grid>
            ))}
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
