import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import BrewInfo from '../Pages/BrewInfo';
import YearRoundBeers from '../Pages/YearRoundBeers';

class Body extends Component {
	render(){
		return (
			<Switch>
		      <Route exact path='/' component={Home}/>
		      <Route path='/BrewInfo' component={BrewInfo}/>
		      <Route path='/YearRoundBeers' component={YearRoundBeers}/>	      	
		    </Switch>
		)
	}	
};
export default Body;
