import React from "react";
import { useStyles } from "../assets/styles/ColorStyles.js";

const Color = (props) => {
  const classes = useStyles(props);
  const selected = props.selected === props.color;

  return (
    <div
      style={{ backgroundColor: props.color }}
      className={`${classes.colorBox} ${selected && classes.selected}`}
      onClick={() => props.handleBackground(props.color)}
    ></div>
  );
};

export default React.memo(Color);
