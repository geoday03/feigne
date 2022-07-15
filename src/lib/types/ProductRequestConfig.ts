export type GetProductsConfig = {
	resultLimit: number;
	categories?: string[];
	indexingOrder?: 'asc' | 'desc' | 'rand';
	sortResults?: string;
};
