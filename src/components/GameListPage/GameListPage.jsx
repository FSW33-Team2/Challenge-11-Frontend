'use client'
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
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { insertHistory } from '@/redux/features/PlayedGames'

export function GameListPage() {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.allgames)
  const historyData = useSelector((state) => state.gamehistory.data)
  const [history, setHistory] = useState(historyData)
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  const [cardFocus, setCardFocus] = useState({});

  const hasHistory = () => {
    if (history.length !== 0) {
      return (
        <div className="w-full text-center text-black mt-[20px]">
          <Typography variant="h2">Your History</Typography>
        </div>
      )
    }
  }

  const loop = () => {
    ref.current.play();
  };

  const pauseLoop = () => {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  };

  const onEndedLoop = () => {
    if (focus) loop(); // when ended check if its focused then loop
  };

  useEffect(() => {
    if (focus) loop(); // when focused then loop
    if (!focus) pauseLoop(); // when not focused then pause loop
  }, [focus]);
  
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
                  <div
      className="w-full h-full relative overflow-hidden rounded-lg"
    >
      <div
        className={`container mx-auto max-w-md ${focus ? "aspect-w-16 aspect-h-9" : "w-full h-auto"}`}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => { setFocus(false); pauseLoop(); }} // Pause the video on mouse out
      >
      <div className="box relative">
        {focus ? (
          <video
            id="video"
            ref={ref}
            autoPlay
            muted={true}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            onEnded={onEndedLoop}
            className="w-full h-auto object-cover"
          ></video>
        ) : (
          <img
            src="/GameListPageImage/metal-slug.jpg"
            alt="card-image"
            className="w-full h-full object-cover"
          />
        )}
        </div>
      </div>
    </div>
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
        <Card 
        key={data.id}
        className="mt-6 w-full"
        onMouseEnter={() => setCardFocus({ ...cardFocus, [data.id]: true })}
        onMouseLeave={() => setCardFocus({ ...cardFocus, [data.id]: false })}>
          <CardHeader color="blue-gray" className="relative h-56">
            <Link href={`/gamedetail/dummy`}>
            <div
      className="w-full h-full relative overflow-hidden rounded-lg"
    >
      <div
        className={`container mx-auto max-w-md ${focus ? "aspect-w-16 aspect-h-9" : "w-full h-auto"}`}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => { setFocus(false); pauseLoop(); }} // Pause the video on mouse out
      >
      <div className="box relative">
        {focus ? (
          <video
            id="video1"
            ref={ref}
            autoPlay
            muted={true}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            onEnded={onEndedLoop}
            className="w-full h-auto object-cover"
          ></video>
        ) : (
          <img
            src="/GameListPageImage/metal-slug.jpg"
            alt="card-image"
            className="w-full h-full object-cover"
          />
        )}
        </div>
      </div>
    </div>
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
            <div
      className="w-full h-full relative overflow-hidden rounded-lg"
    >
      <div
        className={`container mx-auto max-w-md ${focus ? "aspect-w-16 aspect-h-9" : "w-full h-auto"}`}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => { setFocus(false); pauseLoop(); }} // Pause the video on mouse out
      >
      <div className="box relative">
        {focus ? (
          <video
            id="video2"
            ref={ref}
            autoPlay
            muted={true}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            onEnded={onEndedLoop}
            className="w-full h-auto object-cover"
          ></video>
        ) : (
          <img
            src="/GameListPageImage/metal-slug.jpg"
            alt="card-image"
            className="w-full h-full object-cover"
          />
        )}
        </div>
      </div>
    </div>
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
            <div
      className="w-full h-full relative overflow-hidden rounded-lg"
    >
      <div
        className={`container mx-auto max-w-md ${focus ? "aspect-w-16 aspect-h-9" : "w-full h-auto"}`}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => { setFocus(false); pauseLoop(); }} // Pause the video on mouse out
      >
      <div className="box relative">
        {focus ? (
          <video
            id="video3"
            ref={ref}
            autoPlay
            muted={true}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            onEnded={onEndedLoop}
            className="w-full h-auto object-cover"
          ></video>
        ) : (
          <img
            src="/GameListPageImage/metal-slug.jpg"
            alt="card-image"
            className="w-full h-full object-cover"
          />
        )}
        </div>
      </div>
    </div>
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

        <Card 
        className="mt-6 w-full"
        key={data.id}
        onMouseEnter={() => setCardFocus({ ...cardFocus, [data.id]: true })}
        onMouseLeave={() => setCardFocus({ ...cardFocus, [data.id]: false })}>
          <CardHeader color="blue-gray" className="relative h-56">
            <Link href={`/gamedetail/dummy`}>
            <div
      className="w-full h-full relative overflow-hidden rounded-lg"
    >
      <div
        className={`container mx-auto max-w-md ${focus ? "aspect-w-16 aspect-h-9" : "w-full h-auto"}`}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => { setFocus(false); pauseLoop(); }} // Pause the video on mouse out
      >
      <div className="box relative">
        {focus ? (
          <video
            id="video4"
            ref={ref}
            autoPlay
            muted={true}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            onEnded={onEndedLoop}
            className="w-full h-auto object-cover"
          ></video>
        ) : (
          <img
            src="/GameListPageImage/free-fire.jpg"
            alt="card-image"
            className="w-full h-full object-cover"
          />
        )}
        </div>
      </div>
    </div>
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
