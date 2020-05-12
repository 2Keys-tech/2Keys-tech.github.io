import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import tinycolor from "tinycolor2";

import { FlexColumn, RootContainer, FlexRow } from './components/layout';
import { Navbar, NavItem } from './components/Navbar';
import { FeaturesRoot } from './routes/Features';
import { OUTLINE_STANDARD } from './util/theme';
import { WINDOW_BACKGROUND } from './util/constants';
import { css } from 'aphrodite/no-important';
import { special, transitions } from './styles';

class App extends React.Component<RouteChildrenProps, { scrollY: number }> {
	constructor(props: RouteChildrenProps) {
		super(props);
		this.state = {
			scrollY: 0,
		}
	}

	handleScroll = () => {
		this.setState({ scrollY: window.scrollY });
	}

	componentDidMount = () => {
		window.addEventListener("scroll", this.handleScroll);
	}

	render = () => {
		return (
			<FlexColumn grow maxHeight>
				<FlexColumn style={{ width: "100%", position: "relative" }} maxHeight>
					<Navbar style={{ position: "fixed", width: "100%", background: tinycolor(WINDOW_BACKGROUND).setAlpha(CSS.supports("(backdrop-filter: blur(15px)) or (-webkit-backdrop-filter: blur(15px))") ? 0.9 : 1).toRgbString(), marginTop: 0, paddingTop: 16, maxHeight: 128, height: 128, transform: `translateY(${this.state.scrollY > 0 ? "-64" : 0}px)`, backdropFilter: "blur(15px) saturate(150%)", WebkitBackdropFilter: "blur(15px) saturate(150%)" }}>
						<FlexColumn style={{ justifyContent: "space-between" }}>
							<h1 className={css(special.logo, transitions.decelerate)} style={{ paddingLeft: 0, lineHeight: "56px", transform: `translateY(${this.state.scrollY > 0 ? "-16" : 0}px)`, transitionDelay: "50ms" }}>2Keys Studio</h1>
							<FlexRow>
								<NavItem to="/Features/">Features</NavItem>
								<NavItem to="/About/">Why</NavItem>
								<NavItem to="/Company/">Company</NavItem>
							</FlexRow>
						</FlexColumn>
					</Navbar>
					<Switch>
						<Route path="/Features/" component={FeaturesRoot} />
						<Route render={() => <Redirect to="/Features/" />} />
					</Switch>
				</FlexColumn>
				{/* <RootContainer>
				</RootContainer> */}
			</FlexColumn>
		);
	}
};

const AppContainer = () => (
	<Router>
		<Route component={App} />
	</Router>
);

export default AppContainer;