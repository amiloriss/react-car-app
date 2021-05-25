import { SEARCH_CAR } from './type';

export const searchCar = val => {
	return {
		type: SEARCH_CAR,
		payload: val,
	};
};
