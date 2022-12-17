import Image from 'next/image';
import { Tab } from '@headlessui/react';
import Masonry from 'react-masonry-css';
import ocean1 from '../public/ocean1.jpg';
import ocean2 from '../public/ocean2.jpg';
import ocean3 from '../public/ocean3.jpg';
import ocean4 from '../public/ocean4.jpg';
import ocean5 from '../public/ocean5.jpg';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import LightGalleryComponent from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useRef } from 'react';
import type { LightGallery } from 'lightgallery/lightgallery';

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'oceans',
    display: 'Oceans',
  },
  {
    key: 'forests',
    display: 'Forests',
  },
];
const images = [ocean1, ocean2, ocean3, ocean4, ocean5];

const Categories = () => {
  const galleryRef = useRef<LightGallery | null>(null);

  return (
    <div className='flex flex-col items-center justify-center h-full z-10'>
      {' '}
      <Tab.Group>
        <Tab.List className='flex items-center gap-12'>
          {tabs.map(({ key, display }) => (
            <Tab
              key={key}
              className='p-2 outline-none uppercase 
              text-lg'
            >
              {({ selected }) => (
                <span className={selected ? 'text-white' : 'text-stone-600'}>
                  {display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          className='h-full max-w-[900px] 
          w-full p-2 sm:p-4 
          my-6 bg-opacity-30'
        >
          <Tab.Panel>
            <Masonry
              className='flex gap-4'
              columnClassName=''
              breakpointCols={2}
            >
              {images.map((image, idx) => (
                <Image
                  key={image.src}
                  src={image}
                  alt='View of the ocean'
                  className='my-4 hover:opacity-70 transition 
                  cursor-pointer'
                  placeholder='blur'
                  onClick={() => {
                    galleryRef.current?.openGallery(idx);
                  }}
                />
              ))}
            </Masonry>
            <LightGalleryComponent
              onInit={(ref) => {
                if (ref) {
                  galleryRef.current = ref.instance;
                }
              }}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              dynamic
              dynamicEl={images.map((image) => ({
                src: image.src,
                thumb: image.src,
              }))}
            />
          </Tab.Panel>
          <Tab.Panel>Oceans Photos</Tab.Panel>
          <Tab.Panel>Forests Photos</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Categories;
