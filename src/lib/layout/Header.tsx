import { Center, Flex, Heading, Link } from '@chakra-ui/react';
import SubHeader from './SubHeader';
import SearchBar from 'lib/components/SearchBar';
import NextLink from 'next/link';
import HeaderDrawer from 'lib/components/HeaderDrawer';

import ThemeToggle from './ThemeToggle';
import AddressModal from 'lib/components/AddressModal';
import Cart from 'lib/components/Cart';
import ShoppingBagFilledIcon from 'lib/Icons/ShoppingBagFilledIcon';

const Header = () => {
	return (
		<Flex minWidth='max-content' flexDirection='column' position='sticky'>
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
							<ShoppingBagFilledIcon boxSize='1.65rem' fill='white' mr='-1px' />
							<Heading color='white' fontSize='1.6rem' letterSpacing='0'>
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
