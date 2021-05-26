import {
	BODY_TYPE_FILTER,
	FUEL_FILTER,
	PRICE_FILTER,
	SEARCH_CAR,
	YEAR_FILTER,
} from '../action/type';
import { cars } from '../data';

const reducer = (state = { cars }, action) => {
	switch (action.type) {
		case SEARCH_CAR:
			const searchedCars = cars.filter(el =>
				(el.brand + el.model)
					.replaceAll(/\s/g, '')
					.toLowerCase()
					.includes(action.payload.replaceAll(/\s/g, '').toLowerCase())
			);
			return {
				...state,
				cars: searchedCars,
			};
		case BODY_TYPE_FILTER:
			const bodyTypeFiltered = cars.filter(el =>
				el.bodyType
					.replaceAll(/\s/g, '')
					.toLowerCase()
					.includes(action.payload.replaceAll(/\s/g, '').toLowerCase())
			);
			return {
				...state,
				cars: bodyTypeFiltered,
			};
		case FUEL_FILTER:
			const fuelFiltered = cars.filter(el =>
				el.fuel
					.replaceAll(/\s/g, '')
					.toLowerCase()
					.includes(action.payload.replaceAll(/\s/g, '').toLowerCase())
			);
			return {
				...state,
				cars: fuelFiltered,
			};
		case YEAR_FILTER:
			const years = action.payload.split(',');
			const yearFiltered = cars.filter(el => {
				if (action.payload === '') return cars;
				return el.year >= years[0] && el.year <= years[1];
			});
			return {
				...state,
				cars: yearFiltered,
			};
		case PRICE_FILTER:
			const prices = action.payload.split(',');
			const priceFiltered = cars.filter(el => {
				if (action.payload === '') return cars;
				return el.price >= prices[0] && el.price <= prices[1];
			});
			return {
				...state,
				cars: priceFiltered,
			};
		default:
			return state;
	}
};

export default reducer;
