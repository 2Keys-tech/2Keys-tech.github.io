import { StyleSheet } from "aphrodite/no-important";
import { OUTLINE_STANDARD, OUTLINE_HOVER, BACKGROUND_STANDARD, BACKGROUND_HOVER, BACKGROUND_FOCUS } from "../util/theme";
import { accent } from "../util/getAccent";

export const button = StyleSheet.create({
	standard: {
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
		textTransform: "uppercase",
		font: "inherit",
		fontSize: 12,
		fontWeight: 600,
		minHeight: 24,
		padding: "4px 8px",
		
		":hover": {
			background: BACKGROUND_HOVER,
			borderColor: OUTLINE_HOVER,
			boxShadow: `0 0 1px ${OUTLINE_HOVER}, inset 0 0 1px ${OUTLINE_HOVER}`,
			padding: "4px 8px",
		},
		
		":active": {
			background: BACKGROUND_FOCUS,
			borderColor: OUTLINE_HOVER,
			boxShadow: "none",
			padding: "4px 8px",
		},

		":disabled": {
			opacity: 0.6,
			pointerEvents: "none",
		},
	},

	text: {
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

	accent: {
		backgroundColor: accent.setAlpha(0.6).toRgbString(),
		
		":hover": {
			background: accent.setAlpha(0.6).lighten(20).toRgbString(),
		},
		
		":active": {
			background: accent.setAlpha(0.6).darken(30).toRgbString(),
			opacity: 1,
		},
	},

	disabled: {

	},
});