"use client"
 
import * as React from "react"
import  { Toaster } from 'react-hot-toast';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ThemeProvider } from "next-themes"
import { ourFileRouter } from "../../app/api/uploadthing/core.js";

export default function Providers({ children }) {
    return (
      <ThemeProvider attribute="class"  defaultTheme="dark">
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}/>
            <Toaster position="top-center" reverseOrder={false}/>
            {children}
      </ThemeProvider>
    )
  }