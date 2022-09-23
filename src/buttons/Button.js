import React from 'react'
import { useDispatch } from 'react-redux'
function Button({ buttonText, actionType }) {

    const dispatch = useDispatch()

  return (
      <>
          <button onClick={() => dispatch({ type: actionType })}>{buttonText}</button>
      </>
  )
}

export default Button