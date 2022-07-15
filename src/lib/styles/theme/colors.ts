import {
	DeepPartial,
	Theme,
	useColorModeValue,
} from '@chakra-ui/react';

/** extend additional color here */
const extendedColors = {
	brand: {
		primary: '#0061A8',
		secondary: '#A13333',
		sub: '#24292f',
		sub_dark: '#161b22',
	},
	background: {
		light: '#fff',
		dark: '#0d1117',
	},
	text: {
		light: '#343538',
		dark: '#fff',
	},
	placeholder: {
		light: '#79818d',
		dark: '#b5bac1',
	},
	cart: {
		green: '#0aad0a',
	},
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
	...overridenChakraColors,
	...extendedColors,
};
