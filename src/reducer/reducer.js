import { SEARCH_CAR } from '../action/type';
import { cars } from '../data';

const initialState = {
	cars,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_CAR:
			console.log(action.payload);
			const filteredCars = cars.filter(el =>
				el.brand.toLowerCase().includes(action.payload.toLowerCase())
			);
			return {
				...state,
				cars: filteredCars,
			};
		default:
			return state;
	}
};

export default reducer;
