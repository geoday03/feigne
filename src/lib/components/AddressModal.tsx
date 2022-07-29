import { Button } from '@chakra-ui/react';
import { LocationIcon } from 'lib/Icons/LocationIconSet';

export default function DeliveryLocation() {
	return (
		<Button
			size='md'
			p='0'
			backgroundColor='rgba(0,0,0,0)'
			onFocus={(e) =>
				(e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)')
			}
			_hover={{ backgroundColor: 'rgba(0,0,0,0)' }}
			leftIcon={
				<LocationIcon
					backgroundColor='rgba(0,0,0,0)'
					height='24px'
					width='24px'
					fill='text.dark'
				/>
			}
			color='text.dark'
		>
			1337 Got Root Avenue
		</Button>
	);
}
