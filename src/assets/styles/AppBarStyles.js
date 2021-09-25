import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	logo: {
		marginRight: "10px",
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	appBar: {
		background: "white",
		color: "#5f6368",
	},
	search: {
		height: "48px",
		lineHeight: "48px",
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: "#f1f3f4",
		"&:hover": {
			backgroundColor: "#f1f3f4",
		},
		marginRight: theme.spacing(2),
		marginLeft: "auto",
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(10),
			width: "50%",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
		width: "100%",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "100%",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
}));

export { useStyles };