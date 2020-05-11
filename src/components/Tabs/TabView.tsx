import React from "react";

// import { css } from "aphrodite/no-important";

// import { animations, tabs, transitions } from "../../styles";

// tslint:disable-next-line: typedef
export const TabView: React.FunctionComponent<{
	/** Tab Label */
	children?: string;
	/** Custom Style Properties */
	style?: React.CSSProperties;
}> = (props) => {
	return (
		<section>
			{props.children}
		</section>
	);
};