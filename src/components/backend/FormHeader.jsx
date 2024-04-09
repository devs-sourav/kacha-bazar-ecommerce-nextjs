import React from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function FormHeader({title}) {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between py-6 px-8 dark:bg-slate-600 bg-white dark:text-slate-50 text-slate-800 rounded-lg shadow mb-10">
        <h2 className='text-md font-bold'>{title}</h2>
        <button className='' onClick={()=>router.back()}><X/></button>
    </div>
  )
}
