'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import React, { useState, useEffect } from 'react'
import axios from '../lib/axios'
import jwtDecode from 'jwt-decode'

export function ProfileCard() {
  const [userId, setUserId] = useState('')
  const [totalscore, setTotalScore] = useState(null)
  const [scoreHistory, setScoreHistory] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [open, setOpen] = React.useState(false)

  const handleOpen = async () => {
    setOpen(!open)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleClose = async () => {
    const response = await axios.get('/api/auth/token')
    const decoded = jwtDecode(response.data.accessToken)
    // Kembalikan data ke data awal
    setUsername(decoded.username)
    setEmail(decoded.email)

    // Tutup modal setelah mengonfirmasi pembatalan
    handleOpen(false)
  }

  const updateData = async () => {
    const updateUserData = await axios.put(`api/player/${userId}`, {
      username: username,
      email: email,
    })
    if (updateUserData.status !== 200) {
      console.log('Save data has failed')
    } else {
      console.log('Save data has success')
    }
    handleOpen(false)
  }

  const handleModalCancel = async () => {
    const confirmCancel = window.confirm(
      'Apakah Anda yakin ingin membatalkan perubahan? Data akan kembali ke data awal.'
    )

    if (confirmCancel) {
      const response = await axios.get('/api/auth/token')
      const decoded = jwtDecode(response.data.accessToken)
      // Kembalikan data ke data awal
      setUsername(decoded.username)
      setEmail(decoded.email)

      // Tutup modal setelah mengonfirmasi pembatalan
      handleOpen(false)
    }
  }

  const TABLE_HEAD = ['No', 'Game', 'Result', 'Date']

  const TABLE_ROWS = [
    {
      username: 'John Michael',
      game: 'Rock,Paper,Scissors',
      score: '4000',
      achievement: '',
    },
    {
      username: 'John Michael',
      game: 'Rock,Paper,Scissors',
      score: '4000',
      achievement: '',
    },
    {
      username: 'John Michael',
      game: 'Rock,Paper,Scissors',
      score: '4000',
      achievement: '',
    },
    {
      username: 'John Michael',
      game: 'Rock,Paper,Scissors',
      score: '4000',
      achievement: '',
    },
    {
      username: 'John Michael',
      game: 'Rock,Paper,Scissors',
      score: '4000',
    },
  ]

  useEffect(() => {
    refreshToken()
  }, [])

  const refreshToken = async () => {
    try {
      const response = await axios.get('/api/auth/token')
      const decoded = jwtDecode(response.data.accessToken)
      setUserId(decoded.userId)
      setUsername(decoded.username)
      setEmail(decoded.email)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (userId) {
      getScore()
      getHistoryData()
    }
  }, [userId])

  const getScore = async () => {
    console.log(userId)
    try {
      const response = await axios.get(`/api/score/${userId}`)
      const score = response.data.totalScore
      console.log(score)
      setTotalScore(score)
    } catch (error) {
      console.log(error)
    }
  }

  const getHistoryData = async () => {
    console.log(userId)
    try {
      const getHistory = await axios.get(`/api/score/history/${userId}`)
      const historydata = getHistory.data.score
      setScoreHistory(historydata)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Modal */}

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-bold text-2xl">
          Edit Profile
          <button
            onClick={handleClose}
            className="ml-auto text-gray-500 hover:text-red-500 hover:bg-transparent focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </DialogHeader>
        <DialogBody divider>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold mb-1"
            >
              Username:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={username}
              onChange={handleUsernameChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-500 font-bold mb-1"
            >
              Email:
            </label>
            <input
              type="string"
              id="string"
              name="string"
              value={email}
              onChange={handleEmailChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleModalCancel}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={updateData}
            className="hover:bg-blue-400 hover:text-white"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/* End Modal  */}

      <div className="col-span-1">
        <Card
          style={{ width: '400px', height: '520px' }}
          className="mx-auto my-auto relative bg-gray-200"
        >
          <Card
            style={{ width: '380px', height: '500px' }}
            className="mx-auto my-auto relative"
          >
            <CardHeader
              floated={false}
              className="h-40 w-40 rounded-full overflow-hidden mx-auto"
            >
              <img
                src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                alt="profile-picture"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-center"
              >
                {username}
              </Typography>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-gray-500 font-bold mb-1 mb-0 pr-4"
                >
                  Email:
                </label>{' '}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="score"
                  className="text-gray-500 font-bold mb-1 mb-0 pr-4"
                >
                  Score
                </label>{' '}
                <input
                  type="integer"
                  id="integer"
                  value={totalscore * 1000}
                  name="password"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
              <Button
                className="mx-auto my-2 bg-black text-white hover:bg-gray-500 font-bold py-2 px-4 rounded block"
                onClick={handleOpen}
              >
                Edit
              </Button>
            </CardBody>
          </Card>
        </Card>
      </div>
      <div className="col-span-2">
        <div className="mr-10">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-center"
          >
            GAME HISTORY
          </Typography>
          <Card className="h-full w-full overflow-scroll mr-5">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={index}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scoreHistory.map(
                  ({ username, gameId, score, createdAt }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1
                    const classes = isLast
                      ? 'p-4'
                      : 'p-4 border-b border-blue-gray-50'

                    return (
                      <tr key={username}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {index + 1}.
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {gameId === 1
                              ? 'Gunting Batu Kertas'
                              : 'Kertas Gunting Batu'}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {score === 1 ? 'win' : 'lose'}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {createdAt}
                          </Typography>
                        </td>
                      </tr>
                    )
                  }
                )}
              </tbody>
            </table>
          </Card>
          <div className="max-w-screen-xl mx-auto mt-5">
            <div className="w-full md:w-10/11 lg:w-8/9 xl:w-7/9 mx-auto grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gray-200 p-2 md:p-4 rounded-lg">
                <div className="bg-white p-2 md:p-4 rounded-lg">
                  <h4 className="text-2xl font-semibold text-center mb-4">
                    Motto :
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 text-center">
                    &quot;Gamer extraordinaire, navigating the virtual realms
                    with the precision of a sharpshooter and the strategy of a
                    grandmaster. From the pixelated landscapes of retro classics
                    to the immersive worlds of modern RPGs, I&apos;ve conquered
                    them all. When I&apos;m not grinding levels or chasing high
                    scores, you can find me theorycrafting the perfect loadout
                    or analyzing game mechanics. My gaming rig is a work of art,
                    and my collection of in-game achievements is a testament to
                    my dedication. Whether I&apos;m leading my squad to victory
                    in online battles or uncovering hidden secrets in
                    single-player adventures, I&apos;m always up for the next
                    epic gaming quest. Let&apos;s team up and conquer virtual
                    worlds together!&quot; 🎮✨ #GamerLife #GameOn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
