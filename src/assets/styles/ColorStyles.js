import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	colorBox: {
		display: "block",
		width: "28px",
		height: "28px",
		borderRadius: "50%",
		margin: "6px auto",
		border: "1px solid #eee",
		boxSizing: "border-box",
		"&:hover": {
			borderColor: "#555",
			cursor: "pointer",
		},
	},
	selected: {
		borderColor: "#555",
	},
}));

export { useStyles };