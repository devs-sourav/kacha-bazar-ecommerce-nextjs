"use client"
 
import * as React from "react"
import toast, { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "next-themes"
export default function Providers({ children }) {
    return (
      <ThemeProvider attribute="class"  defaultTheme="dark">
            <Toaster position="top-center" reverseOrder={false}/>
            {children}
      </ThemeProvider>
    )
  }