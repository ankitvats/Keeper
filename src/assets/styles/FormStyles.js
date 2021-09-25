import { makeStyles } from '@material-ui/core/styles';
import pinOn from "../img/pin-on.svg";
import pinOff from "../img/pin-off.svg";

const useStyles = makeStyles((theme, props) => ({
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	container: {
		margin: "50px auto",
	},
	input: {
		width: "100%",
		padding: "12px 16px 12px 16px",

		"&::placeholder": {
			color: "red!important",
		},
	},
	titleBox: {
		display: "none",
		// position: "relative",
	},
	title: {
		width: `calc(100% - 50px)`,
		padding: "12px 16px 12px 16px",
		fontSize: "1.3rem",
	},
	iconButton: {
		padding: 10,
		// height: "32px",
		// width: "32px",
		position: "absolute",
		right: "6px",
		top: "6px",
	},
	paper: {
		boxShadow: "0 1px 2px rgb(0 0 0 / 40%), 1px 1px 5px rgb(0 0 0 / 20%)",
		position: "relative",
	},
	pinIcon: {
		// backgroundImage: (props) =>
		//   props.pin ? `url(${pinOn})` : `url(${pinOff})`,
		opacity: "0.71",
		backgroundSize: "24px 24px",
		backgroundRepeat: "no-repeat",
		height: "24px",
		width: "24px",
		transition: "all .2s",
	},
	pinOn: {
		backgroundImage: `url(${pinOn})`,
	},
	pinOff: {
		backgroundImage: `url(${pinOff})`,
	},

	formFooter: {
		padding: "0 8px",
		display: "none",
		opacity: "0.71",
		// position: "relative",
	},
	edit: {
		display: "flex",
	},
	footerIcon: {
		width: "20px",
		color: "rgba(0, 0, 0, 0.87)",
	},
	cardsContainer: {
		columnCount: 4,
		columnGap: "10px",
	},
	cardBox: {
		margin: "0",
		display: "grid",
		gridTemplateRows: "1fr auto",
		marginBottom: "10px",
		breakInside: "avoid",
		"& div": {
			gridRow: "1 / -1",
			gridColumn: 1,
		},
	},
	palette: {
		position: "absolute",
		bottom: "30px",
		left: "30px",
		display: "none",
	},
	showColors: {
		display: "block",
	},
}));


export { useStyles };