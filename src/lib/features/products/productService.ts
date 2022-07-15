import products from 'data/data';
import { GetProductsConfig } from 'lib/types/ProductRequestConfig';

const getProducts = async (config: GetProductsConfig) => {
	var res = [];

	if (config.category) {
		switch (config.category) {
			// Products
			case 'amongUsDolls':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.amongUsProducts.amongUsDolls[i]);
				}

			case 'amongUsToys':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.amongUsProducts.amongUsToys[i]);
				}

			case 'computerMonitors':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.electronicProducts.computerMonitors[i]);
				}

			case 'gamingHeadset':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.electronicProducts.gamingHeadsets[i]);
				}

			case 'gamingLaptops':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.electronicProducts.gamingLaptops[i]);
				}

			case 'ramSticks':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.electronicProducts.ramSticks[i]);
				}

			case 'SSDs':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.electronicProducts.SSDs[i]);
				}

			case 'jewelry':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.jewelryProducts.jewelry[i]);
				}

			case 'mensJackets':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.mensClothingProducts.mensJackets[i]);
				}

			case 'mensShirts':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.mensClothingProducts.mensShirts[i]);
				}

			case 'mensPants':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.mensClothingProducts.mensPants[i]);
				}

			case 'womensJackets':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.womensClothingProducts.womensJackets[i]);
				}

			case 'womensShirts':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.womensClothingProducts.womensShirts[i]);
				}

			case 'womensPants':
				for (let i = 0; i < config.resultLimit; i++) {
					res.push(products.womensClothingProducts.womensPants[i]);
				}

			// Categories
			case 'amongUs':
				var lastPush = 0;
				for (let i = 0; i < config.resultLimit; i++) {
					if (lastPush == Object.keys(products.amongUsProducts).length) {
						lastPush = 0;
					}
					res.push(Object.values(products.amongUsProducts)[lastPush][i]);
					lastPush++;
				}

			case 'electronics':
				var lastPush = 0;
				for (let i = 0; i < config.resultLimit; i++) {
					if (lastPush == Object.keys(products.electronicProducts).length) {
						lastPush = 0;
					}
					res.push(Object.values(products.electronicProducts)[lastPush][i]);
					lastPush++;
				}

			case 'mensClothing':
				var lastPush = 0;
				for (let i = 0; i < config.resultLimit; i++) {
					if (lastPush == Object.keys(products.mensClothingProducts).length) {
						lastPush = 0;
					}
					res.push(Object.values(products.mensClothingProducts)[lastPush][i]);
					lastPush++;
				}

			case 'womensClothing':
				var lastPush = 0;
				for (let i = 0; i < config.resultLimit; i++) {
					if (lastPush == Object.keys(products.womensClothingProducts).length) {
						lastPush = 0;
					}
					res.push(Object.values(products.womensClothingProducts)[lastPush][i]);
					lastPush++;
				}
		}
	}

	if (!config.category) {
		for (let i = 0; i < config.resultLimit; i++) {
			const randomCategoryIndex = Math.floor(
				Math.random() * Object.keys(products).length,
			);

			const randomSubCategoryIndex = Math.floor(
				Math.random() *
					Object.keys(Object.values(products)[randomCategoryIndex]).length,
			);

			const randomProductIndex = Math.floor(
				Math.random() *
					Object.keys(
						Object.values(Object.values(products)[randomCategoryIndex]),
					)[randomSubCategoryIndex].length,
			);

			res.push(
				Object.values(
					Object.values(Object.values(products)[randomCategoryIndex])[
						randomSubCategoryIndex
					],
				)[randomProductIndex],
			);
		}
	}

	return res;
};

const getProductById = async (id: string) => {
	for (let i = 0; i < Object.keys(products).length; i++) {
		for (let j = 0; j < Object.keys(Object.values(products)[i]).length; j++) {
			const productArray = Object.values(
				Object.values(Object.values(products)[i]),
			)[j];

			for (let x = 0; x < productArray.length; x++) {
				if (productArray[x].id == id) {
					return productArray[x];
				}
			}
		}
	}

	return 'Product not found by ID';
};

const productService = { getProducts, getProductById };
export default productService;
