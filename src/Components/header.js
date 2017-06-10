import React, {Component} from 'react';
import { Navbar, Grid, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

class Header extends Component {
	render(){
		return (
			<Navbar inverse fixedTop>
				<Grid>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/" className="logo">
								<img alt="logo" src={require('../images/logo.png')} />
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav>
							<LinkContainer to="/Brewinfo" activeClassName={"active"}>
								<NavItem>Brewery info</NavItem>
							</LinkContainer>
							<LinkContainer to="/YearRoundBeers" activeClassName={"active"}>
								<NavItem>Year Round Beers</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Grid>
			</Navbar>	
		)
	}
}
export default Header;