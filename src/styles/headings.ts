import { StyleSheet } from "aphrodite/no-important";

export const headings = StyleSheet.create({
	section: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		marginRight: "auto",
		paddingLeft: 32,
		fontWeight: 200,
		textTransform: "capitalize",
		fontSize: 32,
		lineHeight: 1,
		userSelect: "none",
	},
	
	big: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		marginLeft: 32,
		marginRight: "auto",
		fontWeight: 600,
		textTransform: "capitalize",
		fontSize: 64,
		lineHeight: 1,
		userSelect: "none",
	},

	label: {
		display: "flex",
		flexGrow: 0,
		margin: "0 auto 0 0",
		fontWeight: 600,
		fontSize: 16,
		lineHeight: 1,
		userSelect: "none",
	},

	title: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		marginTop: 12,
		fontWeight: 500,
		fontSize: 20,
		lineHeight: 1,
	},

	desc: {
		display: "flex",
		flexGrow: 0,
		margin: "4px 0",
		fontWeight: 300,
		fontSize: 14,
		lineHeight: "16px",
	},

	big_label: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		fontWeight: 500,
		fontSize: 20,
		lineHeight: 1,
	},

	big_desc: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		fontWeight: 200,
		fontSize: 14,
		lineHeight: "16px",
	},
});