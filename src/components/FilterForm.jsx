import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { searchCar } from '../action/action';

const FilterForm = ({ searchCar }) => {
	const inputHandle = e => {
		searchCar(e.target.value);
	};
	return (
		<div className='form-container mb-5 px-3 border rounded'>
			<h3 className='my-3'>Фильтр / Поиск</h3>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId='formGridEmail'>
						<Form.Label>Поиск</Form.Label>
						<Form.Control
							type='email'
							placeholder='Введите модель автомобиля...'
							onChange={inputHandle}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Год выпуска</Form.Label>
						<Form.Control as='select' defaultValue='Choose...'>
							<option></option>
							<option>...</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Тип топлива</Form.Label>
						<Form.Control as='select' defaultValue='Choose...'>
							<option>diesel</option>
							<option>petrol</option>
							<option>electric</option>
							<option>hybrid</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Тип кузова</Form.Label>
						<Form.Control as='select' defaultValue='Choose...'>
							<option>Hatchback</option>
							<option>Estate</option>
							<option>SUV</option>
							<option>Sedan</option>
							<option>MPV</option>
							<option>Pickup</option>
							<option>Cabrio</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Стоимость</Form.Label>
						<Form.Control as='select' defaultValue='Choose...'>
							<option></option>
							<option>...</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
			</Form>
		</div>
	);
};

export default connect(null, { searchCar })(FilterForm);
