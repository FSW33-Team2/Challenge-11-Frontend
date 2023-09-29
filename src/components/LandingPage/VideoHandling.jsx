'use client'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react'
import React, { useEffect, useState, useRef } from 'react'

export function VideoHandling(props) {
  const { height } = props
  const inputRef = React.useRef()
  const [focus, setFocus] = useState(false)
  const ref = useRef(null)

  const [source, setSource] = React.useState()

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    setSource(url)
  }

  const handleChoose = () => {
    inputRef.current.click()
  }

  const loop = () => {
    ref.current.play()
  }

  const pauseLoop = () => {
    if (ref.current) {
      ref.current.pause()
      ref.current.currentTime = 0
    }
  }

  const onEndedLoop = () => {
    if (focus) loop() // when ended check if its focused then loop
  }

  useEffect(() => {
    if (focus) loop() // when focused then loop
    if (!focus) pauseLoop() // when not focused then pause loop
  }, [focus])

  return (
    <>
      <div className="w-full text-center text-black">
        <Typography variant="h2">Game Community</Typography>
        <Typography variant="h5">
          Upload Your Video to Share with Others{' '}
        </Typography>
      </div>
      <br />
      <div
        className="VideoInput p-4 border border-gray-300 rounded-md shadow-md mx-auto max-w-full"
        style={{ maxWidth: '800px' }}
      >
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {!source && (
          <button
            onClick={handleChoose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Choose Video
          </button>
        )}
        {source && (
          <div
            className="mt-4 mx-auto max-w-full"
            style={{ maxWidth: '640px' }}
          >
            <video
              className="w-full h-auto"
              width="100%"
              height={height}
              controls
              src={source}
            />
          </div>
        )}
        <div className="mt-2 text-gray-600">{source || 'Nothing selectd'}</div>
      </div>

      <div className="w-full py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <div className="w-full h-full relative overflow-hidden rounded-lg">
                <div
                  className={`container mx-auto max-w-md ${
                    focus ? 'aspect-w-16 aspect-h-9' : 'w-full h-auto'
                  }`}
                  onMouseOver={() => setFocus(true)}
                  onMouseOut={() => {
                    setFocus(false)
                    pauseLoop()
                  }} // Pause the video on mouse out
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
              <div className="absolute top-0 left-0 p-2 text-white bg-black rounded-tr-lg">
                Comunity Video
              </div>
            </CardHeader>

            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Video 1
              </Typography>
              <Typography>
                Time to go wild 🎉! Harley Quinn and the Joker are back to shake
                things up on the Battlegrounds! Brace yourselves for unbridled
                chaos! Details: pubg.com/en-na/news/6628 #PUBG #BATTLEGROUNDS
                #DCUniverse #HarleyQuinn #Joker
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <div className="w-full h-full relative overflow-hidden rounded-lg">
                <div
                  className={`container mx-auto max-w-md ${
                    focus ? 'aspect-w-16 aspect-h-9' : 'w-full h-auto'
                  }`}
                  onMouseOver={() => setFocus(true)}
                  onMouseOut={() => {
                    setFocus(false)
                    pauseLoop()
                  }} // Pause the video on mouse out
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
              <div className="absolute top-0 left-0 p-2 text-white bg-black rounded-tr-lg">
                Comunity Video
              </div>
            </CardHeader>

            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Video 2
              </Typography>
              <Typography>
                As we approach the 10th Battleground, the unknown beckons. Stay
                tuned. #PUBG #BATTLEGROUNDS
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <div className="w-full h-full relative overflow-hidden rounded-lg">
                <div
                  className={`container mx-auto max-w-md ${
                    focus ? 'aspect-w-16 aspect-h-9' : 'w-full h-auto'
                  }`}
                  onMouseOver={() => setFocus(true)}
                  onMouseOut={() => {
                    setFocus(false)
                    pauseLoop()
                  }} // Pause the video on mouse out
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
              <div className="absolute top-0 left-0 p-2 text-white bg-black rounded-tr-lg">
                Comunity Video
              </div>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Video 3
              </Typography>
              <Typography>
                Land. Loot. Lounge. Miramar&apos;s vast landscapes offer more
                than just #BATTLEGROUNDS. Come for the fights, stay for the
                sights. Can you survive its captivating beauty? 🏜️ #Miramar
                #PUBG
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <div className="w-full h-full relative overflow-hidden rounded-lg">
                <div
                  className={`container mx-auto max-w-md ${
                    focus ? 'aspect-w-16 aspect-h-9' : 'w-full h-auto'
                  }`}
                  onMouseOver={() => setFocus(true)}
                  onMouseOut={() => {
                    setFocus(false)
                    pauseLoop()
                  }} // Pause the video on mouse out
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
              <div className="absolute top-0 left-0 p-2 text-white bg-black rounded-tr-lg">
                Comunity Video
              </div>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Video 4
              </Typography>
              <Typography>
                This month, the store is full of amazing items! Explore a range
                of items, including the 2022 Fan Art Contest Winners&apos;
                collection, the PUBG Esports: Team Edition Skins Vol. 2, and so
                much more. #PUBG #BATTLEGROUNDS
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}
