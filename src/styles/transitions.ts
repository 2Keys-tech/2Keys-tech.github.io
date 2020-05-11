import { StyleSheet } from "aphrodite/no-important";
import MotionTimings from "../util/theme/MotionTimings";

export const transitions = StyleSheet.create({
	standard: {
		transitionTimingFunction: MotionTimings.standard,
		transitionDuration: "200ms",
	},

	accelerate: {
		transitionTimingFunction: MotionTimings.accelerate,
		transitionDuration: "200ms",
	},

	decelerate: {
		transitionTimingFunction: MotionTimings.decelerate,
		transitionDuration: "300ms",
	},

	linear: {
		transitionTimingFunction: MotionTimings.linear,
		transitionDuration: "200ms",
	},
});