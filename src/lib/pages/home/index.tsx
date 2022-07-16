import {
	Box,
	Center,
	Flex,
	Image,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'lib/app/hooks';
import ProductCard from 'lib/components/ProductCard';
import { getProducts } from 'lib/features/products/productSlice';
import { useEffect } from 'react';

const Home = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.productReducer);

	useEffect(() => {
		dispatch(getProducts({ resultLimit: 5, category: 'womensClothing' }));
	}, [useAppSelector]);

	return (
		<Box display={{ md: 'flex' }} flexDirection='column' overflowX='clip'>
			<Image
				src='/feigne-member-exclusive.png'
				height='auto'
				width='100%'
				fit='cover'
				margin='0 auto'
			/>
			<Box
				mt='-25%'
				width='1500'
				height='400px'
				zIndex='1'
				bgGradient={`linear(to-b, #1998ff, ${useColorModeValue(
					'background.light',
					'background.dark',
				)})`}
			/>

			<Box width='60%' mx='6%' mt='-24%' pt='20px' pb='20px' zIndex='2'>
				<Text fontFamily='sectionTitle'>Recommended Items</Text>
				{Object.keys(products).length > 0 ? (
					<Flex direction='row' gap='2%' alignContent='center'>
						{products.map((product) => (
							<Box
								p='25px'
								backgroundColor={useColorModeValue(
									'background.light',
									'background.dark',
								)}
							>
								<ProductCard
									key={product.id}
									id={product.id}
									title={product.title}
									price={product.price}
									image={product.image}
								/>
							</Box>
						))}
					</Flex>
				) : (
					<Box>ok</Box>
				)}
			</Box>
		</Box>
	);
};

export default Home;
