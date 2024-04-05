import React from 'react'
import SmallCard from './SmallCard'
import { Check, RefreshCw, ShoppingCart, Truck } from 'lucide-react'

export default function SmallCards() {

    const orderStates = [
        {
            title:'Today Orders',
            sales:'100',
            iconBg:'bg-orange-300 ',
            iconColor:'text-orange-600',
            icon:ShoppingCart
        },
        {
            title:'Orders Pending',
            sales:'90',
            iconBg:'bg-purple-300 ',
            iconColor:'text-purple-600',
            icon: RefreshCw
        },
        {
            title:'Order Processing',
            sales:'200',
            iconBg:'bg-blue-300 ',
            iconColor:'text-blue-600',
            icon:Truck
        },
        {
            title:'Orders Delivered',
            sales:'300',
            iconBg:'bg-green-300 ',
            iconColor:'text-green-600',
            icon:Check
        },
    ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-8 gap-4'>
        {
            orderStates.map((item,index)=>(
                <SmallCard data={item} key={index}/>
            ))
        }
    </div>
  )
}
