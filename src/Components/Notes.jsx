import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NoteCard from "./NoteCard";

const useStyles = makeStyles({
  container: {
    margin: "50px auto",
    "& > span": {
      padding: "0 15px",
    },
  },
});

const Notes = (props) => {
  const classes = useStyles();

  const pinnedUI = (
    <Container maxWidth="md" className={classes.container}>
      <Typography
        variant="caption"
        color="textSecondary"
        display="block"
        gutterBottom
      >
        PINNED
      </Typography>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {props.notes
            .filter((el) => el.pinned)
            .map((el, i) => (
              <NoteCard
                edit={props.edit}
                update={props.update}
                note={el}
                key={i}
                delete={props.delete}
              />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );

  const otherUI = (
    <Container maxWidth="md" className={classes.container}>
      <Typography
        variant="caption"
        color="textSecondary"
        display="block"
        gutterBottom
      >
        OTHERS
      </Typography>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {props.notes
            .filter((el) => !el.pinned)
            .map((el, i) => (
              <NoteCard
                edit={props.edit}
                update={props.update}
                note={el}
                key={i}
                delete={props.delete}
              />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );

  return (
    <>
      {props.notes.filter((el) => el.pinned).length ? pinnedUI : null}
      {props.notes.filter((el) => !el.pinned).length ? otherUI : null}
    </>
  );
};

export default Notes;
