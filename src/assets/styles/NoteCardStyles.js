import { makeStyles } from '@material-ui/core/styles';
import pinOn from "../img/pin-on.svg";
import pinOff from "../img/pin-off.svg";


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		position: "relative",
		boxShadow: "none",
		border: "1px solid #e0e0e0",
		borderRadius: "8px",
		overflow: "visible",

		"& button": {
			visibility: "hidden",
			opacity: 0,
			transition: "all .3s",
		},
		"&:hover": {
			boxShadow:
				"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
		},
		"&:hover button": {
			visibility: "visible",
			opacity: 0.7,
		},
	},
	cardHeader: {
		display: "block",
		"& span": {
			fontSize: "1rem",
			wordWrap: "break-word",
			fontWeight: 500,
		},
	},
	cardBody: {
		padding: "0 16px 16px 16px",
		wordWrap: "break-word",
	},
	cardActions: {
		padding: "0px 5px",
		justifyContent: "center",
		"& button": {
			padding: "12px",
		},
	},
	pinIcon: {
		// backgroundImage: (props) =>
		//   props.pin ? `url(${pinOn})` : `url(${pinOff})`,
		opacity: "0.71",
		backgroundSize: "24px 24px",
		backgroundRepeat: "no-repeat",
		height: "24px",
		width: "24px",
		// transition: "all .2s",
	},
	pinOn: {
		backgroundImage: `url(${pinOn})`,
	},
	pinOff: {
		backgroundImage: `url(${pinOff})`,
	},
	headBox: {
		position: "relative",
	},
	pinButton: {
		position: "absolute",
		right: "6px",
		top: "6px",
		float: "right",
		opacity: 0.7,
	},
	floatRight: {
		float: "right",
		width: "50px",
		height: "50px",
	},
	palette: {
		position: "absolute",
		bottom: "35px",
		left: "50px",
		display: "none",
	},
	showColors: {
		display: "block",
	},
}));

export { useStyles };