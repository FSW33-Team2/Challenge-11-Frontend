'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@material-tailwind/react'
import React from 'react'
import back from '@/../public/RpcGameImage/back.svg'
import rock from '@/../public/RpcGameImage/rock.png'
import paper from '@/../public/RpcGameImage/paper.png'
import scissors from '@/../public/RpcGameImage/scissors.png'
import logo from '@/../public/RpcGameImage/logo.png'
import refreshImage from '@/../public/RpcGameImage/refresh.png'
import { useSelector, useDispatch } from 'react-redux'
import { resetGame, newGame } from '@/redux/features/RpsGameSlice'
import './RpcGame.css'

export default function RpsGame({ playGame }) {
  const {
    gameInfo,
    playerChoice,
    botChoice,
    isGameStarted,
    isGameFinished,
    currentRound,
    playerScore,
    result,
    botScore,
  } = useSelector((state) => state.rpsgame)
  const dispatch = useDispatch()
  const isDisabled = currentRound === 5

  return (
    <>
      <header className="flex items-center mt-3">
        <Link href="/gamelist">
          <Image className="back" src={back} alt="Back Button" />
        </Link>
        <Image className="mx-4" src={logo} alt="Logo" />
        <h1 className="fw-bold m-0">ROCK PAPER SCISSORS</h1>
      </header>
      <div className="main-content flex flex-row justify-center">
        <div className="player flex flex-col items-center">
          <h1 className="flex fw-bold">PLAYER</h1>
          <button id="p-rock">
            <Image
              onClick={() => playGame('rock')}
              className={`rock grow ${
                playerChoice === 'rock' ? 'selected' : ''
              } ${isDisabled ? 'disabled' : ''} `}
              src={rock}
              alt="rock"
            />
          </button>
          <button id="p-paper">
            <Image
              onClick={() => playGame('paper')}
              className={`paper grow ${
                playerChoice === 'paper' ? 'selected' : ''
              } ${isDisabled ? 'disabled' : ''} `}
              src={paper}
              alt="paper"
            />
          </button>
          <button id="p-scissors">
            <Image
              onClick={() => playGame('scissors')}
              className={`scissors grow ${
                playerChoice === 'scissors' ? 'selected' : ''
              } ${isDisabled ? 'disabled' : ''} `}
              src={scissors}
              alt="scissors"
            />
          </button>
        </div>
        <div className="vs-container flex flex-col">
          {gameInfo !== '' ? (
            <h2 className="text-center gameInfo">Round Score: {gameInfo}</h2>
          ) : null}
          <h2 className="text-center gameInfo">
            Total Score: {playerScore} - {botScore}
          </h2>
          <h2 className="text-center gameInfo">Round {currentRound}</h2>
          <h2
            className={`text-center align-middle m-auto  ${
              result === 'PLAYER WIN'
                ? 'pWin'
                : result === 'COM WIN'
                ? 'comWin'
                : result === 'DRAW'
                ? 'draw'
                : 'vs'
            }`}
          >
            {!isGameStarted && !isGameFinished
              ? 'vs'
              : isGameStarted && !isGameFinished
              ? `${result}`
              : isGameStarted && isGameFinished
              ? `${result}`
              : `${result}`}
          </h2>
        </div>
        <div className="computer flex flex-col items-center">
          <h1 className="flex fw-bold">COM</h1>
          <button id="com-rock">
            <Image
              className={`rock disabled ${
                botChoice === 'rock' ? 'selected' : ''
              }`}
              src={rock}
              alt="rock"
            />
          </button>
          <button id="com-paper">
            <Image
              className={`paper disabled ${
                botChoice === 'paper' ? 'selected' : ''
              }`}
              src={paper}
              alt="paper"
            />
          </button>
          <button id="com-scissors">
            <Image
              className={`scissors disabled ${
                botChoice === 'scissors' ? 'selected' : ''
              }`}
              src={scissors}
              alt="scissors"
            />
          </button>
        </div>
      </div>
      <div
        className="justify-center"
        style={{ display: currentRound === 5 ? 'flex' : 'none' }}
      >
        <Image
          id="refresh"
          className="refresh"
          src={refreshImage}
          alt="refresh"
          onClick={() => {
            dispatch(resetGame())
          }}
        />
      </div>
      <div
        className="flex justify-center mt-5 "
        style={{ display: currentRound === 5 ? 'flex' : 'none' }}
        onClick={() => {
          dispatch(newGame())
        }}
      >
        <Button>New Game</Button>
      </div>
    </>
  )
}
