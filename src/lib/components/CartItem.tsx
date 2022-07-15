import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'lib/app/hooks';
import { Product } from 'lib/types/product';
import { userAPI } from 'lib/features/user/userAPI';
import { useState } from 'react';
import ProductQuantity from './ProductQuantity';

export default function CartItem(props: {
	title: string;
	price: number;
	quantity: number;
	image: string;
}) {
	const [quantity, setQuantity] = useState(props.quantity);

	return (
		<Flex
			flexDirection='row'
			gap='.8rem'
			justifyContent='end'
			fontSize='14px'
			fontFamily='body'
		>
			<Box boxSize='4rem'>
				<Image
					height='4rem'
					src={props.image}
					alt={props.title}
					objectFit='cover'
				/>
			</Box>

			<Text boxSize='3rem' fontSize='12px' fontWeight='500' width='55%'>
				{props.title}
			</Text>

			<ProductQuantity quantity={quantity} setQuantity={setQuantity} />

			<Box boxSize='4rem' ml='auto'>
				${(props.price * quantity).toFixed(2)}
			</Box>
		</Flex>
	);
}
