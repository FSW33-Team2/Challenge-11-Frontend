'use client'

import { Card, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadScore } from '@/redux/features/DummyGames'

export default function DummyGamePage() {
  const TABLE_HEAD = ['No', 'Username', 'Level', 'Score', 'Achievement', '']
  const dispatch = useDispatch()
  const { player1Score, player2Score, player3Score, player4Score } =
    useSelector((state) => state.DummyGames)

  const TABLE_ROWS = [
    {
      no: '1',
      username: 'Shendy',
      level: Math.floor(player1Score / 10),
      score: player1Score,
      achievement: '',
    },
    {
      no: '2',
      username: 'Galih',
      level: Math.floor(player2Score / 10),
      score: player2Score,
      achievement: '',
    },
    {
      no: '3',
      username: 'Pande',
      level: Math.floor(player3Score / 10),
      score: player3Score,
      achievement: '',
    },
    {
      no: '4',
      username: 'Ica',
      level: Math.floor(player4Score / 10),
      score: player4Score,
      achievement: '',
    },
  ]

  TABLE_ROWS.sort((a, b) => b.score - a.score)

  useEffect(() => {
    dispatch(
      loadScore({
        player1Score: Math.floor(Math.random() * 1000),
        player2Score: Math.floor(Math.random() * 1000),
        player3Score: Math.floor(Math.random() * 1000),
        player4Score: Math.floor(Math.random() * 1000),
      })
    )
  }, [])
  const achievement = (position) => {
    switch (position) {
      case 1:
        return <FontAwesomeIcon icon={faMedal} color="gold" />
      case 2:
        return <FontAwesomeIcon icon={faMedal} color="silver" />
      case 3:
        return <FontAwesomeIcon icon={faMedal} color="brown" />
      default:
        return null
    }
  }
  return (
    <div className="mx-4 my-8">
      <Typography
        variant="large"
        color="blue-gray"
        className="font-semibold text-2xl mb-[30px] text-center"
      >
        Coming Soon ...
      </Typography>
      <Typography
        variant="large"
        color="blue-gray"
        className="font-semibold text-2xl mb-4 text-center"
      >
        Leaderboard
      </Typography>

      <div>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
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
              {TABLE_ROWS.map((player, index) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'
                const userAchievement = achievement(index + 1)

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {player.username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {player.level}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {player.score}
                      </Typography>
                    </td>
                    <td className={classes}>{userAchievement}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
