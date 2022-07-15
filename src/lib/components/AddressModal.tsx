import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	useColorMode,
} from '@chakra-ui/react';
import { LocationIcon } from 'lib/Icons/LocationIconSet';

export default function DeliveryLocation() {
	const addressProvided = true;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Button
				onClick={onOpen}
				backgroundColor='rgba(0,0,0,0)'
				_hover={{ backgroundColor: 'rgba(0,0,0,0)' }}
				mx='1rem'
				leftIcon={
					<LocationIcon
						backgroundColor='rgba(0,0,0,0)'
						height='24px'
						width='24px'
						fill='text.dark'
					/>
				}
				color='text.dark'
			>
				1337 Got Root Avenue
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant='ghost'>Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);

	return <div>DeliveryLocation</div>;
}
