import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2,  Volume1, Maximize2, Sidebar } from 'lucide-react';
import Image from 'next/image';
import Footer from './components/Footer';



export default function Home() {
  return (
    <><><Sidebar /><main className="flex-1 p-6">
      <div className='flex items-center gap-4'>
        <button className=' rounded-full bg-black/40 p-1'>
          <ChevronLeft />
        </button>
        <button className=' rounded-full bg-black/40 p-1'>
          <ChevronRight />
        </button>
      </div>
      <div className='mt-6 pt-6 text-3xl font-semibold'>
        Good afternoon
      </div>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3' />
          <strong>Bonda 3</strong>
          <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
            <Play fill='bg-black' />
          </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3' />
          <strong>Bonda 3</strong>
          <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
            <Play fill='bg-black' />
          </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3' />
          <strong>Bonda 3</strong>
          <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
            <Play fill='bg-black' />
          </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3' />
          <strong>Bonda 3</strong>
          <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
            <Play fill='bg-black' />
          </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3' />
          <strong>Bonda 3</strong>
          <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
            <Play fill='bg-black' />
          </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3' />
          <strong>Bonda 3</strong>
          <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
            <Play fill='bg-black' />
          </button>
        </a>

      </div>

      <div className='mt-6 pt-6 text-2xl font-semibold'>
        Made for Kaio Barbosa
      </div>

      <div className='grid grid-cols-5 gap-4 mt-4'>
        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3' />
          <strong className='font-semibold'>Daily mix 4</strong>
          <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3' />
          <strong className='font-semibold'>Daily mix 4</strong>
          <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3' />
          <strong className='font-semibold'>Daily mix 4</strong>
          <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3' />
          <strong className='font-semibold'>Daily mix 4</strong>
          <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3' />
          <strong className='font-semibold'>Daily mix 4</strong>
          <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

      </div>
    </main></><Footer /></>
   
  )
}
