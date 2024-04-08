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
        <main className='pt-10 pb-6 px-8 bg-slate-100 min-h-screen dark:bg-slate-900 text-slate-50 mt-16'>{children}</main>
      </div>
    </div>
  )
}
