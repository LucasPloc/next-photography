import Head from 'next/head';
import Image from 'next/image';
import { Categories } from '../components';
import backgroundImg from '../public/photography-bg.jpg';

export default function Home() {
  return (
    <div className='h-full overflow-auto'>
      <Head>
        <title>Photo-Portfolio</title>
        <meta name='description' content='Steve Watt Photography' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>{' '}
      <div className='fixed left-0 top-0 bottom-0 z-0 w-full h-full'>
        {' '}
        <Image
          className='object-cover'
          fill
          key={'bcg-img'}
          src={backgroundImg}
          alt='background'
          placeholder='blur'
        />
      </div>
      <div
        className='fixed left-0 top-0 w-full h-full 
        z-10 from-stone-900 bg-gradient-to-t'
      ></div>
      <header
        className='flex items-center 
        h-[90px] px-10 fixed 
        w-full z-20 top-0'
      >
        <h1
          className='uppercase text-lg 
          font-medium'
        >
          Photography Portfolio
        </h1>
      </header>
      <main className='relative pt-[110px] z-10'>
        {' '}
        <Categories />
      </main>
      <footer
        className='h-[60px] flex justify-center 
        items-center z-20 relative'
      >
        Photo by{' '}
        <a href='https://unsplash.com/@dannyg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          DANNY G
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/s/photos/photographer-dark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
      </footer>
    </div>
  );
}
