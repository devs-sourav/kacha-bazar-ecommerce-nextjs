import React from 'react'
import Heading from './Heading'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function PageHeader({title,LinkTitle,href}) {
  return (
    <div className="flex justify-between items-center py-4 mb-4">
    <Heading title={title}/>
    <Link className='flex items-center space-x-2 text-white bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-600/50 font-medium rounded-lg  px-5 py-2.5 text-center  dark:focus:ring-green-600/55 me-2 mb-2 text-base' href={href}>
      <Plus/>
      <span>{LinkTitle}</span>
    </Link>
  </div>
  )
}
