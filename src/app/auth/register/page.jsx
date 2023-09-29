import RegisterFormPage from '@/components/Auth/Register/RegisterForm'
import FooterWithSocialLinks from '@/components/Navigation/Footer'
import NavbarSimple from '@/components/Navigation/Navbar'
import React from 'react'
// import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <main>
      <NavbarSimple />
      <RegisterFormPage />
      <FooterWithSocialLinks />
    </main>
  )
}
