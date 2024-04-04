import React from 'react'
import LargeCard from './LargeCard'
import { CreditCard, Layers, ShoppingCart } from 'lucide-react'

export default function LargeCards() {

    const orderStates = [
        {
            title:'Today Orders',
            sales:'11000',
            color:'bg-green-600',
            icon:Layers
        },
        {
            title:'Yesterday Orders',
            sales:'12034',
            color:'bg-blue-600',
            icon:Layers
        },
        {
            title:'This Month',
            sales:'3556063',
            color:'bg-orange-600',
            icon:ShoppingCart
        },
        {
            title:'Last Month',
            sales:'3043646',
            color:'bg-purple-600',
            icon:CreditCard
        },
        {
            title:'All-Time Sales',
            sales:'85347346',
            color:'bg-yellow-600',
            icon:CreditCard
        },
    ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8 gap-4'>
        {
            orderStates.map((item,index)=>(
                <LargeCard className="bg-green-600" data={item} key={index}/>
            ))
        }
    </div>
  )
}
