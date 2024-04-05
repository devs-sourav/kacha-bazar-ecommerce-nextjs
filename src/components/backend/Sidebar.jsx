'use client'
import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
      <div className='shadow-lg z-50 bg-slate-50 dark:bg-slate-700 space-y-6 w-60 h-screen dark:text-slate-50 text-slate-800 p-3 fixed top-0 left-0'>
          <Link className='mb-6' href="#">LOGO</Link>
          <div className="space-y-3 flex flex-col">
              <Link href="#">Dashboard</Link>
              <Link href="#">Catalog</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Markets</Link>
              <Link href="#">Farmers</Link>
              <Link href="#">Orders</Link>
              <Link href="#">Staff</Link>
              <Link href="#">Settings</Link>
              <Link href="#">Online Store</Link>
          </div>
      </div>
  )
}
