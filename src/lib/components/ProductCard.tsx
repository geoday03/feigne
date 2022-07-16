import { StarIcon } from '@chakra-ui/icons';
import {
	Box,
	Image,
	Text,
	Flex,
	AspectRatio,
	Center,
	Stack,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import ShoppingBagFilledIcon from 'lib/Icons/ShoppingBagFilledIcon';
import { ProductCardConfig } from 'lib/types/ProductCardConfig';

export default function ProductCard(product: ProductCardConfig) {
	return (
		<Center flexDirection='column'>
			<Box maxW={'200px'} w={'full'} pos={'relative'}>
				<Box
					pos={'relative'}
					mb='10px'
					backgroundColor='#ffffff'
					width='200px'
					borderRadius='xl'
				>
					<Image
						src={product.image}
						alt={product.title}
						height='170px'
						borderRadius='lg'
						object-fit='cover'
						ml='auto'
						mr='auto'
					/>
				</Box>

				<Stack>
					<Box fontWeight='semibold' as='h4' noOfLines={1}>
						{product.price}
					</Box>

					<Box mt='1px'>
						<Text noOfLines={2}>{product.title}</Text>
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
						<ShoppingBagFilledIcon
							fill={useColorModeValue('background.dark', 'background.light')}
							boxSize='15px'
							width='15px'
						/>
						<Text color={useColorModeValue('gray.700', 'gray.500')}>
							One day delivery
						</Text>
					</Flex>

					<Box display='flex' mt='2' alignItems='center'>
						{Array(5)
							.fill('')
							.map((_, i) => (
								<StarIcon key={i} color={i < 4 ? 'teal.500' : 'gray.300'} />
							))}
						<Box
							as='span'
							ml='2'
							color={useColorModeValue('gray.700', 'gray.500')}
							fontSize='sm'
						>
							420 reviews
						</Box>
					</Box>
				</Stack>
			</Box>
		</Center>
	);
}
