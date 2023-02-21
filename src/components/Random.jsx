import React from 'react'

const Random = (props) => {
const number = props.max === 6 ? 6 : 100

  return (
    <div>
        <p>Random value between 1 and {number}: {Math.floor(Math.random() * number) + 1}</p>
    </div>
  )
}

export default Random