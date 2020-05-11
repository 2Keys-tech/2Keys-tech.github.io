import { StyleSheet, StyleDeclaration } from "aphrodite/no-important";
import { fromLeft, toLeft } from "./animations";
import MotionTimings from "../util/theme/MotionTimings";
import { OUTLINE_STANDARD } from "../util/theme";

const linkIndicator: StyleDeclaration = {
	content: "''",
	position: "absolute",
	left: -16,
	width: 0,
	height: 0,
	borderStyle: "solid",
	borderLeftWidth: 8,
	borderTopWidth: 4,
	borderBottomWidth: 4,
	borderRightWidth: 0,
	borderColor: "transparent",
	borderLeftColor: OUTLINE_STANDARD,
	margin: 4,
	// background: ICON_COLOUR.dark,
	animationFillMode: "both",
	animationTimingFunction: MotionTimings.decelerate,
	animationDuration: "200ms",
};

export const list = StyleSheet.create({
	root: {
		width: 240,
		paddingLeft: 48,
		display: "flex",
		flexDirection: "column",
		paddingTop: 64,
		paddingBottom: 64,
		maxWidth: 240,
		flexShrink: 0,
		boxSizing: "border-box",
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

		"::before": {
			...linkIndicator,
			animationName: toLeft,
			// animationIterationCount: 1,
			// animationPlayState: "paused",
			// animationDirection: "reverse",
		}
	},
	
	link_active: {
		"::before": {
			...linkIndicator,
			animationName: fromLeft,
			// animationIterationCount: 1,
			// animationPlayState: "running",
		}
	}
});