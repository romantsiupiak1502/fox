export const formatPrice = (price: number, currency: string): string =>
  Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);
