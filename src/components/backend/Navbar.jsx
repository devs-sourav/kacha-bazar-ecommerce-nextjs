'use client'
import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center z-20 justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed left-0 top-0 w-full '>
        <button className='pl-[240px]'><AlignJustify/></button>
        <div className="flex space-x-3">
            <button><Sun/></button>
            <button><Bell/></button>
            <button><User/></button>
        </div>
    </nav>
  )
}
