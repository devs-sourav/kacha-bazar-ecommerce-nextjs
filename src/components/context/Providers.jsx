"use client"
 
import * as React from "react"
import { ThemeProvider } from "next-themes"
export default function Providers({ children }) {
    return (
          <ThemeProvider attribute="class"  defaultTheme="dark">{children}</ThemeProvider>
    )
  }