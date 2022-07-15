import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function SubHeader() {
	return (
		<Flex
			backgroundColor={useColorModeValue('brand.sub', 'brand.sub_dark')}
			minWidth='max-content'
			alignItems='center'
			px='20%'
			py='10px'
			gap='7%'
			fontFamily='body'
			fontWeight='500'
			fontSize='15px'
			color='text.dark'
		>
			<NextLink href='/'>
				<Link>
					<Text>Home</Text>
				</Link>
			</NextLink>

			<NextLink href='/store/categories/clothing/men'>
				<Link>
					<Text>Men's Clothing</Text>
				</Link>
			</NextLink>

			<NextLink href='/store/categories/clothing/women'>
				<Link>
					<Text>Women's Clothing</Text>
				</Link>
			</NextLink>

			<NextLink href='/store/categories/jewelery'>
				<Link>
					<Text>Jewelery</Text>
				</Link>
			</NextLink>

			<NextLink href='/store/categories/electronics'>
				<Link>
					<Text>Electronics</Text>
				</Link>
			</NextLink>

			<NextLink href='/categories/among-us'>
				<Link>
					<Text>Among Us</Text>
				</Link>
			</NextLink>
		</Flex>
	);
}
