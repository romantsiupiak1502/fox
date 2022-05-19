import type { NextPage, GetStaticProps } from 'next';

import httpClient from 'services/ApiClient';
import { IconTextButton, RightArrow } from 'components';
import { links } from 'consts';

import { ProductCard, HeadWrapper } from './__components';
import Link from 'next/link';
import Image from 'next/image';

const prod = [
  { id: 1, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 1', price: 100 },
  { id: 2, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 2', price: 100 },
  { id: 3, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 3', price: 100 },
  { id: 4, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 4', price: 100 },
  { id: 5, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 5', price: 100 },
  { id: 6, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 6', price: 100 },
  { id: 7, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 7', price: 100 },
  { id: 8, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 8', price: 100 },
  { id: 9, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 9', price: 100 },
  { id: 10, imageUrl: require('assets/watch.jpeg'), title: 'apple watch 10', price: 100 },
];

const Home: NextPage = (): JSX.Element => {
  return (
    <HeadWrapper title="FOX | home ">
      <Image src={require('assets/banner.png')} width={1280} height={700} alt="banner img" />
      <div className="flex justify-between py-4">
        <div className="text-xl text-blue">Top Products</div>
        <Link href={links.products} passHref>
          <IconTextButton text="See all products" icon={<RightArrow />} />
        </Link>
      </div>
      <div className="max-w-7xl grid grid-rows-2 grid-cols-5 gap-6">
        {prod.map((item) => (
          <ProductCard key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
        ))}
      </div>
      <div>
        <div className="text-xl text-blue py-4">Novelty</div>
        <div className="max-w-7xl flex gap-5 flex-nowrap overflow-x-auto whitespace-nowrap">
          {prod.map((item) => (
            <ProductCard key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
          ))}
        </div>
      </div>
    </HeadWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await httpClient.request({ url: 'users', method: 'GET' });
  return {
    props: {
      users: res.data,
    },
  };
};

export default Home;
