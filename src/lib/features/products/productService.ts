import products from 'data/data';
import { GetProductsConfig } from 'lib/types/ProductRequestConfig';

const getProducts = async (config: GetProductsConfig) => {
	var res = [];

	if (config.categories) {
		if (config.indexingOrder) {
			switch (config.indexingOrder) {
				case 'asc':
					for (let i = 0; i < config.categories.length; i++) {
						for (
							let j = 0;
							j < config.resultLimit / config.categories.length;
							j++
						) {
							if (!config.categories[i].includes('/')) {
								for (let x = 0; x < products[i].length; x++) {
									const categoryName = config.categories[i];

									res.push(products[categoryName][x][j]);
								}
							}
						}
					}
			}
		}
	}

	return res;
};

getProducts({
	resultLimit: 3,
	categories: ['amongUsProducts'],
	indexingOrder: 'asc',
});

const productService = { getProducts };
export default productService;
