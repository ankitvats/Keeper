import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ColorPalette from "./ColorPalette";
import EditIcon from "@material-ui/icons/Edit";
import { useStyles } from "../assets/styles/NoteCardStyles";

function NoteCard(props) {
  const classes = useStyles(props);
  const [showPalette, setShowPalette] = React.useState(false);
  const [, setBackground] = React.useState("");

  const openPalette = () => setShowPalette(true);
  const closePalette = () => setShowPalette(false);

  const handleBackground = React.useCallback(
    (color) => {
      setBackground(color);
      setShowPalette(false);
      const updatedNote = { ...props.note };
      updatedNote.background = color;
      props.update(updatedNote);
    },
    [props]
  );

  const handlePin = () => {
    if (props.note.pinned === true) {
      const updatedNote = { ...props.note };
      updatedNote.pinned = false;
      props.update(updatedNote);
    } else if (props.note.pinned === false) {
      const updatedNote = { ...props.note };
      updatedNote.pinned = true;
      props.update(updatedNote);
    }
  };

  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: props.note.background }}
    >
      <div className={classes.headBox}>
        <IconButton
          onClick={handlePin}
          aria-label="pin"
          className={classes.pinButton}
        >
          <div
            className={`${classes.pinIcon} ${
              props.note.pinned === true ? classes.pinOn : classes.pinOff
            }`}
          />
        </IconButton>
        <div className={classes.floatRight}></div>
        <CardHeader className={classes.cardHeader} title={props.note.title} />
      </div>

      <CardContent className={classes.cardBody}>
        <Typography variant="body2" component="p">
          {props.note.body}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Edit Note"
          onClick={() => props.edit(props.note)}
        >
          <EditIcon />
        </IconButton>
        <IconButton onMouseEnter={openPalette} onMouseLeave={closePalette}>
          <ColorLensOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="Delete Note"
          onClick={() => props.delete(props.note.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>

      <div
        onMouseEnter={openPalette}
        onMouseLeave={closePalette}
        className={`${classes.palette} ${showPalette && classes.showColors}`}
      >
        <ColorPalette
          handleBackground={handleBackground}
          selected={props.note.background}
        />
      </div>
    </Card>
  );
}

export default React.memo(NoteCard);
