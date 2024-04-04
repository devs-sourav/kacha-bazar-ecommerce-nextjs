'use client'
import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import profile from '../../../public/profile.jpg'

export default function Navbar() {
  return (
    <nav className='flex items-center z-20 justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed left-0 top-0 w-full '>
        <button className='pl-[240px]'><AlignJustify className='text-green-600'/></button>
        <div className="flex space-x-3 ">
            <button><Sun className='text-green-600'/></button>

            <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg ">
            <Bell className='text-green-600'/>
            <span class="sr-only">Notifications</span>
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white bg-red-600 border-2 border-red-600 rounded-full top-0 end-5 dark:border-red-700">9</div>
            </button>

            {/* <button><User className='text-green-600'/></button> */}
            <button>
              <Image src={profile} alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
            </button>
        </div>
    </nav>
  )
}
