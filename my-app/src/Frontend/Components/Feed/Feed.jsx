import React from 'react'
import QuoraBox from './QuoraBox/QuoraBox'
import './Feed.css'
import Post from './Post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <QuoraBox/>
      <Post/>
    </div>
  )
}

export default Feed
