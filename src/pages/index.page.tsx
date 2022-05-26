import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';

import { IconTextButton, LinkButton, RightArrow } from 'components';
import { links } from 'consts';
import { landingProductsRes } from 'mocks/mockData';
import { LandingProductsType } from 'types';

import { ProductCard, HeadWrapper } from './__components';

interface HomeProps {
  products: LandingProductsType;
}

const Home: NextPage<HomeProps> = ({ products }): JSX.Element => {
  return (
    <HeadWrapper title="FOX | home ">
      <Image src={require('assets/banner.png')} width={1280} height={700} alt="banner img" />
      <div className="flex justify-between py-4">
        <div className="text-xl text-blue">Top Sales</div>
        <LinkButton path={links.products}>
          <IconTextButton text="See all products" icon={<RightArrow />} />
        </LinkButton>
      </div>
      <div className="w-full grid grid-cols-5 gap-6 justify-center">
        {products?.topProducts.map((item) => (
          <ProductCard key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
        ))}
      </div>
      {/*<div className="max-w-7xl">*/}
      {/*  <div className="text-xl text-blue py-4">New Products</div>*/}
      {/*  <div className="w-full grid grid-cols-10 gap-6 overflow-auto whitespace-nowrap">*/}
      {/*    {products?.newProducts.map((item) => (*/}
      {/*      <ProductCard key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </HeadWrapper>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      products: landingProductsRes,
    },
  };
};

export default Home;
