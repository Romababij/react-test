import React,{Component} from 'react';
import { Jumbotron, Row, Col, Grid } from 'react-bootstrap';
class Home extends Component {
	render(){
		return (
			<Grid className="vertical-center">
				<Row className="show-grid">
					<Col xs={12}>
						<Jumbotron>
						<h1>Hello, world!</h1>
						<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
						</Jumbotron>
					</Col>
				</Row>
			</Grid>
		)
	}	
};
export default Home;