import React, { FC } from "react";

import { Container, Grid } from "@material-ui/core";
import { FormInput } from "..";
const Body: FC = () => {
  return (
    <>
      <Container maxWidth={"md"}>
        <h1>Add Todo</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormInput />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Body;
