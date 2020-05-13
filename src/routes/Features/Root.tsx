import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import { FlexColumn, FlexRow, Section } from '../../components/layout';
import { List } from '../../components/List';
import ListLink from '../../components/Button/Text';
import { css } from 'aphrodite/no-important';
import { headings, animations, transitions } from '../../styles';
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
						<h3 className={css(headings.title, transitions.decelerate)}>Scroll down; There's more!</h3>
					</FlexRow>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32, paddingRight: 32, maxWidth: 720 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "200ms", marginBottom: 16, fontSize: 60 }}>Productivity.
							<br/>
							Amped up to 11.</h1>
						<h3 className={css(headings.big_label)}>We want to make macros AWESOME.
						Help us make the software&nbsp;<em>you</em>&nbsp;want by completing our survey, and consider subscribing to our mailing list for updates</h3>
						<form onSubmit={(e) => e.preventDefault()}>
							<FlexColumn style={{ marginBottom: "auto", marginTop: 16 }}>
								<FlexRow style={{ maxHeight: 44, height: 44 }}>
									<Button style={{ marginLeft: 0, marginRight: "auto" }}>Fill in the survey!</Button>
									<TextInput style={{ width: 320 }} type="email" placeholder="someone@example.com" />
									<Button style={{ marginRight: 0 }}>Sign up for news</Button>
								</FlexRow>
								<h4 className={css(headings.label)}>(e-mail address not required for completing survey)</h4>
							</FlexColumn>
						</form>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: "auto", display: "flex", ...staticDepth64, maxWidth: 512, maxHeight: 384 }} alt="Birds eye view of 2 keyboards + mouse" />
				</FlexRow>
				<FlexRow style={{ height: "50vh", minHeight: "50vh" }} reverse>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32, maxWidth: 720 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "300ms" }}>Simple to use</h1>
						<h3 className={css(headings.big_label)}>2Keys Studio is easy to use.&nbsp;<em>Really</em>&nbsp;easy to use.
							<br/>
							Yet still incredibly powerful.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: "auto", display: "flex", ...staticDepth64, maxWidth: 512, maxHeight: 384 }} alt="A Mouse cursor drags around some stuff on the screen, demonstrating the simplicity of 2Keys Studio" />
				</FlexRow>
				<FlexRow style={{ height: "50vh", minHeight: "50vh" }}>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32, maxWidth: 720 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "400ms" }}>Streamlined</h1>
						<h3 className={css(headings.big_label)}>We've removed all the clutter from macro setup to create a fluid process.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Configure.png")} style={{ margin: "auto", display: "flex", ...staticDepth64, maxWidth: 512, maxHeight: 384 }} alt="A screen pops up cluttered with menus, windows, and dialog boxes transitions to one with a single, simply laid out window. The screen disappears a moment later to allow the animation to replay" />
					{/* Colourful animation of a screen filled with menus and dialogs and windows transitioning to one with a single window and maybe one context menu */}
				</FlexRow>
				<FlexRow style={{ height: "50vh", minHeight: "50vh" }} reverse>
					<FlexColumn style={{ margin: "auto", paddingLeft: 32, maxWidth: 720 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "500ms"}}>Powerful</h1>
						<h3 className={css(headings.big_label)}>We've designed 2Keys Studio to allow you to accomplish <em>anything</em>.</h3>
					</FlexColumn>
					<img src={require("../../assets/Twokeys Project Settings.png")} style={{ margin: "auto", display: "flex", ...staticDepth64, maxWidth: 512, maxHeight: 384 }} alt='A button appears to be pressed down, the camera "pans" up to show a screen with multiple images of highly advanced "stuff" appearing' />
				</FlexRow>
			</FlexColumn>
		);
	}
};