import { StyleSheet } from "aphrodite/no-important";

export const special = StyleSheet.create({
	logo: {
		display: "flex",
		flexGrow: 0,
		margin: 0,
		paddingLeft: 32,
		fontWeight: 500,
		fontSize: 42,
		lineHeight: 1,
		userSelect: "none",
	},

	version: {
		display: "flex",
		flexGrow: 0,
		margin: "auto",
		marginLeft: 4,
		marginBottom: 2,
		paddingLeft: 0,
		fontWeight: 500,
		fontSize: 16,
		lineHeight: 1,
		userSelect: "none",
		alignSelf: "flex-end",
		opacity: 0.8,
	},
	
	settings_scroll_mask: {
		maskImage: "linear-gradient(transparent, black 64px, black calc(100% - 64px), transparent)",
		maskSize: "calc(100% - 8px)",
		maskPosition: "left",
	}
});