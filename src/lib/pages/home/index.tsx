import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'lib/app/hooks';
import ProductCard from 'lib/components/ProductCard';
import { getProducts } from 'lib/features/products/productSlice';
import { useEffect } from 'react';

const Home = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.productReducer);

	useEffect(() => {
		dispatch(getProducts({ resultLimit: 7 }));
	}, []);

	return (
		<Box
			display={{ md: 'flex' }}
			flexDirection='column'
			p='20px'
			minHeight='70vh'
			gap='10px'
			mb='55px'
			ml='auto'
			mr='auto'
			w='full'
		>
			{'Row'}
			<Box pt='20px' pb='20px'>
				{Object.keys(products).length > 0 ? (
					<Flex direction='row' gap='17px' alignContent='center'>
						{products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								image={product.image}
							/>
						))}
					</Flex>
				) : (
					<Box>ok</Box>
				)}
			</Box>
			Row
			<Box pt='20px' pb='15px'>
				{Object.keys(products).length > 0 ? (
					<Flex direction='row' gap='17px' alignContent='ce'>
						{products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								image={product.image}
							/>
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
