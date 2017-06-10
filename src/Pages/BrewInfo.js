import React,{Component} from 'react';
import { Image, Row, Col, Grid } from 'react-bootstrap';

class Home extends Component {

	render(){

		var brewInfoData = require('../json/brewinformation.json');
		// var escapedJSONString= brewInfoData.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
		// var dataToJson = JSON.parse(escapedJSONString); 
                            
		return (
			<div className='page'>
				<Grid>
					<Row className="show-grid">
					  <Col xs={12}><h1>{brewInfoData.data.name}</h1></Col>
				      <Col xs={4}>
				      	<Image src={brewInfoData.data.images.squareLarge} circle responsive />
				      	
				      	<p>Website: {brewInfoData.data.website}</p>
				      	<p>Established: {brewInfoData.data.established}</p>
				      </Col>
				      <Col xs={8}>
				      	<p>{brewInfoData.data.description}</p>
				      </Col>
				    </Row>
			    </Grid>
	        </div>
		)
	}	
};
export default Home;