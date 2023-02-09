import React from 'react'
import Avatar from '../../Avatar/Avatar'
import './Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostHead from './PostHead/PostHead';
import PostMid from './PostMid/PostMid';
const Post = () => {
  return (
    <div className='post main'>
        <div className='post__info'>
            <PostHead/>
        </div>
        <div className='post__body'>
            <PostMid/>
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'><path d="M12 4 3 15h6v5h6v-5h6z"  stroke="#666"  ></path></svg>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'><path d="m12 20 9-11h-6V4H9v5H3z"  stroke="#666"  ></path></svg>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z"  stroke="#666" ></path></svg>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'><g  stroke="#666"   ><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>
                </div>
            </div>           
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fill='none'><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z"  fill="#666" stroke="#666"  ></path></svg>
            </div>
        </div>
    </div>
  )
}

export default Post
