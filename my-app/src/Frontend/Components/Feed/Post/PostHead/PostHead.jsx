import React from 'react'
import Avatar from '../../../Avatar/Avatar'
import './PostHead.css'

const PostHead = () => {
  return (
    <div className='postHead'>
      <div className='avatar'>
        <Avatar/>
      </div>
      <div className='content'>
        <div className='content-up'>
            <div className='content-up text'>
              <h5>Vishwajeet Singh</h5>
              <span>Follow</span>
            </div>
            <div className='content-remove'>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666" stroke-width="1.5"></path></svg>
            </div>
        </div>
        <div className='content-down'>
            <span>Answered by Vishwajeet Singh</span>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5c.779 1.167 1.779 2 3 2.5s2.555.333 4-.5v9a7.856 7.856 0 0 1-2.5 3.5c-1.167.945-2.667 1.778-4.5 2.5-1.833-.722-3.333-1.555-4.5-2.5A7.856 7.856 0 0 1 5 14.5v-9c1.549.8 2.882.967 4 .5 1.118-.467 2.118-1.3 3-2.5Zm-7 9.781 14-7.525M7 17.441 18.655 11" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
            <span>Date</span>
        </div>
      </div>
    </div>
  )
}

export default PostHead
