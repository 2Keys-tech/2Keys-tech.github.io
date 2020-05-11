import { StyleSheet } from "aphrodite/no-important";

export const staticDepth4 = {
	// boxShadow: "0 1.6px 3.6px 0 rgba(0,0,0,.132),0 .3px .9px 0 rgba(0,0,0,.108)",
	boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .132), 0 0px 2px 0 rgba(0, 0, 0, .5)",
};

export const staticDepth8 = {
	// boxShadow: "0 3.2px 7.2px 0 rgba(0,0,0,.132),0 .6px 1.8px 0 rgba(0,0,0,.108)",
	boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .132), 0 0px 4px 0 rgba(0, 0, 0, .5)",
};

export const staticDepth16 = {
	// boxShadow: "0 6.4px 14.4px 0 rgba(0,0,0,.132),0 1.2px 3.6px 0 rgba(0,0,0,.108)",
	boxShadow: "0 4px 8px 0 rgba(0, 0, 0, .132), 0 0px 8px 0 rgba(0, 0, 0, .5)",
};

export const staticDepth64 = {
	// boxShadow: "0 25.6px 57.6px 0 rgba(0,0,0,.22),0 4.8px 14.4px 0 rgba(0,0,0,.18)",
	boxShadow: "0 8px 16px 0 rgba(0, 0, 0, .22), 0 0px 16px 0 rgba(0, 0, 0, .5)",
};

export const depth = StyleSheet.create({
	staticDepth4: {
		...staticDepth4,
	},
	
	staticDepth8: {
		...staticDepth8,
	},
	
	staticDepth16: {
		...staticDepth16,
	},
	
	staticDepth64: {
		...staticDepth64,
	},

	hoverDepth4: {
		":hover": {
			...staticDepth4,
		},
	},

	hoverDepth8: {
		":hover": {
			...staticDepth8,
		},
	},

	hoverDepth16: {
		":hover": {
			...staticDepth16,
		},
	},

	hoverDepth64: {
		":hover": {
			...staticDepth64,
		},
	},
});