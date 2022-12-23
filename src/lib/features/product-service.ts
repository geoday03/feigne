import products from "data/data";
import { Product } from "lib/types/product";
import { GetProductsConfig } from "lib/types/ProductRequestConfig";

const getProduct = (id: string) => {
  type categoryKey = keyof typeof products;

  let object;

  Object.keys(products).map((category) => {
    Object.keys(products[category as categoryKey]).map((subcategory) => {
      (
        products[category as categoryKey][
          subcategory as keyof typeof products[categoryKey]
        ] as Product[]
      ).map((product: Product) => {
        if (product.id == id) {
          object = product;
        }
      });
    });
  });

  return object;
};

const getProducts = (config: GetProductsConfig): Product[] => {
  let productList: Product[] = [];

  type categoryKey = keyof typeof products;

  Object.keys(products).map((category) => {
    Object.keys(products[category as categoryKey]).map((subcategory) => {
      if (subcategory == config.category) {
        Array.from(Array(config.resultLimit).fill(0).keys()).map((i) =>
          productList.push(
            products[category as categoryKey][
              subcategory as keyof typeof products[categoryKey]
            ][i]
          )
        );
      }
    });
  });

  return productList;
};

const getPIDs = () => {
  let PIDs: string[] = [];

  type categoryKey = keyof typeof products;
  type subCategoryKey = keyof typeof products[categoryKey];

  Object.keys(products).map((category) => {
    Object.keys(products[category as categoryKey]).map((subcategory) => {
      Object.keys(
        products[category as subCategoryKey][subcategory as subCategoryKey]
      ).map((key) => {
        PIDs.push(
          (
            products[category as categoryKey][subcategory as subCategoryKey][
              key
            ] as Product
          ).id
        );
      });
    });
  });

  return PIDs;
};

export const productService = { getProduct, getProducts, getPIDs };
