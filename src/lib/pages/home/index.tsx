import { Box, Flex, useColorMode } from '@chakra-ui/react';

const Home = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			display={{ md: 'flex' }}
			alignItems='center'
			minHeight='70vh'
			gap={8}
			mb={8}
			w='75%'
			backgroundColor={
				colorMode === 'light'
					? 'background.light'
					: 'background.light'
			}
		>
			<Box></Box>

			<Flex></Flex>
		</Box>
	);
};

export default Home;
