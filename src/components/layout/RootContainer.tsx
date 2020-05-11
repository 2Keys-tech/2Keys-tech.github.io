import React from "react";
// import { css } from "aphrodite/no-important";
// import { list } from "../../styles";

// tslint:disable-next-line: typedef
const RootContainer: React.FunctionComponent<{ style?: React.CSSProperties }> = (props) => {
	return (
		<div style={{ display: "flex", paddingTop: 48, height: "100%", boxSizing: "border-box", ...props.style }}>
			{props.children}
		</div>
	);
};

export default RootContainer;