export interface productList {
  tittle: string;
  type: string;
  price: string;
  img_slug: string;
}

// Query params
export interface queryProduct {
  page?: number;
  limit?: number;
  price?: Array<number>;
  keyword?: string;
  order?: Array<string>;
}
