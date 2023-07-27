import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2,  Volume1, Maximize2 } from 'lucide-react';
import Image from 'next/image';



export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-3'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full' />
        <div className='w-3 h-3 bg-green-500 rounded-full' />
        </div>
        <nav className="space-y-5 mt-10">
          <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
            <HomeIcon />
            Home
          </a>
          <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
            <Search />
            Search
          </a>
          <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
            <Library />
            Your library
          </a>
        </nav>

        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col space-y-3'>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily mix #13</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Hits da Internet</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Sofrências antigas</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>DOPE.</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Tik-Tok Viral</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Dance Fruits Music</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Discover Weekly</a>
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>VMZ</a>
     
        </nav>
        </aside>
      <main className="flex-1 p-6">
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
        <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3'/>
        <strong>Bonda 3</strong>
        <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
        </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3'/>
        <strong>Bonda 3</strong>
        <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
        </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3'/>
        <strong>Bonda 3</strong>
        <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
        </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3'/>
        <strong>Bonda 3</strong>
        <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
        </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3'/>
        <strong>Bonda 3</strong>
        <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black  ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black' />
        </button>
        </a>

        <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={"/album2.jpg"} width={126} height={126} alt='Imagem do album2 Bonda 3'/>
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
        <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3'/>
        <strong className='font-semibold'>Daily mix 4</strong>
        <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3'/>
        <strong className='font-semibold'>Daily mix 4</strong>
        <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

       <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3'/>
        <strong className='font-semibold'>Daily mix 4</strong>
        <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3'/>
        <strong className='font-semibold'>Daily mix 4</strong>
        <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src={"/album2.jpg"} className='w-full' width={120} height={120} alt='Imagem do album2 Bonda 3'/>
        <strong className='font-semibold'>Daily mix 4</strong>
        <span className='text-sm text-zinc-500'>Wallows, COIN, Girl in red and more</span>
        </a>

      </div>
      </main>

    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed w-full bottom-0 ">
       <div className='flex items-center gap-3'>
      <Image src={"/album2.jpg"} width={65} height={65} alt='Imagem do album2 Bonda 3'/>
      <div className='flex flex-col'>
        <strong className='font-normal'>Mas Existe um Lugar(Remix)</strong>
        <span className='text-xs text-zinc-400'>Cryzin, Manoel Gomes, Kaio Viana</span>
     </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-6'>
      <Shuffle size={20} className='text-zinc-200' />
      <SkipBack size={20} className='text-zinc-200'/>
      <button className=' w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
        <Play fill='bg-black' />
        </button>
        <SkipForward size={20} className='text-zinc-200'/>
        <Repeat size={20} className='text-zinc-200'/>
      </div>
      <div className='flex items-center gap-2 '>
        <span className='text-xs text-zinc-400'>0:25</span>
        <div className='h-1 rounded-full w-96 bg-zinc-600'>
        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
        </div> 
        <span className='text-xs text-zinc-400'>5:21</span>
      </div>
      </div>

      <div className=' flex items-center gap-4'>
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className='flex items-center gap-3'>
        <Volume1 size={20} />
        <div className='h-1 rounded-full w-24 bg-zinc-600 '>
        <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
        </div>
        <Maximize2 size={20} />
      </div>
      </div>

    </footer>
   </div>
  )
}
