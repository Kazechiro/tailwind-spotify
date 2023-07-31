import {Home as HomeIcon, Search, Library } from 'lucide-react';

import React from 'react'

const Sidebar = () => {
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
        </div>
        </div>
  )
}

export default Sidebar;