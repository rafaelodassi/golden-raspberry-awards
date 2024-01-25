import { LayoutDashboard, AlignJustify } from 'lucide-react';
import Image from 'next/image';

interface Props {
  preview: 'dashboard' | 'list';
  onChangePreview: (value: 'dashboard' | 'list') => void;
}

const Header = ({ preview, onChangePreview }: Props) => {
  return (
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
            onClick={() => onChangePreview('dashboard')}
            className={`px-5 text-white text-sm transition-[color] bg-transparent hover:text-white/50 h-[50px] flex items-center justify-center gap-2 border-b-4 border-transparent ${
              preview === 'dashboard' ? `border-white/80` : ``
            }`}
          >
            <LayoutDashboard />
            Dashboard
          </button>
          <button
            onClick={() => onChangePreview('list')}
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
  );
};

export default Header;
