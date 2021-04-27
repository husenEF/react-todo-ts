import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React, { FC } from "react";

const Form: FC = () => {
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Title Todo</InputLabel>
        <Input value="" />
        <Button>Save</Button>
      </FormControl>
    </form>
  );
};

export default Form;
