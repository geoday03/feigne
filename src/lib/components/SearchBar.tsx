import {
	useColorMode,
	Input,
	InputGroup,
	InputLeftElement,
	useDisclosure,
	Fade,
} from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons';
import { FocusEventHandler, useState } from 'react';

export default function SearchBar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onToggle } = useDisclosure({
		defaultIsOpen: true,
	});
	const [text, setText] = useState('');

	const textColor = colorMode === 'light' ? 'text._light' : 'text._dark';

	const placeholderTextColor =
		colorMode === 'light' ? 'placeholder.light' : 'placeholder.dark';

	const backColor =
		'light' === colorMode ? 'background.light' : 'background.dark';

	const inputAnimate = {
		slideIn: {
			keyframes: [{}, { paddingLeft: '15px' }],
			animationOptions: {
				duration: 100,
				iterations: 1,
				fill: 'forwards',
			},
		},
		slideOut: {
			keyframes: [{}, { paddingLeft: '40px' }],
			animationOptions: {
				duration: 100,
				iterations: 1,
				fill: 'forwards',
			},
		},
	};

	const focusEvent: FocusEventHandler<HTMLInputElement> = (e) => {
		onToggle();

		(e.target as HTMLInputElement).animate(
			inputAnimate.slideIn.keyframes,
			inputAnimate.slideOut.animationOptions as KeyframeEffectOptions,
		);
	};

	const blurEvent: FocusEventHandler<HTMLInputElement> = (e) => {
		onToggle();

		(e.target as HTMLInputElement).animate(
			inputAnimate.slideOut.keyframes,
			inputAnimate.slideOut.animationOptions as KeyframeEffectOptions,
		);
	};

	return (
		<InputGroup backgroundColor={backColor} borderRadius='2rem'>
			<InputLeftElement
				pointerEvents='none'
				boxSize='1rem'
				py='1.6rem'
				pl='1.5rem'
				children={
					<Fade in={isOpen} unmountOnExit={true}>
						<Search2Icon
							color={colorMode === 'light' ? 'text.light' : 'text.dark'}
						/>
					</Fade>
				}
			/>

			<Input
				className='searchbar-input'
				placeholder='Search clothing, jewelery, electronics, and Among Us'
				borderColor='rgba(0,0,0,0)'
				fontFamily='body'
				fontWeight='600'
				color={textColor}
				_placeholder={{
					color: placeholderTextColor,
					paddingLeft: isOpen === true ? '5px' : '0',
				}}
				backgroundColor={backColor}
				fontSize='15px'
				focusBorderColor={textColor}
				borderBottom='0'
				height='3.5rem'
				onFocus={focusEvent}
				onBlur={blurEvent}
			/>
		</InputGroup>
	);
}
