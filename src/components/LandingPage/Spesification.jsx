'use client'
import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react'

export default function LandingPageSpesification() {
  return (
    <div className="w-full py-5">
      <div className="w-full text-center text-black">
        <Typography variant="h2">Pc Spesification</Typography>
      </div>
      <div className="mx-auto w-1/2">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Minimum RAM
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                it is recommended to have at least 8 GB of RAM in a dual-channel
                configuration running at 3,000MHz.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Windows
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                OS: Windows 10 · CPU: Intel® Core™ i7 or better
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Processor
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                Processor: Intel Core 2 Duo E8400 or AMD Athlon 200GE
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}
