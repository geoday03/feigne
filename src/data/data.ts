import amongUsDolls from 'data/among_us/AmongUsDolls-ProductData.json';
import amongUsToys from 'data/among_us/AmongUsToys-ProductData.json';

const amongUsProducts = {
	amongUsDolls: amongUsDolls.amongUsDolls,
	amongUsToys: amongUsToys.amongUsToys,
};

import computerMonitors from './electronics/ComputerMonitors-ProductData.json';
import gamingHeadsets from './electronics/GamingHeadsets-ProductData.json';
import gamingLaptops from './electronics/GamingLaptops-ProductData.json';
import ramSticks from './electronics/RAMSticks-ProductData.json';
import SSDs from './electronics/SolidStateHardDrives-ProductData.json';

const electronicProducts = {
	computerMonitors: computerMonitors.computerMonitors,
	gamingHeadsets: gamingHeadsets.gamingHeadsets,
	gamingLaptops: gamingLaptops.gamingLaptops,
	ramSticks: ramSticks.ramSticks,
	SSDs: SSDs.SSDs,
};

import jewelryProducts from './jewelry/Jewelry-ProductData.json';

import mensJackets from './mens_clothing/MensJackets-ProductData.json';
import mensPants from './mens_clothing/MensPants-ProductData.json';
import mensShirts from './mens_clothing/MensShirts-ProductData.json';

const mensClothingProducts = {
	mensJackets: mensJackets.mensJackets,
	mensPants: mensPants.mensPants,
	mensShirts: mensShirts.mensShirts,
};

import womensJackets from './womens_clothing/WomensJackets-ProductData.json';
import womensPants from './womens_clothing/WomensPants-ProductData.json';
import womensShirts from './womens_clothing/WomensShirts-ProductData.json';

const womensClothingProducts = {
	womensJackets: womensJackets.womensJackets,
	womensPants: womensPants.womensPants,
	womensShirts: womensShirts.womensShirts,
};

const products = {
	amongUsProducts: amongUsProducts,
	electronicProducts: electronicProducts,
	jewelryProducts: jewelryProducts,
	mensClothingProducts: mensClothingProducts,
	womensClothingProducts: womensClothingProducts,
};

export default products;
