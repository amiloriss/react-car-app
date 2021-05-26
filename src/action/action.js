import {
	BODY_TYPE_FILTER,
	SEARCH_CAR,
	FUEL_FILTER,
	YEAR_FILTER,
	PRICE_FILTER,
} from './type';

export const searchCar = val => ({ type: SEARCH_CAR, payload: val });

export const bodyTypeFilter = val => ({
	type: BODY_TYPE_FILTER,
	payload: val,
});

export const fuelFilter = val => ({
	type: FUEL_FILTER,
	payload: val,
});

export const yearFilter = val => ({
	type: YEAR_FILTER,
	payload: val,
});

export const priceFilter = val => ({
	type: PRICE_FILTER,
	payload: val,
});
