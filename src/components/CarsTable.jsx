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
					return (
						<tr key={el.id}>
							<td>{el.brand}</td>
							<td>{el.model}</td>
							<td>{el.year}</td>
							<td>{el.fuel}</td>
							<td>{el.bodyType}</td>
							<td>{el.price}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

const mapStateToProps = state => {
	return {
		cars: state.cars,
	};
};

export default connect(mapStateToProps)(CarsTable);
