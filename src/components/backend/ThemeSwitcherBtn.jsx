"use client";

import React from 'react'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcherBtn() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted) return null
  return (
      <button className='w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200' onClick={() => setTheme(theme === 'dark'? 'light' :'dark')}>{theme === 'dark' ? <Sun className='text-slate-50'/> : <Moon className='text-green-600'/>}</button>
  )
}
