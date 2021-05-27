import React from 'react';
import { connect } from 'react-redux';
import { Alert } from './Alert';

const CarsTableWrapper = ({ children, cars }) => {
	return (
		<>
			{children}
			{cars.length === 0 && <Alert />}
		</>
	);
};

const mapStateToProps = state => ({
	cars: state.reducer.cars,
});
export default connect(mapStateToProps)(CarsTableWrapper);
