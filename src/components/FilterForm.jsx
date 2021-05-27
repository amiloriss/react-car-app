import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import {
	searchCar,
	bodyTypeFilter,
	fuelFilter,
	yearFilter,
	priceFilter,
} from '../action/action';

const FilterForm = ({
	searchCar,
	bodyTypeFilter,
	fuelFilter,
	yearFilter,
	priceFilter,
	searchText,
	bodyTypeSelected,
	fuelSelected,
	priceSelected,
	yearSelected,
}) => {
	const searchCarHandle = e => {
		searchCar(e.target.value);
	};
	const bodyTypeFilterHandle = e => {
		bodyTypeFilter(e.target.value);
	};
	const fuelFilterHandle = e => {
		fuelFilter(e.target.value);
	};
	const yearFilteredHandle = e => {
		yearFilter(e.target.value);
	};
	const priceFilterHandle = e => {
		priceFilter(e.target.value);
	};

	return (
		<div className='form-container mb-5 px-3 border rounded'>
			<h3 className='my-3'>Фильтр / Поиск</h3>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId='formGridEmail'>
						<Form.Label>Поиск</Form.Label>
						<Form.Control
							type='text'
							placeholder='Введите модель автомобиля...'
							onChange={searchCarHandle}
							value={searchText}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Год выпуска</Form.Label>
						<Form.Control
							value={
								yearSelected.option ? yearSelected.value : yearSelected.value
							}
							as='select'
							onChange={yearFilteredHandle}
						>
							<option value=''>Все</option>
							<option value={[2006, 2010]}>2006-2010</option>
							<option value={[2011, 2015]}>2011-2015</option>
							<option value={[2016, 2020]}>2016-2020</option>
							<option value={[2021, 2025]}>2021-2025</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Тип топлива</Form.Label>
						<Form.Control
							value={
								fuelSelected.option ? fuelSelected.value : fuelSelected.value
							}
							as='select'
							onChange={fuelFilterHandle}
						>
							<option value=''>Все</option>
							<option value='diesel'>diesel</option>
							<option value='petrol'>petrol</option>
							<option value='electric'>electric</option>
							<option value='hybrid'>hybrid</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Тип кузова</Form.Label>
						<Form.Control
							value={
								bodyTypeSelected.option
									? bodyTypeSelected.value
									: bodyTypeSelected.value
							}
							as='select'
							onChange={bodyTypeFilterHandle}
						>
							<option value=''>Все</option>
							<option value='Hatchback'>Hatchback</option>
							<option value='Estate'>Estate</option>
							<option value='SUV'>SUV</option>
							<option value='Sedan'>Sedan</option>
							<option value='MPV'>MPV</option>
							<option value='Pickup'>Pickup</option>
							<option value='Cabrio'>Cabrio</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Стоимость</Form.Label>
						<Form.Control
							value={
								priceSelected.option ? priceSelected.value : priceSelected.value
							}
							as='select'
							onChange={priceFilterHandle}
						>
							<option value=''>Все</option>
							<option value={[500000, 999999]}>
								500 000 &#8381; - 999 999 &#8381;
							</option>
							<option value={[1000000, 1499999]}>
								1 000 000 &#8381; - 1 499 999 &#8381;
							</option>
							<option value={[1500000, 1999999]}>
								1 500 000 &#8381; - 1 999 999 &#8381;
							</option>
							<option value={[2000000, 2499999]}>
								2 000 000 &#8381; - 2 499 999 &#8381;
							</option>
							<option value={[2500000, 2999999]}>
								2 500 000 &#8381; - 2 999 999 &#8381;
							</option>
							<option value={[3000000, 3999999]}>
								3 000 000 &#8381; - 3 999 999 &#8381;
							</option>
							<option value={[4000000, 4999999]}>
								4 000 000 &#8381; - 4 999 999 &#8381;
							</option>
							<option value={[5000000, 5999999]}>
								5 000 000 &#8381; - 5 999 999 &#8381;
							</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
			</Form>
		</div>
	);
};

const mapStateToProps = state => ({
	searchText: state.filterReducer.searchText,
	bodyTypeSelected: state.filterReducer.bodyTypeSelected,
	fuelSelected: state.filterReducer.fuelSelected,
	priceSelected: state.filterReducer.priceSelected,
	yearSelected: state.filterReducer.yearSelected,
});

export default connect(mapStateToProps, {
	searchCar,
	bodyTypeFilter,
	fuelFilter,
	yearFilter,
	priceFilter,
})(FilterForm);
