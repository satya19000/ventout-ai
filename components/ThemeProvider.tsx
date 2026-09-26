'use client';import {useEffect} from 'react';
export default function ThemeProvider({children}:{children:React.ReactNode}){useEffect(()=>{const t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark')},[]);return children}
