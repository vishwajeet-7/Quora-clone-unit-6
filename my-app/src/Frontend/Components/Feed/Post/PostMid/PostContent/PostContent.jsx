import React, { useState } from 'react'
import './PostContent.css'

const PostContent = ({children,limit}) => {
const [readMore,setReadMore] = useState(false);
const toggle = ()=>{
    setReadMore((prev)=> !prev)
}
  return (
    <div>
      {readMore ? children : children.substr(0, limit)}
      <button onClick={toggle}>
        {readMore ? '(Less)' : '(...more)'}
      </button>
    </div>
  )
}

export default PostContent
