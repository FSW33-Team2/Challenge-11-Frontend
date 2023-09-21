'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'

export default function RegisterFormPage() {
  const router = useRouter()
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
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
    const { name, email, password, confPassword } = state

    try {
      await axios.post('http://localhost:8000/api/auth/register', {
        username: name,
        email: email,
        password: password,
        confPassword: confPassword,
      })
      router.push('/auth/login')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up here
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <p className="text-red-600 text-center">{msg}</p>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="name"
                value={state.name}
                onChange={handleChange}
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
                value={state.email}
                onChange={handleChange}
                type="email"
                autoComplete="email"
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
                value={state.password}
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                rePassword
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confPassword"
                name="confPassword"
                value={state.confPassword}
                onChange={handleChange}
                type="password"
                autoComplete="current-confPassword"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Submit
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Member ?{' '}
          <a
            href="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  )
}
