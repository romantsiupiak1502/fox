import type { NextPage } from 'next';

import { HeadWrapper } from 'pages/__components';
import Image from 'next/image';

const AboutUs: NextPage = (): JSX.Element => (
  <HeadWrapper title="FOX | About us ">
    <div className="flex flex-col justify-around space-x-3 items-center py-8 sm:flex-row">
      <div className="flex flex-col justify-around space-y-3 max-w-lg w-full h-full text-yellow text-center sm:text-left">
        <div>
          <p className="text-5xl">About us</p>
          <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
      </div>
      <div className="min-w-74 flex justify-center my-6">
        <Image src={require('assets/appleStore.jpeg')} width={400} height={500} className="object-cover" alt="store" />
      </div>
    </div>
    <div className="bg-dark m-auto max-w-lg p-4 rounded-md">
      <p className="text-yellow text-3xl text-center">Our Story</p>
      <p className="text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>
    </div>
    <div className="my-6">
      <p className="text-yellow text-5xl text-center sm:text-left">Our Values</p>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="text-white max-w-59">
          <p className="text-xl">Transparency</p>
          <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="text-white max-w-59">
          <p className="text-xl">Flexibility</p>
          <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="text-white max-w-59">
          <p className="text-xl">Accuracy</p>
          <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="text-white max-w-59">
          <p className="text-xl">Quality</p>
          <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>
  </HeadWrapper>
);

export default AboutUs;
