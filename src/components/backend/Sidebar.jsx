'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Minus,Slack, Users, LayoutDashboard, User, ExternalLink, Truck, Warehouse, SquareUser ,Settings,LogOut,ChevronDown,PartyPopper,NotebookPen,Layers2,SendToBack,Images,ChevronRight,Speech,CreditCard} from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  

  

export default function Sidebar({showSideBar,setShowSideBar}) {

    const pathname = usePathname()
    const [downArrow, setDownArrow] = useState(false)

    

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
                    title:"Products",
                    icon: NotebookPen,
                    href:'/dashboard/products',
                },
                {
                    title:"Categories",
                    icon: Layers2,
                    href:'/dashboard/categories', 
                },
                {
                    title:"Attributes",
                    icon: SendToBack,
                    href:'/dashboard/attributes', 
                },
                {
                    title:"Coupons",
                    icon: PartyPopper,
                    href:'/dashboard/coupons', 
                },
                {
                    title:"Store Sliders",
                    icon:Images,
                    href:'/dashboard/banners', 
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
            title:"Our Communinty",
            icon:Speech ,
            href:"/dashboard/community"
        },
        {
            title:"Wallet",
            icon:CreditCard,
            href:"/dashboard/wallets"
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
    console.log(showSideBar)


    return (
        <div className={showSideBar ? 'sm:block mt-20 sm:mt-0 shadow-lg z-50 bg-slate-50 dark:bg-slate-700 space-y-5 w-64 h-screen dark:text-slate-300 text-slate-800 fixed top-0 left-0 overflow-y-scroll': 'hidden sm:block shadow-lg z-50 bg-slate-50 dark:bg-slate-700 space-y-5 w-64 h-screen dark:text-slate-300 text-slate-800 fixed top-0 left-0 overflow-y-scroll'}>
            <div className='px-6 pt-6'>
                <Link onClick={()=>setShowSideBar(false)} href="/dashboard">
                    <Image className='w-32' src='/logo-light.png' alt='Logo' width={200} height={200}/>
                </Link>
            </div>

            <div className="pt-9 pb-8 space-y-4 flex flex-col">
                {
                sideBarLinks.map((item, index) => {
                    const Icon = item.icon;
                    const datalink = item?.href;

                    return (
                        <React.Fragment key={index}>
                            {item?.submenu ?
                                (
                                    <div className='flex px-6 space-x-5  items-center dark:text-slate-50 text-slate-700 cursor-pointer'>
                                        <Collapsible>
                                            <CollapsibleTrigger>
                                                <div onClick={() => setDownArrow(!downArrow)} className={downArrow ? 'flex items-center space-x-20' : 'flex items-center space-x-3'}>
                                                    {
                                                        downArrow ?
                                                            (   
                                                                
                                                                <div className='flex items-center space-x-3 '>
                                                                    <Icon />
                                                                    <span className='text-md font-semibold'>{item.title}</span>
                                                                </div>

                                                            )
                                                            :
                                                            (
                                                                <div className='flex items-center space-x-3'>
                                                                    <Icon />
                                                                    <span className='text-md font-semibold'>{item.title}</span>
                                                                </div>
                                                            )
                                                    }
                                                    {
                                                        item?.submenu == true &&
                                                        <>
                                                            {
                                                                downArrow ?
                                                                    <ChevronRight  className='rotate-90'/>
                                                                    :
                                                                    <ChevronRight  />
                                                            }

                                                        </>
                                                    }
                                                </div>

                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <div className='dark:bg-slate-900  bg-slate-200   rounded-md flex flex-col space-y-1 mt-3'>
                                                    {
                                                        item.submenulist.map((subitem, subindex) => {
                                                            const Menuicon = subitem.icon
                                                            const href = subitem.href


                                                            return(
                                                                <Link onClick={()=>setShowSideBar(false)} href={href} key={subindex} className={pathname == href ? 'subindex text-green-700 dark:text-green-700 hover:text-slate-700 dark:hover:text-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800 hover:bg-slate-100 text-sm px-4 py-1 cursor-pointer flex space-x-2 bg-slate-100 items-center'
                                                                :
                                                                'subindex text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 dark:hover:bg-slate-800 hover:bg-slate-100 text-sm px-4 py-1 cursor-pointer flex space-x-2 items-center'
                                                                }>
                                                                    <span><Menuicon className='w-4 h-4'/></span>
                                                                    <p className='font-semibold'>{subitem.title}</p>
                                                                </Link>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </CollapsibleContent>
                                        </Collapsible>
                                    </div>
                                )
                                :
                                (
                                    <Link onClick={()=>setShowSideBar(false)} key={index} className={datalink == pathname ? 'flex transition-all   text-green-500 px-6 py-2 space-x-16 items-center border-l-8 border-green-500' : 'flex px-6 space-x-3 py-2 items-center dark:text-slate-50 text-slate-800 cursor-pointer'} href={datalink}>
                                        <div className={'flex items-center space-x-3 '}>
                                            {
                                                downArrow ?
                                                    (
                                                        <div className='flex items-center space-x-3 '>
                                                            <Icon />
                                                            <span className='text-md font-semibold'>{item.title}</span>
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className='flex items-center space-x-3'>
                                                            <Icon />
                                                            <span className='text-md font-semibold'>{item.title}</span>
                                                        </div>
                                                    )
                                            }

                                            {
                                                item?.submenu == true &&
                                                <>
                                                    {
                                                        downArrow ?
                                                            <ChevronDown className='rotate-180  text-green-500' />
                                                            :
                                                            <ChevronDown />
                                                    }

                                                </>
                                            }
                                        </div>
                                    </Link>
                                )
                            }
                        </React.Fragment>
                    );
                })
            }
            <div className='px-6 py-2'>
                <button className='px-6 py-2 rounded-lg text-slate-50 bg-green-600 hover:bg-green-700 flex items-center space-x-3'>
                    <LogOut/>  
                    <span>Logout</span>
                </button>
            </div>


        </div>
        </div>
  )
}
