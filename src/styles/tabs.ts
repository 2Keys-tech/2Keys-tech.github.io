import { StyleSheet } from "aphrodite/no-important";

export const tabs = StyleSheet.create({
	root: {
		height: 24,
		maxHeight: 24,
		minHeight: 24,
		paddingLeft: 32,
		display: "flex",
		flexDirection: "row",
		marginTop: 16,
		// borderRightStyle: "solid",
		// borderRightWidth: 1,
		// borderRightColor: OUTLINE_STANDARD,
		flexGrow: 0,
	},

	link: {
		textTransform: "uppercase",
		fontWeight: 200,
		fontSize: 16,
		lineHeight: 1,
		color: "inherit",
		textDecoration: "none",
		position: "relative",
		paddingRight: 4,
		height: 24,
		opacity: 1,
		// textAlign: "center",
		transitionProperty: "all, font-weight",
		transitionDuration: "200ms, 0ms",
		
		"::after": {
			content: "attr(title)",
			display: "flex",
			fontWeight: 600,
			color: "transparent",
			opacity: 0,
			pointerEvents: "none",
			visibility: "hidden",
			overflow: "hidden",
			textAlign: "center",
		},

		":not(:first-of-type)": {
			paddingLeft: 4,
			textAlign: "center",
		},
		
		":hover": {
			opacity: 0.65,
		},
	},
	
	link_active: {
		fontWeight: 600,
	}
});