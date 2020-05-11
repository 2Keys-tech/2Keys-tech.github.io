import React from "react";

import { css } from "aphrodite/no-important";

import { NavLink as Link } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

import { animations, list, transitions } from "../../styles";

// tslint:disable-next-line: typedef
const ListLink: React.FunctionComponent<NavLinkProps & {
	/** Index in list, required for staggered animation */
	index: number;
	style?: React.CSSProperties; }> = (props) => {
		return (
			<Link className={css(animations.decelerate, animations.fromLeft, transitions.standard, list.link)} activeClassName={css(list.link_active)} style={{ animationDelay: `${(props.index * 50) + 200}ms`, animationDuration: "100ms", ...props.style }} to={props.to} replace {...props} >{props.children}</Link>
		);
	};

export default ListLink;