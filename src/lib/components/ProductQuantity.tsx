import { Button, Flex, SlideFade, useDisclosure } from '@chakra-ui/react';

export default function ProductQuantity(props: {
	quantity: number;
	setQuantity: any;
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex
			direction='row'
			width='30%'
			display='inline-flex'
			justifyContent='center'
			pr='1px'
		>
			<SlideFade in={isOpen} unmountOnExit={true} offsetY='0' offsetX='-20px'>
				<Button
					size='sm'
					onClick={() =>
						props.quantity != 1 && props.setQuantity(props.quantity - 1)
					}
				>
					-
				</Button>
			</SlideFade>

			<Button
				size='sm'
				onClick={(e) => (!isOpen && onOpen()) || (isOpen && onClose())}
			>
				{props.quantity}
			</Button>

			<SlideFade in={isOpen} unmountOnExit={true} offsetY='0' offsetX='20px'>
				<Button size='sm' onClick={() => props.setQuantity(props.quantity + 1)}>
					+
				</Button>
			</SlideFade>
		</Flex>
	);
}
