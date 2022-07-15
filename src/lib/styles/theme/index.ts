import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
	styles: {
		global: (props: string[]) => ({
			body: {
				bg: mode('background.light', 'background.dark'),
			},
		}),
	},
	fonts,
	colors,
	config,
	components,
});

export default customTheme;
