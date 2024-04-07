'use client'
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React, { Children, useState } from 'react'

export default function Layout({children}) {

  const [showSideBar,setShowSideBar] = useState(false)

  return (
    <div className='flex'>
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
      <div className='flex-grow lg:ml-64 ml-0 min-h-screen bg-slate-100'>
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
        <main className='p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16'>{children}</main>
      </div>
    </div>
  )
}
