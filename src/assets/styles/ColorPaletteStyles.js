import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		zIndex: "100",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(15),
			height: theme.spacing(15),
			padding: "5px",
		},
	},
	selected: {
		borderColor: "#555",
	},
}));

export { useStyles };