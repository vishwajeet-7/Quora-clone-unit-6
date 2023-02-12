import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox/QuoraBox'
import './Feed.css'
import Post from './Post/Post'
import axios from 'axios'

const Feed = () => {
  const [post,setPost] = useState([])
  useEffect(()=>{
    axios.get(`https://updatedapi.onrender.com/data`).then((res)=>{
      setPost(res.data);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])
  console.log(post);
  return (
    <div className='feed' >
      <QuoraBox/>
      {
        post.length>0 && post.map((ele)=>{
          console.log(ele);
          if(ele.id !== 1){
            return <Post key={ele.id} item={ele}/>
          }
        })
      }
    </div>
  )
}

export default Feed
