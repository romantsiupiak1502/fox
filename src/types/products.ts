export type ProductsType = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
};

export interface LandingProductsType {
  banner: string;
  topProducts: ProductsType[];
  newProducts: ProductsType[];
}
