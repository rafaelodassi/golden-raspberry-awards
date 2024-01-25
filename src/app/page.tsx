'use client';

import { useState } from 'react';

import { LayoutDashboard, AlignJustify } from 'lucide-react';
import Image from 'next/image';

import ListMovies from '../components/CardList/ListMovies';
import MaxMinWinInterval from '../components/CardList/MaxMinWinInterval';
import StudiosWinCount from '../components/CardList/StudiosWinCount';
import WinByYear from '../components/CardList/WinByYear';
import YearsMultipleWin from '../components/CardList/YearsMultipleWin';

export default function Home() {
  const [preview, setPreview] = useState<'dashboard' | 'list'>('dashboard');

  return (
    <main className='h-screen flex flex-col'>
      <header className='bg-gray-950 px-16 pt-10 shadow-[0_2px_9px_0px_rgba(0,0,0,0.45)] max-md:px-8'>
        <div className='flex flex-col gap-5 items-start justify-center max-md:items-center'>
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
            <button
              onClick={() => setPreview('dashboard')}
              className={`px-5 text-white text-sm transition-[color] bg-transparent hover:text-white/50 h-[50px] flex items-center justify-center gap-2 border-b-4 border-transparent ${
                preview === 'dashboard' ? `border-white/80` : ``
              }`}
            >
              <LayoutDashboard />
              Dashboard
            </button>
            <button
              onClick={() => setPreview('list')}
              className={`px-5 text-white text-sm transition-[color] bg-transparent hover:text-white/50 h-[50px] flex items-center justify-center gap-2 border-b-4 border-transparent ${
                preview === 'list' ? `border-white/80` : ``
              }`}
            >
              <AlignJustify />
              Lista
            </button>
          </div>
        </div>
      </header>
      <main className='px-16 py-10 w-full flex-1 overflow-y-auto overflow-x-hidden max-md:px-8'>
        {preview === 'dashboard' ? (
          <>
            <div className='flex items-center justify-center gap-5 max-md:flex-col'>
              <YearsMultipleWin />
              <StudiosWinCount />
            </div>
            <div className='mt-5'>
              <MaxMinWinInterval />
            </div>
            <div className='mt-5'>
              <WinByYear />
            </div>
          </>
        ) : (
          <ListMovies />
        )}
      </main>
    </main>
  );
}
