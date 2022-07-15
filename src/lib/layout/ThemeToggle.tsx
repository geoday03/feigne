import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const textColor =
		colorMode === 'light' ? 'text._light' : 'text._dark';

	const backColor =
		'light' === colorMode
			? 'background.light'
			: 'background.dark';

	return (
		<IconButton
			ml='1rem'
			aria-label='theme toggle'
			color='brand.100'
			backgroundColor={backColor}
			_hover={{
				backgroundColor:
					colorMode === 'light'
						? 'background.dark'
						: 'background.light',
			}}
			icon={
				colorMode === 'light' ? (
					<RiMoonFill size='20px' />
				) : (
					<RiSunLine size='20px' />
				)
			}
			onClick={toggleColorMode}
		/>
	);
};

export default ThemeToggle;
