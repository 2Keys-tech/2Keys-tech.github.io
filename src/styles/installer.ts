import { StyleSheet } from "aphrodite/no-important";

export const installer = StyleSheet.create({
	root: {
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		boxSizing: "border-box",
	},

	track: {
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		boxSizing: "border-box",
	},

	screen: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		padding: 32,
		opacity: 0,
		pointerEvents: "none",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},

	screen_active: {
		opacity: 1,
		pointerEvents: "all",
	},

	heading: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		marginRight: "auto",
		marginBottom: 16,
		fontWeight: 200,
		textTransform: "capitalize",
		fontSize: 32,
		lineHeight: 1,
		userSelect: "none",
	},

	text: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		marginTop: 4,
		marginBottom: 4,
		fontWeight: 300,
		fontSize: 15,
		lineHeight: "16px",
	},

	label: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		marginTop: 4,
		marginLeft: 8,
		marginBottom: -4,
		fontWeight: 300,
		fontSize: 14,
		lineHeight: "16px",
	},
});