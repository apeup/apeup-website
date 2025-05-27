// src/app/fonts.ts
import { Zen_Dots, Inter } from 'next/font/google'

export const zenDots = Zen_Dots({
  subsets: ['latin'],
  weight: '400',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
