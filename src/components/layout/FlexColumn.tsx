import React from "react";
import { css } from "aphrodite/no-important";
import type { StyleDeclarationValue } from "aphrodite/no-important";
// import { list } from "../../styles";

// tslint:disable-next-line: typedef
const FlexColumn: React.FunctionComponent<{ style?: React.CSSProperties; className?: StyleDeclarationValue[] | false | null | void; grow?: boolean; maxHeight?: boolean; scroll?: boolean; reverse?: boolean }> = (props) => {
	return (
		<div className={css(props.className)} style={{ display: "flex", flexDirection: props.reverse ? "column-reverse" : "column", height: props.maxHeight ? "100%" : null, flexGrow: props.grow ? 1 : 0, boxSizing: "border-box", overflowY: props.scroll ? "auto" : null, ...props.style }}>
			{props.children}
		</div>
	);
};

export default FlexColumn;