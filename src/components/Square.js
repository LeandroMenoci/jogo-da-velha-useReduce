import React, { useContext } from 'react'
import t from 'prop-types'

import { GameContext } from '../contexts/GameContext'

export default function Square({ value, index }) {
  const {
    state: {
      squares, isXNext, whoIsWinner, history
    },
    dispatch
  } = useContext(GameContext)

  function handleClick() {
    if (squares[index]) return
    if (whoIsWinner) return



    const newSquares = [...squares]
    newSquares[index] = isXNext ? 'X' : 'O'

    dispatch({ type: 'UPDATE_SQUARES', payload: newSquares })
    // setSquares(newSquares)
    // setIsXNext(!isXNext)

    // setHistory([...history, {
    //   squares: [...squares],
    //   isNext: !isXNext,
    //   whoIsWinner
    // }])
  }

  return (

    <button
      type="button"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

Square.defaultProps = {
  value: null,
}

Square.propTypes = {
  value: t.string,
  index: t.number.isRequired
}