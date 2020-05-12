import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import { FlexColumn, FlexRow, Section } from '../../components/layout';
import { List } from '../../components/List';
import ListLink from '../../components/Button/Text';
import { css } from 'aphrodite/no-important';
import { headings, animations } from '../../styles';
import { staticDepth64 } from '../../styles/depth';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Input';

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
			<FlexColumn grow maxHeight>
				<Route path="/Features/" exact render={() => <Redirect to={`/Features/`} />} />
				<FlexRow style={{ height: "100vh", flexShrink: 0, position: "relative" }}>
					<FlexRow style={{ position: "absolute", bottom: 0, width: "100%", height: 64, justifyContent: "center" }}>
						<h3 className={css(headings.title)}>Scroll down; There's more!</h3>
					</FlexRow>
					{/* <h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "200ms", margin: "auto", fontSize: 60 }}>Turn your productivity<br/>up to 11</h1> */}
					<FlexColumn style={{ margin: "auto", paddingLeft: 32, paddingRight: 32 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "200ms", marginBottom: 16, fontSize: 60 }}>Productivity.<br/>Turned up to 11.</h1>
						<h3 className={css(headings.big_label)}>We want to make macros AWESOME. Help us make the software&nbsp;<em>you</em>&nbsp;want</h3>
						<form onSubmit={(e) => e.preventDefault()}>
							<FlexRow style={{ marginBottom: "auto", marginTop: 16 }}>
								<TextInput style={{ marginLeft: 0, width: 320 }} type="email" />
								<Button style={{ paddingTop: 4, paddingBottom: 4 }}>Sign up</Button>
								<Button style={{ paddingTop: 4, paddingBottom: 4 }}>Fill in the survey!</Button>
							</FlexRow>
						</form>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</FlexRow>
				<FlexRow style={{ height: "50vh", minHeight: 480 }} reverse>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "300ms" }}>Simple to use</h1>
						<h3 className={css(headings.big_label)}>2Keys is easy to use.&nbsp;<em>Really</em>&nbsp;easy to use. Yet still incredibly powerful.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: 32, marginLeft: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</FlexRow>
				<FlexRow style={{ height: "50vh", minHeight: 480 }}>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "400ms" }}>Streamlined</h1>
						<h3 className={css(headings.big_label)}>We've removed all the clutter from macro setup and created a fluid process.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: 32, marginRight: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Configuration Screen" />
				</FlexRow>
				<FlexRow style={{ height: "50vh", minHeight: 480 }} reverse>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "500ms"}}>Powerful</h1>
						<h3 className={css(headings.big_label)}>We've designed 2Keys to allow you to do <em>anything</em>.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Project Settings.png")} style={{ margin: 32, marginLeft: "auto", display: "flex", ...staticDepth64, width: 512, height: 384 }} alt="Twokeys Settings Screen" />
				</FlexRow>
			</FlexColumn>
		);
	}
};