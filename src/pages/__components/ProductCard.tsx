import React from 'react';
import Image from 'next/image';

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price: number;
} & React.ComponentProps<'div'>;

const ProductCard = ({ imageUrl, title, price }: ProductCardProps): JSX.Element => {
  return (
    <div className="bg-white min-w-fit h-90 rounded-md p-4 inline">
      <Image src={imageUrl} width={200} height={200} />
      <div className="text-center py-4">{title}</div>
      <div className="text-xl">{`$${price}`}</div>
    </div>
  );
};

export default ProductCard;
