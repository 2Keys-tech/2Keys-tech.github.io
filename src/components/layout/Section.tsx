import React from "react";
import type { StyleDeclarationValue } from "aphrodite/no-important";
import FlexColumn from "./FlexColumn";
import { animations } from "../../styles";
// import { list } from "../../styles";

// tslint:disable-next-line: typedef
const Section: React.FunctionComponent<{ style?: React.CSSProperties; className?: StyleDeclarationValue[] | false | null | void; grow?: boolean; maxHeight?: boolean; scroll?: boolean; reverse?: boolean }> = (props) => {
	return (
		<FlexColumn className={[animations.decelerate, animations.fromLeft]} style={{ marginTop: 16, ...props.style }}>
			{props.children}
		</FlexColumn>
	);
};

export default Section;