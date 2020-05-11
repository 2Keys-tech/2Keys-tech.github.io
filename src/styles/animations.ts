import { StyleSheet } from "aphrodite/no-important";
import MotionTimings from "../util/theme/MotionTimings";

export const fromRight = {
	"0%": {
		transform: "translateX(24px)",
		opacity: 0,
	},
	
	"100%": {
		// transform: "translateX(0)",
		// opacity: 1,
	},
};

export const fromLeft = {
	"0%": {
		transform: "translateX(-12px)",
		opacity: 0,
	},
	
	"100%": {
		// transform: "translateX(0)",
		// opacity: 1,
	},
};

export const toLeft = {
	"0%": {
		// transform: "translateX(0)",
		// opacity: 1,
	},
	
	"100%": {
		transform: "translateX(-12px)",
		opacity: 0,
	},
};

export const fadeIn = {
	"0%": {
		opacity: 0,
	},
	
	"100%": {
		// opacity: 1,
	},
};

export const scaleIn = {
	"0%": {
		opacity: 0,
		transform: "scale(0.5)",
	},

	"100%": {
		opacity: 1,
		transform: "scale(1)",
	},
};

export const animations = StyleSheet.create({
	standard: {
		animationTimingFunction: MotionTimings.standard,
		animationFillMode: "backwards",
		animationDuration: "200ms",
	},

	accelerate: {
		animationTimingFunction: MotionTimings.accelerate,
		animationFillMode: "backwards",
		animationDuration: "200ms",
	},

	decelerate: {
		animationTimingFunction: MotionTimings.decelerate,
		animationFillMode: "backwards",
		animationDuration: "200ms",
	},

	linear: {
		animationTimingFunction: MotionTimings.linear,
		animationFillMode: "backwards",
		animationDuration: "200ms",
	},

	fromRight: {
		animationName: [fromRight],
	},

	fromLeft: {
		animationName: [fromLeft],
	},

	fadeIn: {
		animationName: [fadeIn],
	},

	scaleIn: {
		animationName: [scaleIn],
	},
});