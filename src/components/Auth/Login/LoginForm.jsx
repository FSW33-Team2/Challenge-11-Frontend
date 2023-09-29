'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from '../../lib/axios'
import { Spinner, Typography } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { clickButton } from '@/redux/features/DynamicButton'

export default function LoginFormPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { btnState } = useSelector((state) => state.button)
  // eslint-disable-next-line no-unused-vars
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const [state, setState] = React.useState({
    email: '',
    password: '',
  })
  const [msg, setMsg] = useState('')

  const handleChange = (evt) => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  const handleOnSubmit = async (evt) => {
    evt.preventDefault()

    const { email, password } = state

    try {
      // eslint-disable-next-line no-unused-vars
      const postLogin = await axios.post('/api/auth/login', {
        email: email,
        password: password,
      })
      await dispatch(clickButton({ btnState: 'loading' }))
      setTimeout(() => {
        dispatch(clickButton({ btnState: 'success' }))
        router.push('/profile')
      }, 3000)
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div
      style={{ backgroundColor: '' }}
      className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleOnSubmit}
          disabled={isButtonDisabled}
          className="space-y-6"
        >
          <p className="text-red-600 text-center">{msg}</p>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={state.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={state.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="text-sm">
              <Typography
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Typography>
            </div>
          </div>
          {btnState === 'loading' ? (
            <Spinner className="flex w-full justify-center rounded-md font-semibold leading-6 text-white shadow-sm" />
          ) : (
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link
            href="/auth/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <button disabled={isButtonDisabled}>Register here</button>
          </Link>
        </p>
      </div>
    </div>
  )
}
