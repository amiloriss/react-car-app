import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

const CarsTable = ({ cars }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Бренд</th>
					<th>Модель</th>
					<th>Год выпуска</th>
					<th>Тип топлива</th>
					<th>Тип кузова</th>
					<th>Стоимость</th>
				</tr>
			</thead>
			<tbody>
				{cars.map(el => {
					const { id, brand, model, year, fuel, bodyType, price } = el;
					const transformedPrice = price.toLocaleString().replace(/,/g, ' ');
					return (
						<tr key={id}>
							<td>{brand}</td>
							<td>{model}</td>
							<td>{year}</td>
							<td>{fuel}</td>
							<td>{bodyType}</td>
							<td>{transformedPrice} &#8381;</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

const mapStateToProps = state => {
	return {
		cars: state.reducer.cars,
	};
};

export default connect(mapStateToProps)(CarsTable);
