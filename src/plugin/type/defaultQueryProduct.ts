import type { queryProduct } from "../type/productType";

let query: queryProduct = {
  limit: 10,
  page: 1,
  price: [10000, 250000],
  keyword: "",
  order: ["product_name", "ASC"],
};

export { query };
