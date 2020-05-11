import React from "react";
import { css } from "aphrodite/no-important";
import { list } from "../../styles";

// tslint:disable-next-line: typedef
const List: React.FunctionComponent<{ style?: React.CSSProperties }> = (props) => {
	return (
		<section className={css(list.root)} style={{ ...props.style }}>
			<section className={css(list.children)}>
				{props.children}
			</section>
		</section>
	);
};

export default List;