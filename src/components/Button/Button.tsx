import React, { HTMLAttributes } from "react";

import { css } from "aphrodite/no-important";

import { animations, button, transitions } from "../../styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	accent?: boolean;
	disabled?: boolean;
	/** Index in list, required for staggered animation */
	index?: number;
	style?: React.CSSProperties;
}

const stripper = (props: ButtonProps) => {
	const propsToFix = Object.assign({}, props);
	if (props.accent) delete propsToFix.accent;
	if (props.index) delete propsToFix.index;
	return propsToFix;
};

// const filterObjByKey = (obj, keyTest) => {
// 	const result = {};
// 	for (const key in obj) {
// 		if (Object.prototype.hasOwnProperty.call(obj, key) && !keyTest(key)) {
// 			result[key] = obj;
// 		}
// 	}
// 	return result;
// };

// tslint:disable-next-line: typedef
const Button: React.FunctionComponent<ButtonProps> = (props) => {
	return (
		<button {...stripper(props)}
			// {...filterObjByKey(props, key => key === "accent")}
			className={css([
				animations.decelerate,
				animations.fromLeft,
				transitions.standard,
				button.standard,
				props.accent ? button.accent : null,
				props.disabled ? button.disabled : null,
			])}
			style={{
				/// @ts-ignore
				animationDelay: `${(props.index * 50) + 100}ms`,
				animationDuration: "100ms",
				...props.style
		}}>
			<span>{props.children}</span>
		</button>
	);
};

export default Button;