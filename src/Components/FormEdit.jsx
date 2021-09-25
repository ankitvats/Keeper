import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ColorPalette from "./ColorPalette";
import { useStyles } from "../assets/styles/FormEditStyles.js";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function FormEdit(props) {
  const classes = useStyles(props);
  const [pin, setPin] = useState(false);
  const [background, setBackground] = useState("#fff");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [snack, setSnack] = React.useState(false);
  const [showPalette, setShowPalette] = React.useState(false);

  useEffect(() => {
    if (props.note.id) {
      setTitle(props.note.title);
      setBody(props.note.body);
      setBackground(props.note.background);
      setPin(props.note.pinned);
      setId(props.note.id);
    }
  }, [props.note]);

  const togglePin = () => setPin((pin) => !pin);

  const handleForm = (e) => {
    e.target.name === "body"
      ? setBody(e.target.value)
      : setTitle(e.target.value);
  };

  const discardNote = () => {
    setSnack(false);
    setShowPalette(false);
    props.close();
  };

  const saveNote = () => {
    if (!body || !title) {
      return setSnack(true);
    }
    const note = {
      id: id,
      title: title,
      body: body,
      background: background,
      pinned: pin,
    };
    discardNote();
    props.update(note);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack(false);
  };

  const openPalette = () => {
    setShowPalette((show) => !show);
  };

  const handleBackground = (color) => {
    setBackground(color);
    setShowPalette(false);
  };

  return (
    <Dialog
      className={classes.editDialog}
      maxWidth={false}
      open={props.visible}
      onClose={discardNote}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={`${classes.root}`}>
        <Container className={classes.container}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ background }}>
                <Grid item xs={12}>
                  <div className={`${classes.titleBox}`}>
                    <InputBase
                      value={title}
                      name="title"
                      multiline
                      onChange={handleForm}
                      className={classes.title}
                      placeholder="Title"
                      inputProps={{ tabIndex: "2", "aria-label": "Title" }}
                    />
                    <IconButton
                      className={classes.iconButton}
                      onClick={togglePin}
                    >
                      <div
                        className={`${classes.pinIcon} ${
                          pin ? classes.pinOn : classes.pinOff
                        }`}
                      />
                    </IconButton>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <InputBase
                    value={body}
                    name="body"
                    multiline
                    onChange={handleForm}
                    className={classes.input}
                    placeholder="Take a note..."
                    inputProps={{
                      tabIndex: "1",
                      "aria-label": "Take a note...",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className={`${classes.formFooter}`}>
                    <IconButton onClick={openPalette}>
                      <ColorLensOutlinedIcon className={classes.footerIcon} />
                    </IconButton>
                    <div className={classes.grow} />
                    <Button onClick={saveNote} tabIndex="3">
                      Save
                    </Button>
                    <Button onClick={discardNote} tabIndex="4">
                      Discard
                    </Button>
                  </div>
                </Grid>
                <div
                  className={`${classes.palette} ${
                    showPalette && classes.showColors
                  }`}
                >
                  <ColorPalette
                    handleBackground={handleBackground}
                    selected={background}
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Snackbar */}
        <Snackbar open={snack} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            Title &amp; Body can't be empty
          </Alert>
        </Snackbar>
      </div>
    </Dialog>
  );
}

export default React.memo(FormEdit, (prevProps, nextProps) => {
  return prevProps.note === nextProps.note;
});
