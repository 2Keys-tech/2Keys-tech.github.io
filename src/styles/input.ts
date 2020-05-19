import { StyleSheet } from "aphrodite/no-important";
import { OUTLINE_STANDARD, BACKGROUND_STANDARD, BACKGROUND_FOCUS, OUTLINE_FOCUS, OUTLINE_HOVER } from "../util/theme";

export const input = StyleSheet.create({
	standard: {

	},

	text: {
		outline: 0,
		display: "flex",
		flexGrow: 0,
		flexDirection: "column",
		justifyContent: "center",
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: OUTLINE_STANDARD,
		background: BACKGROUND_STANDARD,
		boxSizing: "border-box",
		appearence: "none",
		color: "inherit",
		margin: 8,
		textTransform: "none",
		font: "inherit",
		fontSize: 14,
		fontWeight: 500,
		minHeight: 24,
		paddingTop: 4,
		paddingLeft: 8,
		paddingRight: 8,
		paddingBottom: 4,
		
		":hover": {
			background: BACKGROUND_FOCUS,
			borderColor: OUTLINE_STANDARD,
			// boxShadow: `0 0 1px ${OUTLINE_HOVER}, inset 0 0 1px ${OUTLINE_HOVER}`,
		},
		
		":focus": {
			background: BACKGROUND_FOCUS,
			borderColor: OUTLINE_HOVER,
			boxShadow: `0 0 1px ${OUTLINE_HOVER}, inset 0 0 1px ${OUTLINE_HOVER}`,
		},

		":disabled": {
			opacity: 0.6,
			pointerEvents: "none",
		},
	},
});