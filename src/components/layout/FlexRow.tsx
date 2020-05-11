import React from "react";
import { css } from "aphrodite/no-important";
import type { StyleDeclarationValue } from "aphrodite/no-important";
// import { list } from "../../styles";

// tslint:disable-next-line: typedef
const FlexRow: React.FunctionComponent<{ style?: React.CSSProperties; className?: StyleDeclarationValue[] | false | null | void; grow?: boolean; maxHeight?: boolean; reverse?: boolean; wrap?: boolean }> = (props) => {
	return (
		<div className={css(props.className)} style={{ display: "flex", flexDirection: props.reverse ? "row-reverse" : "row", height: props.maxHeight ? "100%" : null, flexGrow: props.grow ? 1 : 0, boxSizing: "border-box", flexWrap: props.wrap ? "wrap" : "nowrap", ...props.style }}>
			{props.children}
		</div>
	);
};

export default FlexRow;