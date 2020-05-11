import { StyleSheet } from "aphrodite/no-important";
import MotionTimings from "../util/theme/MotionTimings";

export const ICON_COLOUR = {
	// light: "#859D9F",
	light: "#000000",
	// dark: "#B8B6B7",
	dark: "#FFFFFF",
};

export const titlebar = StyleSheet.create({
	root: {
		position: "fixed",
		width: "100%",
		top: 0,
		left: 0,
		right: 0,
		height: 24,
		display: "flex",
		justifyContent: "flex-end",
		webkitAppRegion: "drag",
		userSelect: "none",
		zIndex: 10000,
	},

	drag_area: {
		// position: "absolute",
		display: "flex",
		// width: "calc(100% - 6px)",
		top: 0,
		left: 0,
		right: 0,
		height: 20,
		margin: 0,
		marginTop: 4,
		// marginLeft: 4,
		// marginRight: 4,
	},
	
	drag_area_maximised: {
		margin: 0,
		height: 24,
	},
	
	grow: {
		alignSelf: "stretch",
		flexGrow: 1,
	},

	back: {
		padding: 4,
		// transform: "translateY(12px)",
		position: "absolute",
		top: 12,
		left: 20,
		zIndex: 10,
		transitionDuration: "300ms, 300ms, 300ms, 300ms",
		transitionProperty: "opacity, transform",
	},
	
	backHidden: {
		transform: "translateX(24px)",
		opacity: 0,
		pointerEvents: "none",
		transitionDuration: "300ms, 300ms, 300ms, 300ms",
		transitionProperty: "opacity, transform",
		transitionDelay: "0ms, 300ms, 300ms, 300ms",
	},

	link_container: {
		display: "flex",
		margin: "auto 0",
		// marginRight: 64,
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	
	link: {
		color: ICON_COLOUR.dark,
		display: "flex",
		margin: 0,
		fontSize: 10,
		lineHeight: "14px",
		textTransform: "uppercase",
		fontWeight: 600,
		webkitAppRegion: "no-drag",
		textDecoration: "none",
		cursor: "default",
		opacity: 0.65,

		":hover": {
			opacity: 1,
		},
		
		":active": {
			opacity: 1,
			textShadow: `0 0 0.5px ${ICON_COLOUR.dark}`,
		},
		
		":hover:active": {
			opacity: 1,
			textShadow: `0 0 0.5px ${ICON_COLOUR.dark}`,
		}
	},

	link_divider: {
		width: 1,
		height: 12,
		background: ICON_COLOUR.dark,
		opacity: 0.65,
		margin: "auto",
		marginLeft: 5,
		marginRight: 5,
		display: "flex",
	},
	
	controls: {
		display: "flex",
		marginLeft: 0,
		// pointerEvents: "none",
		
		":defined > *": {
			// pointerEvents: "all",
		}
	},
	
	button: {
		opacity: 0.65,

		":hover": {
			// filter: "brightness(125%)",
			opacity: 1,
		},
		
		":active": {
			opacity: 1,
			filter: `brightness(125%) drop-shadow(0 0 0.5px ${ICON_COLOUR.dark})`,
		},
		
		":hover:active": {
			opacity: 1,
			filter: `brightness(150%) drop-shadow(0 0 2px ${ICON_COLOUR.dark})`,
		}
	},
});