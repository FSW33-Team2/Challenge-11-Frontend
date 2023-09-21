import NavbarSimple from '@/components/Navigation/Navbar'
import LeaderboardPage from '@/components/Leaderboard/LeaderboardPage'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import React from 'react'

// import { ThemeProvider } from "@material-tailwind/react";
export const metadata = {
  title: 'Leaderboard',
}

export default function Home() {
  return (
    <main className="">
      <NavbarSimple />
      <LeaderboardPage />
      <FooterWithSocialLinks />
    </main>
  )
}
