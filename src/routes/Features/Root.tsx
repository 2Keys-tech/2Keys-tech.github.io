import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import { FlexColumn, FlexRow, Section } from '../../components/layout';
import { List } from '../../components/List';
import ListLink from '../../components/Button/Text';
import { css } from 'aphrodite';
import { headings, animations } from '../../styles';
import { staticDepth64 } from '../../styles/depth';

const links = [
	{
		to: "/Simple/",
		display: "Simple to use",
	},
	{
		to: "/Streamlined/",
		display: "Streamlined",
	},
	{
		to: "/Powerful/",
		display: "Powerful",
	},
]

export class FeaturesRoot extends React.Component<RouteChildrenProps, {}> {
	render = () => {
		return (
			// <List>
			// 	<FlexColumn style={{ justifyContent: "center", justifyItems: "center" }} maxHeight>
			// 	{links.map((link, i) => (
			// 		<ListLink index={i} to={`/Features${link.to}`}>{link.display}</ListLink>
			// 		))}
			// 		</FlexColumn>
			// 	</List>
			<FlexColumn style={{ paddingTop: 64, paddingBottom: 64 }} grow maxHeight scroll>
				<Route path="/Features/" exact render={() => <Redirect to={`/Features${links[0].to}`} />} />
				<Section>
					<h1 className={css(headings.section, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "200ms" }}>Experience a new era of efficiency</h1>
				</Section>
				<Section>
					<h1 className={css(headings.section, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "300ms" }}>Simple to use</h1>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</Section>
				<Section>
					<h1 className={css(headings.section, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "400ms" }}>Streamlined</h1>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</Section>
				<Section>
					<h1 className={css(headings.section, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "500ms" }}>Powerful</h1>
					<img src={require("../../assets/Twokeys Project Settings.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Settings Screen" />
				</Section>
			</FlexColumn>
		);
	}
};