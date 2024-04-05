'use client'
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React, { Children } from 'react'

export default function Layout({children}) {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Navbar/>
        <main className='ml-60 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16'>{children}</main>
      </div>
    </div>
  )
}
