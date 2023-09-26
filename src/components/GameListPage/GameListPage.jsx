'use client'
require('dotenv').config();

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import { fetchAllGames } from '@/redux/features/GamesByIdSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { insertHistory } from '@/redux/features/PlayedGames'
import cloudinary from 'cloudinary-core'

export function GameListPage() {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.allgames)
  const historyData = useSelector((state) => state.gamehistory.data)
  const [history, setHistory] = useState(historyData)
  const cl = new cloudinary.Cloudinary({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const hasHistory = () => {
    if (history.length !== 0) {
      return (
        <div className="w-full text-center text-black mt-[20px]">
          <Typography variant="h2">Your History</Typography>
        </div>
      )
    }
  }

  useEffect(() => {
    dispatch(fetchAllGames())
    hasHistory()
  }, [dispatch])

  const addToHistory = (gameData) => {
    setHistory([...history, gameData])
    dispatch(insertHistory({ data: gameData }))
  }

  return (
    <div className="w-full py-5">
      <div className="w-full text-center text-black">
        <Typography variant="h2">Game List</Typography>
      </div>
      {hasHistory()}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {history.map((data, index) => {
          return (
            <Card key={data.id} className="mt-6 w-full">
              <CardHeader color="blue-gray" className="relative h-56">
                <Link href={`/gamedetail/${data.id}`}>
                <img
                src="/GameListPageImage/free-fire.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
                </Link>
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {data.title}
                </Typography>
                <Typography>
                  If you love Rock Paper Scissors in real life but don&apos;t
                  have anyone to play with, then this game will help you pass
                  your time
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link href={`/gamedetail/${data.id}`}>
                  <Button>Play Game</Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      <div className="w-full text-center text-black">
        <Typography variant="h2">Playable Games</Typography>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {data.map((data, index) => {
            return (
              <Card key={data.id} className="mt-6 w-full">
                <CardHeader color="blue-gray" className="relative h-56">
                  <Link href={`/gamedetail/${data.id}`}>
                    <img
                      src="/GameListPageImage/traditional.jpg"
                      alt="card-image"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {data.title}
                  </Typography>
                  <Typography>
                    If you love Rock Paper Scissors in real life but don&apos;t
                    have anyone to play with, then this game will help you pass
                    your time
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link href={`/gamedetail/${data.id}`}>
                    <Button>Play Game</Button>
                  </Link>
                  <Button
                    onClick={() => addToHistory([data])}
                    className="ms-[20px]"
                  >
                    Add History
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}

      <div className="w-full text-center text-black">
        <Typography variant="h2">Coming Soon Games</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <Link href={`/gamedetail/dummy`}>
              <img
                src="/GameListPageImage/rockpaperstrategy.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </Link>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Rock Paper Scissors 2
            </Typography>
            <Typography>New game play of rock paper scissors</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={`/gamedetail/dummy`}>
              <Button>Play Game</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <Link href={`/gamedetail/dummy`}>
              <img
                src="/GameListPageImage/metal-slug.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </Link>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Metal Slug: Awakening
            </Typography>
            <Typography>
              Metal Slug is a series of Japanese arcade games. The original game
              has been enhanced for mobile versions and other consoles over the
              years. Various other devices also have several Metal Slug games to
              play.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={`/gamedetail/dummy`}>
              <Button>Play Game</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <Link href={`/gamedetail/dummy`}>
              <img
                src="/GameListPageImage/pubg.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </Link>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              PlayerUnknown&apos;s Battlegrounds (PUBG)
            </Typography>
            <Typography>
              PlayerUnknown&apos;s Battlegrounds (PUBG) is a battle royale game,
              where 100 people at once can play online. The winner of this game
              is the individual or team that survives to the end.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={`/gamedetail/dummy`}>
              <Button>Play Game</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <Link href={`/gamedetail/dummy`}>
            <video
                  controls
                  className="w-full h-full object-cover"
                    >
                  <source
                  src={cl.url(`video/upload/v${data.version}/${data.public_id}.webm`)}
                  type="video/webm"
                    />
                  <source
                  src={cl.url(`video/upload/v${data.version}/${data.public_id}.mp4`)}
                  type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              <img
                src="/GameListPageImage/free-fire.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </Link>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              PlayerUnknown&apos;s Battlegrounds (PUBG)
            </Typography>
            <Typography>
              Free Fire is a multiplayer battle royale mobile game, developed
              and published by Garena for Android and iOS. Battle in Style and
              be the last survivor!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={`/gamedetail/dummy`}>
              <Button>Play Game</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
