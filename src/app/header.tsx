import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-gray-700 backdrop-blur-xl h-[70px] items-center flex px-4 border-b border-black/10'>
      <Link
        href='/'
        className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200'>
        jiyoonyee Blog
      </Link>
    </header>
  );
}
