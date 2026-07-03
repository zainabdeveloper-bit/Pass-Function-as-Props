
import React from 'react'

function PassFunctionAsProps(props) {
  return (
    <div>
      <h2>Pass Function AS Props in React Js.</h2>
      <button onClick={props.data}>Get your data</button>
    </div>
  )
}

export default PassFunctionAsProps
