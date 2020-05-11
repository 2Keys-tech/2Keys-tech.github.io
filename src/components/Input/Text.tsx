import React, { HTMLAttributes } from "react";

import { css } from "aphrodite/no-important";

import { animations, input, transitions } from "../../styles";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	/** Index in list, required for staggered animation */
	index?: number;
	style?: React.CSSProperties;
	type?: string;
}

// tslint:disable-next-line: typedef
export const TextInput: React.FunctionComponent<InputProps> = (props) => {
	return (
		<input {...props}
			// {...filterObjByKey(props, key => key === "accent")}
			className={css([
				animations.decelerate,
				animations.fromLeft,
				transitions.standard,
				input.text,
			])}
			style={{
				animationDelay: `${(props.index * 50) + 100}ms`,
				animationDuration: "100ms",
				...props.style
			}}
		>{props.children}</input>
	);
};