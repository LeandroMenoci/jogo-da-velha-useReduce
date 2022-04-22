import React, { useContext, useEffect } from 'react'
import calculateWinner from '../utils/calculateWinner'
import { GameContext } from '../contexts/GameContext'
import Square from './Square'
import Player from './Player'
import Reset from './Reset'
import { v4 as uuidv4 } from 'uuid';
import Winner from './Winner'
import History from './History'

export default function Board() {
  const {
    state: {
      squares, history
    },
    dispatch
  } = useContext(GameContext)

  useEffect(() => {
    const winner = calculateWinner(squares)
    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner })
    }
  }, [squares])

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square
            value={value}
            index={index}
            key={uuidv4()}
          />
        ))}
      </div>
      <History />
    </div>
  )
}