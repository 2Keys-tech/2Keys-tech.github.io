import React from "react";

import { css } from "aphrodite/no-important";

import { NavLink as Link } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

import { animations, tabs, transitions } from "../../styles";

// tslint:disable-next-line: typedef
export const Tab: React.FunctionComponent<NavLinkProps & {
	/** Tab Label */
	children?: string;
	/** Index in list of tabs, required for staggered animation */
	index: number;
	/** Custom Style Properties */
	style?: React.CSSProperties;
}> = (props) => {
	return (
		<Link title={props.children} className={css(animations.decelerate, animations.fromLeft, transitions.standard, tabs.link)} activeClassName={css(tabs.link_active)} style={{ animationDuration: "600ms", animationDelay: `${(props.index * 150) + 100}ms`, ...props.style }} to={props.to} {...props} >{props.children}</Link>
	);
};