import React from 'react'

const DateCreateOn = (props) => {
  
    let dateCreateOn = new Date(props).toLocaleDateString("en-US", "full");
  
    return (
    <div>{dateCreateOn}</div>
  )
}

export default DateCreateOn