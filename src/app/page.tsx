import Image from 'next/image';

import MaxMinWinInterval from '../components/CardList/MaxMinWinInterval';
import StudiosWinCount from '../components/CardList/StudiosWinCount';
import WinByYear from '../components/CardList/WinByYear';
import YearsMultipleWin from '../components/CardList/YearsMultipleWin';

export default function Home() {
  return (
    <main className='h-screen relative'>
      <header className='h-48 bg-gray-950' />
      <main className='px-16 pb-14 absolute top-8 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center justify-center gap-3'>
            <Image
              className='invert'
              src='/img/logo.png'
              alt='Golden Raspberry Awards'
              width={50}
              height={50}
            />
            <h1 className='font-light text-xl text-white'>
              Golden Raspberry Awards
            </h1>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <button className='bg-white/15 rounded-full px-5 h-9 text-white text-sm'>
              Dashboard
            </button>
            <button className='bg-transparent rounded-full px-5 h-9 text-white text-sm hover:cursor-pointer hover:text-white/50 transition-all'>
              Lista
            </button>
          </div>
        </div>
        <div className='flex mt-6 items-center justify-center gap-5'>
          <YearsMultipleWin />
          <StudiosWinCount />
        </div>
        <div className='mt-5'>
          <MaxMinWinInterval />
        </div>
        <div className='mt-5'>
          <WinByYear />
        </div>
      </main>
    </main>
  );
}
