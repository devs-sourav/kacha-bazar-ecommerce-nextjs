'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Slack, Users, LayoutDashboard, User, ExternalLink, Truck, Warehouse, SquareUser ,Settings,LogOut,ChevronDown} from 'lucide-react'
import { usePathname } from 'next/navigation'

  

export default function Sidebar() {

    const pathname = usePathname()
    console.log(pathname)

    

    const sideBarLinks = [
        {
            title:"Dashboard",
            icon:LayoutDashboard,
            href:"/dashboard"
        },
        {
            title:"Catalog",
            icon: Slack,
            href:'/dashboard/catalog',
            submenu:true,
            submenulist:[
                {
                    title:"Attributes"
                },
                {
                    title:"Banners"
                },
                {
                    title:"Categories"
                },
                {
                    title:"Products"
                },
        ]
        },
        {
            title:"Customers",
            icon:Users,
            href:"/dashboard/customers"
        },
        {
            title:"Markets",
            icon:Warehouse,
            href:"/dashboard/markets"
        },
        {
            title:"Farmers",
            icon:SquareUser,
            href:"/dashboard/farmers"
        },
        {
            title:"Orders",
            icon:Truck,
            href:"/dashboard/orders"
        },
        {
            title:"Our Staff",
            icon:User,
            href:"/dashboard/staff"
        },
        {
            title:"Settings",
            icon:Settings,
            href:"/dashboard/settings"
        },
        {
            title:"Online Store",
            icon:ExternalLink,
            href:"/dashboard/onlinestore"
        },
    ]


  return (
      <div className='shadow-lg z-50 bg-slate-50 dark:bg-slate-700 space-y-6 w-64 h-screen dark:text-slate-50 text-slate-800 fixed top-0 left-0'>
        <div className='px-6 py-4'>
          <Link href="#">
            <Image className='w-32' src='/logo-light.png' alt='Logo' width={200} height={200}/>
          </Link>
        </div>

        <div className="space-y-3 flex flex-col">
            {
                sideBarLinks.map((item,index)=>{

                   const Icon=item.icon
                   const datalink=item?.href
                    return (

                        <Link key={index} className={datalink == pathname ? 'flex transition-all   text-green-500 px-6 py-2 space-x-16 items-center border-l-8 border-green-500':'flex px-6 space-x-3 py-2 items-center dark:text-slate-50 text-slate-800' } href={datalink ? datalink : '#'}>
                            <div className='flex items-center space-x-3'>
                                <Icon/>
                                <span className='text-md font-semibold'>{item.title}</span>
                            </div>
                            {
                                item?.submenu == true &&
                                <ChevronDown/>

                            }
                        </Link>
                    )
                })
            }
            <div className='px-6 py-2'>
                <button className='px-6 py-2 rounded-lg bg-green-600 flex items-certer space-x-3'>
                    <LogOut/>  
                    <span>Logout</span>
                </button>
            </div>


        </div>
      </div>
  )
}
