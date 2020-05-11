import React, { MouseEventHandler } from "react";

import { css } from "aphrodite/no-important";

import { animations, dialog, transitions, headings } from "../../styles";
import { FlexColumn, FlexRow } from "../layout";
import { Button } from "../Button";
import { WINDOW_BACKGROUND } from "../../util/constants";
import { staticDepth8 } from "../../styles/depth";

type DialogProps = {
	body?: string[];
	buttons?: [string, string?];
	onCancel?: MouseEventHandler;
	onConfirm?: MouseEventHandler;
	style?: React.CSSProperties;
	title?: string;
	visible?: boolean;
}

// tslint:disable-next-line: typedef
const ConfirmPrompt: React.FunctionComponent<DialogProps> = (props) => {
	return (
		<section
			className={css([
				animations.decelerate,
				animations.scaleIn,
				transitions.standard,
				dialog.root,
				props.visible ? dialog.visible : null,
			])}
			style={{
				animationDuration: "100ms",
				...props.style
			}}>
			<FlexColumn style={{ width: 320, margin: "auto", background: WINDOW_BACKGROUND, ...staticDepth8 }}>
				<FlexColumn grow maxHeight style={{ padding: 32, paddingBottom: 16, paddingTop: 16, ...staticDepth8 }}>
					<h1 className={css(headings.title, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "150ms" }}>{props.title}</h1>
					{props.body.map((text, i) => (
						<span key={`Dialog-Body-${i}`} style={{ animationDelay: `${i * 50 + 200}ms` }} className={css(headings.desc, animations.decelerate, animations.fromLeft)}>{text}</span>
					))}
				</FlexColumn>
				<FlexRow style={{ justifyContent: "flex-end", height: 48 }}>
					<Button style={{ width: 72, textAlign: "center", alignContent: "center", alignItems: "center", justifyContent: "center" }} onClick={props.onCancel} index={0} accent>{props.buttons[0] || "Cancel"}</Button>
					<Button style={{ width: 72, textAlign: "center", alignContent: "center", alignItems: "center", justifyContent: "center" }} onClick={props.onConfirm} index={1}>{props.buttons[1] || "OK"}</Button>
				</FlexRow>
			</FlexColumn>
		</section>
	);
};

export default ConfirmPrompt;