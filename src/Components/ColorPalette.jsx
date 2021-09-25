import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { colors } from "../utils/colors";
import { randomId } from "../utils/randomId";
import { useStyles } from "../assets/styles/ColorPaletteStyles.js";
import Color from "./Color";

function ColorPalette(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Paper>
        <Grid container justifyContent="space-around" alignItems="center">
          {colors.map((el) => (
            <Grid item xs={4} key={randomId()}>
              <Color
                selected={props.selected}
                handleBackground={props.handleBackground}
                color={el.color}
                label={el.label}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}

export default React.memo(ColorPalette);
