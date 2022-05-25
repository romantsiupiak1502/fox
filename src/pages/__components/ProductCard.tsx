import React from 'react';
import Image from 'next/image';

import { formatPrice } from 'utils';

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price: number;
} & React.ComponentProps<'div'>;

const ProductCard = ({ imageUrl, title, price }: ProductCardProps): JSX.Element => {
  return (
    <div className="inline-block bg-white h-90 rounded-md p-4 inline flex-shrink max-w-59">
      <Image src={imageUrl} width={200} height={200} className="flex justify-center" />
      <div className="py-4 whitespace-nowrap block overflow-hidden text-ellipsis">{title}</div>
      <div className="w-full h-px bg-black my-2"></div>
      <div className="text-xl text-blue flex justify-end">{formatPrice(price, 'USD')}</div>
    </div>
  );
};

export default ProductCard;
