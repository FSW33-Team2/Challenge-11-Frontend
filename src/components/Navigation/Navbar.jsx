'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserToken } from '@/redux/features/Auth/UserTokenSlice'
import { LoginAction, LogoutAction } from '@/redux/features/Auth/AuthReducer'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function NavbarSimple() {
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.authreducer.isLoggedIn)
  let refreshToken = Cookies.get('refreshToken')

  useEffect(() => {
    dispatch(fetchUserToken())
    AuthCheck()
  }, [refreshToken, dispatch])

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:8000/api/auth/logout')
      dispatch(LogoutAction())
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const AuthCheck = () => {
    if (refreshToken !== undefined) {
      dispatch(LoginAction())
    }
  }

  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Navbar className="mx-auto max-w-full px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Link
            href="/"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            LOGO
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <Link
                href="/"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <Link
                href="/gamelist"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Game List
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <Link
                href="/leaderboard"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                Leaderboard
              </Link>
            </Typography>
            {isLoggedIn ? (
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <div className="flex items-center ">
                  <Link
                    href="/profile"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Profile
                  </Link>
                  <div className="mx-1">/</div>

                  <button
                    onClick={Logout}
                    className=" hover:text-blue-500 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </Typography>
            ) : (
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <div className="flex items-center ">
                  <Link
                    href="/auth/login"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Login
                  </Link>
                  <div className="mx-1">/</div>

                  <Link
                    href="/auth/register"
                    className=" hover:text-blue-500 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </Typography>
            )}
          </ul>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              href="/"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              href="/gamelist"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Game List
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              href="/leaderboard"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Leaderboard
            </Link>
          </Typography>
          {isLoggedIn ? (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <div className="flex items-center ">
                <Link
                  href="/profile"
                  className="hover:text-blue-500 transition-colors"
                >
                  Profile
                </Link>
                <div className="mx-1">/</div>

                <button
                  onClick={Logout}
                  className=" hover:text-blue-500 transition-colors"
                >
                  Logout
                </button>
              </div>
            </Typography>
          ) : (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <div className="flex items-center ">
                <Link
                  href="/auth/login"
                  className="hover:text-blue-500 transition-colors"
                >
                  Login
                </Link>
                <div className="mx-1">/</div>

                <Link
                  href="/auth/register"
                  className=" hover:text-blue-500 transition-colors"
                >
                  Register
                </Link>
              </div>
            </Typography>
          )}
        </ul>
      </Collapse>
    </Navbar>
  )
}
