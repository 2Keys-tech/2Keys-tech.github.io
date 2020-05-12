import React from "react";

import { css } from "aphrodite/no-important";

import { NavLink as Link } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

import { animations, nav, transitions } from "../../styles";

// tslint:disable-next-line: typedef
const NavItem: React.FunctionComponent<NavLinkProps & { style?: React.CSSProperties }> = (props) => {
	return (
		<Link className={css(animations.decelerate, animations.fadeIn, transitions.standard, nav.link)} activeClassName={css(nav.link_active)} style={{ ...props.style }} to={props.to} {...props} >{props.children}</Link>
	);
};

export default NavItem;