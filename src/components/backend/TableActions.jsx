import React from 'react'
import { Trash2,Search,Download } from 'lucide-react'
import Link from 'next/link'

export default function TableActions() {
  return (
    <div className="flex  justify-between py-6 px-12  dark:bg-slate-700 bg-slate-50 shadow-lg rounded-lg items-center gap-8 ">
        <button className='relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-800 rounded-lg group border border-green-600 hover:bg-green-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-600'>
        <Link className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex space-x-3" href="#">
            <Download />
            <span>Export</span>
        </Link>
        </button>
        {/* Search */}
        <div className=" flex-grow ">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
            </div>
            <input  type="text" id="table-search" className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full" placeholder="Search for items"/>
        </div>
        </div>
        <button className='flex items-center space-x-2 bg-red-600 text-white rounded-lg px-6 py-3'>
        <Trash2/>
        <span>Bulk Delete</span>
        </button>
    </div>
  )
}
