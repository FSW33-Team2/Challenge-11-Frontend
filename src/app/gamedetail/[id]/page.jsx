'use client'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RPSGame from '@/components/GameDetail/gameLogic'
import NavbarSimple from '@/components/Navigation/Navbar'
import { fetchAllGames } from '@/redux/features/GamesByIdSlice'
import DummyGamePage from '@/components/GameDetail/DummyGame'

export default function GameDetail({ params }) {
  let id = params.id
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.allgames)

  useEffect(() => {
    dispatch(fetchAllGames())
  }, [dispatch])

  function renderGame(id) {
    const matchingGame = data.find((game) => game.id === parseInt(id, 10))
    let render = null
    if (loading) {
      render = 'Loading...'
    } else if (!loading && matchingGame) {
      render = <RPSGame />
    } else {
      render = <DummyGamePage />
    }
    return render
  }
  return (
    <main className="">
      <NavbarSimple />
      {renderGame(id)}
    </main>
  )
}
