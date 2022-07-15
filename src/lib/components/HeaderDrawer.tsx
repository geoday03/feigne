import { HamburgerIcon } from '@chakra-ui/icons';
import {
	useDisclosure,
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Input,
	DrawerFooter,
	useColorMode,
	textDecoration,
	color,
} from '@chakra-ui/react';
import React from 'react';

export default function HeaderDrawer() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef(null);

	return (
		<>
			<Button
				ref={btnRef}
				onClick={onOpen}
				leftIcon={<HamburgerIcon boxSize='1.6rem' color='white' />}
				backgroundColor='rgba(0,0,0,0)'
				height='3.5rem'
				_hover={{ backgroundColor: 'rgba(0,0,0,0)' }}
			/>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='xs'
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder='Type here...' />
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
