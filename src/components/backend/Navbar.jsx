'use client'
import React from 'react'
import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'

import Link from 'next/link'
// import profile from '../../../public/profile.jpg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx'
import ThemeSwitcherBtn from './ThemeSwitcherBtn'


export default function Navbar({setShowSideBar,showSideBar}) {
  return (
    <nav className='flex items-center z-20 justify-between bg-slate-50 dark:bg-slate-800 text-slate-50 h-20 px-8 py-4 fixed left-0 top-0 w-full shadow-lg'>
        <button onClick={()=>setShowSideBar(!showSideBar)} className='lg:pl-64  '><AlignJustify   className='text-green-600'/>
        
        </button>
        <Link className='sm:hidden' onClick={()=>setShowSideBar(false)} href='/dashboard'><Image className='w-24'  src="/logo-light.png" alt='logo-light' width={100} height={100}/></Link>
        <div className="flex space-x-3 relative">
            {/* <button><Sun className='text-green-600 '/>
            </button> */}
            <ThemeSwitcherBtn/>
            <DropdownMenu className="">
              <DropdownMenuTrigger>
                <div type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg ">
                <Bell className='text-green-600'/>
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-[14px] font-semibold text-white bg-red-600 border-2 border-red-600 rounded-full top-0 end-5 dark:border-red-700">9</div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" pl-4 py-2 mr-16 pr-4 bg-slate-50 dark:bg-slate-700">
                <DropdownMenuLabel>Notification</DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className='flex items-center space-x-4'>
                      <Image src="/profile.jpg" alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                      <div className="flex flex-col space-y-1">
                        <p className='text-ellipsis whitespace-nowrap'>Yellow Sweet Corn Stock Out,</p>
                        <div className="flex items-end  ">
                          <div className='flex items-center space-x-2'>
                            <p className='px-3 py-0.5 bg-red-700 text-white text-sm rounded-full'>Stock Out</p>
                            <p>Dec 12 2001  - 12.40PM</p>
                          </div>
                        </div>
                      </div>
                      <div className='cursor-pointer'> <X/> </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className='flex items-center space-x-4'>
                      <Image src="/profile.jpg" alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                      <div className="flex flex-col space-y-1">
                        <p className='text-ellipsis whitespace-nowrap'>Yellow Sweet Corn Stock Out,</p>
                        <div className="flex items-end  ">
                          <div className='flex items-center space-x-2'>
                            <p className='px-3 py-0.5 bg-green-700 text-white text-sm rounded-full'>Stock In</p>
                            <p>Dec 12 2001  - 12.40PM</p>
                          </div>
                        </div>
                      </div>
                      <div className='cursor-pointer'> <X/> </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>


            {/* <button><User className='text-green-600'/></button> */}

            <DropdownMenu className=''>
              <DropdownMenuTrigger>
                <div>
                  <Image src="/profile.jpg" alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='px-5 py-3 mr-3 bg-slate-50 dark:bg-slate-700'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className='flex cursor-pointer items-center space-x-2'>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <div className='flex cursor-pointer items-center space-x-2'>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Edit Profile</span>
                </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className='flex cursor-pointer items-center space-x-2'>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            

        </div>
    </nav>
  )
}
