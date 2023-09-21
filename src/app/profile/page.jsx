import { ProfileCard } from '@/components/Profile/Profile'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import NavbarSimple from '@/components/Navigation/Navbar'
import React from 'react'

export default function Home() {
  return (
    <main className="">
      <NavbarSimple />
      <br />
      <br />
      <ProfileCard />
      <br />
      <br />
      <FooterWithSocialLinks />
    </main>
  )
}
