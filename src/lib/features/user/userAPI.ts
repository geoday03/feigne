import { useAppSelector } from 'lib/app/hooks';
import { Product } from 'lib/types/Product';

function getCartItem(title: string) {
	const { cart } = useAppSelector((state) => state.userReducer);
	var item;

	cart.map((cartItem, i) => {
		if (cartItem.title == title) {
			item = cart[i];
		}
	});

	return item;
}

export const userAPI = { getCartItem };
