import React, { HTMLAttributes } from "react";
// import { css } from "aphrodite/no-important";
// import { list } from "../../styles";

// tslint:disable-next-line: typedef
const LayoutGrid: React.FunctionComponent<HTMLAttributes<HTMLDivElement> & { flow?: "row" | "column"; style?: React.CSSProperties }> = (props) => {
	return (
		<div style={{ display: "grid", height: "100%", boxSizing: "border-box", gridAutoFlow: props.flow || "column", ...props.style }} {...props}>
			{props.children}
		</div>
	);
};

export default LayoutGrid;