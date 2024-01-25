'use client';

import { useState } from 'react';

import ListMovies from '../components/CardList/ListMovies';
import MaxMinWinInterval from '../components/CardList/MaxMinWinInterval';
import StudiosWinCount from '../components/CardList/StudiosWinCount';
import WinByYear from '../components/CardList/WinByYear';
import YearsMultipleWin from '../components/CardList/YearsMultipleWin';
import Header from '../components/Header';

export default function Home() {
  const [preview, setPreview] = useState<'dashboard' | 'list'>('dashboard');

  return (
    <main className='h-screen flex flex-col'>
      <Header
        preview={preview}
        onChangePreview={(value) => setPreview(value)}
      />
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
