import React from "react";

import { css } from "aphrodite/no-important";

import { tabs } from "../../styles";

// tslint:disable-next-line: typedef
export const TabList: React.FunctionComponent<{ style?: React.CSSProperties }> = (props) => {
	return (
		<section className={css(tabs.root)} style={{ ...props.style }}>
			{props.children}
		</section>
	);
};