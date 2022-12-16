import Head from 'next/head';
import Link from 'next/link';
import { Categories } from '../components';

export default function Home() {
  return (
    <div
      className='flex flex-col h-full 
    bg-bcg-img bg-center bg-cover'
    >
      <Head>
        <title>Photo-Portfolio</title>
        <meta name='description' content='Steve Watt Photography' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header
        className='flex items-center 
        justify-center h-[90px] px-6'
      >
        <h1>Photography Portfolio</h1>
      </header>
      <main className='grow'>
        {' '}
        <Categories />
      </main>
      <footer
        className='h-[60px] flex justify-center 
        items-center'
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
