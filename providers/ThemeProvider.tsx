"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"
import { ReactNode } from "react"

export function ThemeProvider({children}:{children:ReactNode}){
    return <NextThemeProvider>{children}</NextThemeProvider>
}