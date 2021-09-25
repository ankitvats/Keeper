import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../assets/img/logo.png";
import { useStyles } from "../assets/styles/AppBarStyles.js";

export default function AppBarComponent(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img
            className={classes.logo}
            alt="Keeper Logo"
            src={Logo}
            width="35"
          />
          <Typography className={classes.title} variant="h6" noWrap>
            Keeper
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Notes"
              value={props.text}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={props.changeText}
            />
          </div>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Avatar className={classes.orange}>A</Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
