import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import { FlexColumn, FlexRow, Section } from '../../components/layout';
import { List } from '../../components/List';
import ListLink from '../../components/Button/Text';
import { css } from 'aphrodite/no-important';
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
			<FlexColumn grow maxHeight scroll>
				<Route path="/Features/" exact render={() => <Redirect to={`/Features/`} />} />
				<FlexRow style={{ height: "calc(100vh - 64px)", flexShrink: 0 }}>
					<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "200ms", margin: "auto" }}>Turn your productivity<br/>up to 11</h1>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</FlexRow>
				<FlexRow reverse>
					<FlexColumn style={{ margin: "auto" }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "300ms" }}>Simple to use</h1>
						<h3>2Keys is easy to use. <em>Really</em> easy to use. Yet still incredibly powerful.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</FlexRow>
				<FlexRow>
					<FlexColumn style={{ margin: "auto" }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "400ms" }}>Streamlined</h1>
						<h3>We've removed all the clutter from macro setup and created a fluid process.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</FlexRow>
				<FlexRow reverse>
					<FlexColumn style={{ margin: "auto" }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "500ms"}}>Powerful</h1>
						<h3>We've designed 2Keys to allow you to do <em>anything</em>.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Project Settings.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Settings Screen" />
				</FlexRow>
			</FlexColumn>
		);
	}
};