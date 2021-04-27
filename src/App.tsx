import React, { FC, useState } from "react";

import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { format } from "date-fns";

import { Header, Body } from "./components";

const useStyle = makeStyles<Theme>((theme: Theme) => {
  return {
    textField: {
      marginBottom: "15px",
    },
  };
});

const App: FC = () => {
  const [endTask, setEndTask] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [title, setTitle] = useState<string>("");
  const classes = useStyle();

  const handleChange = (test: string, cb: Function): void => {
    cb(test);
  };

  console.log({ endTask, title });

  return (
    <div className="App">
      <Header />
      <Container maxWidth={"md"}>
        <h1>Add Todo</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form>
              <FormControl fullWidth>
                <InputLabel>Title Todo</InputLabel>
                <Input
                  defaultValue={title}
                  onChange={(e): void => handleChange(e.target.value, setTitle)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="date"
                  label="End Tasl"
                  type="date"
                  defaultValue={endTask}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e): void => {
                    // console.log({ e: e.target.value });
                    handleChange(e.target.value, setEndTask);
                  }}
                />
              </FormControl>
              <Button color="primary" variant="contained">
                Save
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
