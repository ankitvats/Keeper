import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    margin: "150px auto",
    textAlign: "center",
  },
});

const Placeholder = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Notes you add appear here
      </Typography>
    </Container>
  );
};

export default React.memo(Placeholder);
