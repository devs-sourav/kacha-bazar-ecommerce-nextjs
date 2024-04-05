import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {

    const { title,sales,color,icon:Icon} = data

  return (
    <div className={`rounded-lg shadow-lg text-white py-6 px-4 flex items-center text-center flex-col gap-2 ${color}`}>
        <Icon/>
        <h4 className='text-[14px]'>{title}</h4>
        <h2 className='text-lg lg:text-[20px] font-semibold'>${sales}</h2>
    </div>
  )
}
