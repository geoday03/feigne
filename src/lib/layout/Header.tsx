import {
	Box,
	Center,
	createIcon,
	Flex,
	Heading,
	Link,
} from '@chakra-ui/react';
import SubHeader from './SubHeader';
import SearchBar from 'lib/components/SearchBar';
import NextLink from 'next/link';
import HeaderDrawer from 'lib/components/HeaderDrawer';

import ThemeToggle from './ThemeToggle';
import AddressModal from 'lib/components/AddressModal';
import Cart from 'lib/components/Cart';

const Header = () => {
	const ShoppingBagFilledIcon = createIcon({
		displayName: 'ShoppingBagFilledIcon',
		viewBox: '-2 0 48 45',
		path: (
			<path d='M18 21.25q.5 0 .825-.3.325-.3.325-.8v-4.9h-2.3v4.9q0 .5.325.8.325.3.825.3Zm1.15-9.1V13h9.7v-.85q0-2.05-1.4-3.475Q26.05 7.25 24 7.25q-2.05 0-3.45 1.425-1.4 1.425-1.4 3.475ZM30 21.25q.5 0 .825-.3.325-.3.325-.8v-4.9h-2.3v4.9q0 .5.325.8.325.3.825.3ZM11.9 43q-1.2 0-2.05-.85Q9 41.3 9 40.1V15.9q0-1.2.85-2.05.85-.85 2.05-.85h4.95v-.85q0-3 2.075-5.075T24 5q3 0 5.075 2.075t2.075 5.075V13h4.95q1.2 0 2.05.85.85.85.85 2.05v24.2q0 1.2-.85 2.05-.85.85-2.05.85Z' />
		),
	});

	return (
		<Flex minWidth='max-content' flexDirection='column'>
			<Flex
				as='header'
				minWidth='max-content'
				alignItems='center'
				backgroundColor='brand.primary'
				padding='10px'
				gap='2rem'
			>
				<HeaderDrawer />

				<NextLink href='/'>
					<Link
						textDecor='none'
						_hover={{ textDecoration: 'none' }}
						width='15%'
						ml='-2rem'
					>
						<Center height='3.5rem' float='left'>
							<ShoppingBagFilledIcon
								boxSize='1.65rem'
								fill='white'
								mr='-1px'
							/>
							<Heading
								color='white'
								fontSize='1.6rem'
								letterSpacing='0'
							>
								feigne
							</Heading>
						</Center>
					</Link>
				</NextLink>

				<SearchBar />

				<AddressModal />

				<Cart />

				<ThemeToggle />
			</Flex>

			<SubHeader />
		</Flex>
	);
};

export default Header;
