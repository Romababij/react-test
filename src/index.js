import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css'

import Layout from './Components/layout'

const app = document.getElementById('app')

ReactDOM.render(
	<HashRouter>
		<Layout />
	</HashRouter>, 
app);
