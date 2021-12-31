import React from 'react'
import "./post.css"

const image = require("./boules2.png")

const Post = ({post}) => {
  const {id, content, file, date} = post

  const formatDate = (date) => {
    const time = new Date(date)

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let hoursString = hours > 9 ? hours.toString():`0${hours}`
    let minutesString = minutes > 9 ? minutes.toString():`0${minutes}`

    return hoursString + ':' + minutesString
  }

  return (
    <article className="post">
      <div className="post-header">
        <img src={image} alt="" />

        <div>
          <span>Dilane</span>
          <span>{formatDate(date)}</span>
        </div>
      </div>

      <div className="post-content">
        {content}
      </div>

      <div className="post-image" style={{display: file ? "block":"none"}}>
        <img src={file} alt="" />
      </div>
    </article>
  )
}

export default Post