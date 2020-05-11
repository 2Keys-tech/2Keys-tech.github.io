import { StyleSheet } from "aphrodite/no-important";
import { OUTLINE_STANDARD } from "../util/theme";

export const dialog = StyleSheet.create({
	root: {
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		boxSizing: "border-box",
		position: "fixed",
		width: "200vw",
		height: "200vh",
		background: "rgba(0, 0, 0, 0.2)",
		// Position
		top: "-50vh",
		left: "-50vw",
		right: "150vw",
		bottom: "150vh",
		// Backdrop filter
		backdropFilter: "blur(30px) saturate(125%) brightness(80%)"
	},
	
	children: {
		display: "flex",
		flexDirection: "column",
		borderRightStyle: "solid",
		borderRightWidth: 1,
		borderRightColor: OUTLINE_STANDARD,
		flexGrow: 1,
	},

	link: {
		textTransform: "uppercase",
		fontWeight: 600,
		fontSize: 14,
		lineHeight: 1,
		color: "inherit",
		textDecoration: "none",
		position: "relative",
		height: 24,
		opacity: 1,
		
		":hover": {
			opacity: 0.65,
		},
	},

	visible: {
		opacity: 1,
		transform: "scale(1)",
	}
});