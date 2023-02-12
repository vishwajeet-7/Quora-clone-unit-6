import React from 'react'
import { useSelector } from 'react-redux';
import './PostMid.css'
import PostContent from './PostContent/PostContent';

const PostMid = ({image,question,answer,upvotes,downvotes,shares}) => {
  const theme = useSelector((store)=>store.theme)
  const mainStyle = theme === 'dark' ? {background: "var(--darkComp)" } : {};
  const style = theme==='dark' ? {color:"var(--lightgrey)"} : {};
  const bodyStyle = theme==='dark' ? {color:"gray"} : {};
  return (
    <div className='postmid'>
      <div className='post mid question' style={mainStyle}>
        <h4 style={style}>{question}</h4>
      </div>
      <div className='post mid body' style={mainStyle}>
        <span style={bodyStyle}><PostContent 
        limit={200}
        >{answer}</PostContent></span>

      </div>
      <div className='post mid img'>
        <img src={image} alt="img" />
      </div>
      <div className='mid info' >
        <div><span style={style}>{upvotes} views</span></div>
        <div><span style={style}>{downvotes}</span></div>
        <div><span style={style}>{shares} shares</span></div>
      </div>
    </div>
  )
}

export default PostMid
