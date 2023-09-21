'use client'
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

export function LandingPageCard() {
  return (
    <div className="w-full py-5">
      <div className="w-full text-center text-black">
        <Typography variant="h2">Game List</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <a href="/gamelist">
              <img
                src="/GameListPageImage/metal-slug.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </a>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Metal Slug
            </Typography>
            <Typography>
              Metal Slug is a series of run and gun video games first released
              on Neo-Geo arcade machines and game consoles created by SNK.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/gamelist">
              <Button>Play Game</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <a href="/gamelist">
              <img
                src="/GameListPageImage/pubg.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </a>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              PUBG
            </Typography>
            <Typography>
              PUBG MOBILE is the FREE battle royale shooter that chosen by over
              1 billion players worldwide. Extreme battles in 10-minute matches,
              play anytime, anywhere!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/gamelist">
              <Button>Play Game</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <a href="/gamelist">
              <img
                src="/GameListPageImage/traditional.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </a>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Rock-Paper-Scissor
            </Typography>
            <Typography>
              A classic game - Rock, Paper, Scissors! Choose one of the three
              choices - and see if you can beat the computer. Will you win? The
              chance is random!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/gamelist">
              <Button>Play Game</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <a href="/gamelist">
              <img
                src="/GameListPageImage/free-fire.jpg"
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </a>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Free Fire
            </Typography>
            <Typography>
              Free Fire is a world-famous survival shooter game available on
              mobile. Each 10-minute game places you on a remote island where
              you are pit against 49 others.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/gamelist">
              <Button>Play Game</Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
