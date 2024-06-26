
import React from 'react'

export default function SmallCard({data}) {
    const { title,sales,iconBg,iconColor,icon:Icon} = data
  return (
    <div className='rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-800'>
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center text-center`}>
                <Icon className={iconColor}/>
            </div>
            <div className="">
                <p>{title}</p>
                <h3 className='text-xl font-semibold'>{sales}</h3>
            </div>

        </div>
    </div>
  )
}
