import React, { useState, useRef, useEffect } from "react";
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
import { randomId } from "../utils/randomId";
import { useStyles } from "../assets/styles/FormStyles.js";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Form(props) {
  const wrapperRef = useRef(null);
  const classes = useStyles(props);
  const [pin, setPin] = useState(false);
  const [editable, setEditable] = useState(false);
  const [background, setBackground] = useState("#fff");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [snack, setSnack] = React.useState(false);
  const [showPalette, setShowPalette] = React.useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setPin(false);
        setShowPalette(false);
        setEditable(false);
        setTitle("");
        setBody("");
        setBackground("#fff");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const togglePin = () => setPin((pin) => !pin);
  const enableEditing = () => setEditable(true);

  const handleForm = (e) => {
    e.target.name === "body"
      ? setBody(e.target.value)
      : setTitle(e.target.value);
  };

  const discardNote = () => {
    setPin(false);
    setShowPalette(false);
    setEditable(false);
    setTitle("");
    setBody("");
    setBackground("#fff");
  };

  const saveNote = () => {
    if (!body || !title) {
      return setSnack(true);
    }
    const note = {
      id: randomId(),
      title: title,
      body: body,
      background: background,
      pinned: pin,
    };
    props.save(note);
    setEditable(false);
    setTitle("");
    setBody("");
    setBackground("#fff");
    setPin(false);
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
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid container spacing={3} ref={wrapperRef}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ background }}>
              <Grid item xs={12}>
                <div
                  className={`${classes.titleBox} ${editable && classes.edit}`}
                >
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
                  onFocus={enableEditing}
                  className={classes.input}
                  placeholder="Take a note..."
                  inputProps={{ tabIndex: "1", "aria-label": "Take a note..." }}
                />
              </Grid>
              <Grid item xs={12}>
                <div
                  className={`${classes.formFooter} ${
                    editable && classes.edit
                  }`}
                >
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
      <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Title &amp; Body can't be empty
        </Alert>
      </Snackbar>
    </div>
  );
}

export default React.memo(Form);
