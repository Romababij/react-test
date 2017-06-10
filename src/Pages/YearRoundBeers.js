import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Thumbnail, Col, Button, Row } from 'react-bootstrap';
import Popup from 'react-popup';

class YearRoundBeers extends Component {
	render(){
		var listOfYearsBeers = require('../json/yearbeer.json');

		// var listCatName = listOfYearsBeers.data.map(function(key,item) {
		// 	console.log(key)
		// });
		// var catArray = [];
		// var libraries = listOfYearsBeers.data.filter(self => {
		// 	if(self.available) {
		// 		catArray.push(self.available.name)	
		// 	}
		// });
		// //console.log(catArray)

		// var uniqueFromArray = catArray.filter(function(elem, index, self) {
		//     return index == self.indexOf(elem);
		// })
		// //console.log(unique)

		// var beerByCat = new Object();
		// var libraries2 = uniqueFromArray.filter(function(self,index) {
		// 	var nameCat = self;

		// 	var listNames = listOfYearsBeers.data.map(beer => {
		// 		if(beer.available) {
		// 			//console.log(nameCat)
		// 			if (beer.available.name == nameCat) {

		// 			}
		// 		}

		// 	})	
		// });
		// console.log(beerByCat)

		// var beerByCat = [];
		// var catObj = new Object();
		// var test = filteredArr.map(function(item) {
		// 	var listNames = listOfYearsBeers.data.map(beer => {
		// 		//console.log(beer.available)
		// 		if(beer.available) {
		// 			if (beer.available.name == item) {
		// 				console.log(beer)
		// 				catObj[item] = beerByCat.push(beer)
		// 			}
		// 		}
		// 	})		
		// });
		// console.log(catObj)
 
		var showPopup = function(contentText){
			// console.log(contentText)		 
		    Popup.create({
			    title: 'Description',
			    content: contentText
			}, true);
		}


		
		var listNames
		if(listOfYearsBeers.message === 'Request Successful') {
			listNames = listOfYearsBeers.data.map(beer => {

				if (beer.labels) {
					var srcBeerImg = beer.labels.medium 
				}
				return (
					<Col key={beer.id} xs={6} md={4}>
						<Thumbnail src={srcBeerImg} alt="logo">
							<h3>{beer.nameDisplay}</h3>
							<p>{beer.style.name}</p>
							<p>
					          <Button onClick={() => showPopup(beer.description)} bsStyle="primary">Show</Button>
					        </p>
						</Thumbnail>
					</Col>
				)
			})
		} else {
			listNames = 'Error';
		}
		
		return (
			<div className='page'>
				<Row>
					{listNames}
				</Row>
	        </div>
		)
	}	
};

export default YearRoundBeers;


