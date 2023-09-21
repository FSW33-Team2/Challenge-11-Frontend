import NavbarSimple from '@/components/Navigation/Navbar'
import { GameListPage } from '@/components/GameListPage/GameListPage'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import React from 'react'

// import { ThemeProvider } from "@material-tailwind/react";
export const metadata = {
  title: 'Game List',
}

export default function Home() {
  return (
    <main className="">
      <NavbarSimple />
      <GameListPage />
      <FooterWithSocialLinks />
    </main>
  )
}
