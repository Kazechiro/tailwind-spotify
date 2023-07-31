import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume1, Maximize2 } from "lucide-react"
import Image from "next/image"


const Footer = () => {
  return (
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
  )
}

export default Footer;