import React from 'react'
import { useSelector } from 'react-redux';
import './PostMid.css'

const PostMid = () => {
  const theme = useSelector((store)=>store.theme)
  const mainStyle = theme === 'dark' ? {background: "var(--darkComp)" } : {};
  const style = theme==='dark' ? {color:"var(--lightgrey)"} : {};
  const bodyStyle = theme==='dark' ? {color:"gray"} : {};
  return (
    <div className='postmid'>
      <div className='post mid question' style={mainStyle}>
        <h4 style={style}>What are some picture deserve 66k upvotes and views?</h4>
      </div>
      <div className='post mid body' style={mainStyle}>
        <span style={bodyStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam exercitationem ratione dolorum praesentium, culpa esse voluptas voluptatem, distinctio cumque temporibus fuga iure! Magnam ut alias quia qui consectetur facilis.</span>
      </div>
      <div className='post mid img'>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-29a800eb5ad9280c09aaf9590ed67d4a-lq" alt="img" />
      </div>
      <div className='mid info' >
        <div><span style={style}>96 views</span></div>
        <div><span style={style}>View 332 upvotes</span></div>
        <div><span style={style}>8 shares</span></div>
      </div>
    </div>
  )
}

export default PostMid
