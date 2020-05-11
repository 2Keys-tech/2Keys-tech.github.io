import { StyleSheet } from "aphrodite/no-important";
import { fromLeft, toLeft } from "./animations";
import { ICON_COLOUR } from "./titlebar";
import MotionTimings from "../util/theme/MotionTimings";
import { OUTLINE_STANDARD } from "../util/theme";

export const nav = StyleSheet.create({
	root: {
		height: 48,
		maxHeight: 48,
		paddingLeft: 32,
		display: "flex",
		flexDirection: "row",
		marginTop: 16,
		paddingBottom: 16,
		boxSizing: "border-box",
		flexGrow: 1,
	},

	link: {
		textTransform: "capitalize",
		fontWeight: 200,
		fontSize: 32,
		lineHeight: 1,
		color: "inherit",
		textDecoration: "none",
		paddingRight: 16,
		height: 32,
		opacity: 0.65,
		
		":hover": {
			opacity: 0.4,
		},

		":active": {
			opacity: 0.25,
		},
	},
	
	link_active: {
		opacity: 1,
		
		":hover": {
			opacity: 1,
		},
	}
});