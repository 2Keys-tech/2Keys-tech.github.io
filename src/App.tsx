import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import type { RouteChildrenProps } from 'react-router-dom';

import { FlexColumn, RootContainer } from './components/layout';
import { Navbar, NavItem } from './components/Navbar';
import { FeaturesRoot } from './routes/Features';
import { OUTLINE_STANDARD } from './util/theme';

class App extends React.Component<RouteChildrenProps, {}> {
	render = () => {
		return (
			<FlexColumn grow maxHeight>
				<FlexColumn style={{ width: "100%", position: "relative" }} maxHeight>
					<Navbar style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: OUTLINE_STANDARD }}>
						<NavItem to="/Features/">Features</NavItem>
						<NavItem to="/About/">Why</NavItem>
						<NavItem to="/Company/">Company</NavItem>
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