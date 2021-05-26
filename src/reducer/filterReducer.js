import {
	SEARCH_CAR,
	BODY_TYPE_FILTER,
	FUEL_FILTER,
	YEAR_FILTER,
	PRICE_FILTER,
} from '../action/type';

const initialState = {
	searchText: '',
	bodyTypeSelected: {
		option: false,
		value: '',
	},
	fuelSelected: {
		option: false,
		value: '',
	},
	yearSelected: {
		option: false,
		value: '',
	},
	priceSelected: {
		option: false,
		value: '',
	},
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_CAR:
			return {
				...state,
				searchText: action.payload,
				bodyTypeSelected: {
					option: true,
					value: '',
				},
				fuelSelected: {
					option: true,
					value: '',
				},
				priceSelected: {
					option: true,
					value: '',
				},
				yearSelected: {
					option: true,
					value: '',
				},
			};
		case BODY_TYPE_FILTER:
			return {
				...state,
				searchText: '',
				bodyTypeSelected: {
					option: false,
					value: action.payload,
				},
				fuelSelected: {
					option: true,
					value: '',
				},
				priceSelected: {
					option: true,
					value: '',
				},
				yearSelected: {
					option: true,
					value: '',
				},
			};
		case FUEL_FILTER:
			return {
				...state,
				searchText: '',
				bodyTypeSelected: {
					option: true,
					value: '',
				},
				fuelSelected: {
					option: false,
					value: action.payload,
				},
				yearSelected: {
					option: true,
					value: '',
				},
				priceSelected: {
					option: true,
					value: '',
				},
			};
		case YEAR_FILTER:
			return {
				...state,
				searchText: '',
				bodyTypeSelected: {
					option: true,
					value: '',
				},
				fuelSelected: {
					option: true,
					value: '',
				},
				yearSelected: {
					option: false,
					value: action.payload,
				},
				priceSelected: {
					option: true,
					value: '',
				},
			};
		case PRICE_FILTER:
			return {
				...state,
				searchText: '',
				bodyTypeSelected: {
					option: true,
					value: '',
				},
				fuelSelected: {
					option: true,
					value: '',
				},
				yearSelected: {
					option: true,
					value: '',
				},
				priceSelected: {
					option: false,
					value: action.payload,
				},
			};
		default:
			return state;
	}
};

export default filterReducer;
