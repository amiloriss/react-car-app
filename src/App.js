import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import FilterForm from './components/FilterForm';
import CarsTableWrapper from './components/CarsTableWrapper';
import CarsTable from './components/CarsTable';

const App = () => {
	return (
		<>
			<Header />
			<Container>
				<FilterForm />
				<CarsTableWrapper>
					<CarsTable />
				</CarsTableWrapper>
			</Container>
		</>
	);
};

export default App;
