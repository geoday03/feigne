import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import type React from 'react';

import customTheme from 'lib/styles/theme';

interface ChakraProps {
	children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
	return (
		<ChakraProvider colorModeManager={localStorageManager} theme={customTheme}>
			{children}
		</ChakraProvider>
	);
};
