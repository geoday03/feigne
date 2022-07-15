import { StarIcon } from '@chakra-ui/icons';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import ShoppingBagFilledIcon from 'lib/Icons/ShoppingBagFilledIcon';
import { ProductCardConfig } from 'lib/types/ProductCardConfig';

export default function ProductCard(product: ProductCardConfig) {
	return (
		<Box
			maxW='full'
			minWidth='200px'
			boxSizing='border-box'
			alignContent='center'
		>
			<Image
				ml='auto'
				mr='40%'
				maxHeight='150px'
				maxWidth='full'
				borderRadius='xl'
				borderWidth='5px'
				src={product.image}
			/>

			<Box>
				<Box mt='5px' fontWeight='semibold' as='h4' noOfLines={1}>
					{product.price}
				</Box>

				<Box mt='1px'>
					<Text noOfLines={2}>{product.title.substring(0, 35) + '...'}</Text>
				</Box>
				<Flex
					as='span'
					color='gray.600'
					fontSize='xs'
					alignContent='center'
					gap='3px'
					mt='1px'
					flexDirection='row'
				>
					<ShoppingBagFilledIcon fill='white' boxSize='15px' width='15px' />
					<Text>One day delivery</Text>
				</Flex>

				<Box display='flex' mt='2' alignItems='center'>
					{Array(5)
						.fill('')
						.map((_, i) => (
							<StarIcon key={i} color={i < 4 ? 'teal.500' : 'gray.300'} />
						))}
					<Box as='span' ml='2' color='gray.600' fontSize='sm'>
						420 reviews
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
