import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import { FlexColumn, FlexRow, Section } from '../../components/layout';
import { css } from 'aphrodite/no-important';
import { headings, animations, transitions } from '../../styles';
import { staticDepth64 } from '../../styles/depth';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Input';

declare const window: Window & typeof globalThis & { hbspt: any };
export class FeaturesRoot extends React.Component<RouteChildrenProps, { gdprConsent: boolean }> {
	constructor(props: RouteChildrenProps) {
		super(props);
		this.state = {
			gdprConsent: false,
		}
	}
	render = () => {
		const notFinishedYet = true;
		if (notFinishedYet === true) return (
			<FlexColumn grow maxHeight>
				{/* <Route path="/Features/" exact render={() => <Redirect to={`/Features/`} />} /> */}
				<FlexRow style={{ height: "100vh", flexShrink: 0, position: "relative", justifyContent: "space-around" }}>
					{/* <FlexRow style={{ position: "absolute", bottom: 0, width: "100%", height: 64, justifyContent: "center" }}>
						<h3 className={css(headings.title, transitions.decelerate)}>Scroll down; There's more!</h3>
					</FlexRow> */}
					{/* When there is more content for the site, comment the FlexRow underneath this note, and uncomment the one above */}
					<FlexRow style={{ position: "absolute", bottom: 0, width: "100%", height: 64, justifyContent: "center" }}>
						<h3 className={css(headings.title, transitions.decelerate)}>We're working on the site and getting screenshots and more ready!</h3>
					</FlexRow>
					<FlexColumn style={{ margin: "auto", marginRight: 0, paddingLeft: 32, paddingRight: 32, maxWidth: 800, width: 800 }}>
						<h1 className={css(headings.big, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "200ms", marginBottom: 16, fontSize: 60 }}>
							Productivity.
							<br/>
							Turned up to 11.</h1>
						<h3 className={css(headings.big_label, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "300ms" }}>
							2Keys makes it easy to use any number of keyboards for macros.<br />
							Now you can have limitless shortcuts at your fingertips.
						</h3>
						<br />
						<h3 className={css(headings.big_label, animations.decelerate, animations.fromLeft)} style={{ animationDelay: "400ms" }}>
							Interested? Help us make the software&nbsp;<em>you</em>&nbsp;want by completing our survey:
						</h3>
						<form className={css(animations.decelerate, animations.fromLeft)} style={{ animationDelay: "500ms" }} action={"https://twokeystech.us18.list-manage.com/subscribe/post?u=6f3a86aca662c6524d97f9db4&id=ea7025be99"} onSubmit={this.state.gdprConsent ? null : (e) => e.preventDefault()} method="post">
							<FlexColumn style={{ marginBottom: "auto", marginTop: 16 }}>
								<FlexRow style={{ maxHeight: 46, height: 46 }}>
									<Button onClick={() => window.open("https://forms.gle/ib45KECrqfFKjoSB6")} style={{ marginLeft: 0, marginRight: "auto" }}>Fill in the survey!</Button>
									<TextInput style={{ width: 320 }} type="email" placeholder="someone@example.com" name="MERGE0" id="MERGE0"/>
									<Button style={{ marginRight: 0 }}>Sign up for news</Button>
								</FlexRow>
								<FlexRow className={[animations.decelerate, animations.fromLeft]} style={{ animationDelay: "800ms", animationDuration: "400ms" }}>
									<input
										checked={this.state.gdprConsent}
										onChange={(e) => this.setState({ gdprConsent: e.currentTarget.checked })}
										style={{ margin: "auto 4px auto 0" }}
										required // this is how we handle enforcing people consent!
										type="checkbox"
										id="GDPR-consent-checkbox" />
									<label htmlFor="GDPR-consent-checkbox" className={css(headings.desc)}>Do you give consent for us to use the data you give us to contact you about 2Keys Studio?</label>
								</FlexRow>
								{/* <h4 className={css(headings.desc)}>(e-mail address not required for completing survey)</h4> */}
							</FlexColumn>
						</form>
					</FlexColumn>
					<img className={css(animations.decelerate, animations.fromLeft)} src={require("../../assets/AmpedUp11.png")} style={{ margin: "auto", marginLeft: 0, display: "flex", maxWidth: 800, maxHeight: 600, animationDelay: "400ms", animationDuration: "1200ms" }} alt="Birds eye view of 2 keyboards + mouse" />
				</FlexRow>
			</FlexColumn>
		);
		if (!notFinishedYet) return (
			<FlexColumn>
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