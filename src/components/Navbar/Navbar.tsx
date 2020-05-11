import React from "react";

import { css } from "aphrodite/no-important";

import { nav } from "../../styles";

// tslint:disable-next-line: typedef
const Navbar: React.FunctionComponent<{ style?: React.CSSProperties }> = (props) => {
	return (
		<section className={css(nav.root)} style={{ ...props.style }}>
			{props.children}
		</section>
	);
};

export default Navbar;