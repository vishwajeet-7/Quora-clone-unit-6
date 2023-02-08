import React from 'react'
import Avatar from '../../Avatar/Avatar'
import './QuoraBox.css'

const QuoraBox = () => {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
          <div className='quoraBox_wrap'>
            <Avatar/>
            <div className='quoraBox_text'>
              <div className='quoraBox_textwrap'>
                What do you want to ask or share?
              </div>
            </div>
          </div>
          <div className='quoraBox__quora'>
            <div className='quoraBottom'>
              <div className='quoraIcon'>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd">
                  <g transform="translate(9 7)">
                    <path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3" stroke-linecap="round" stroke-linejoin="round"></path>
                    <circle class="icon_svg-fill_as_stroke" fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle>
                  </g>
                  <path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" stroke-linejoin="round"></path>
                </g>
              </svg>
              </div>
              <div className='quoraText'>Ask</div>
            </div>
            <div className="q-box" ></div>
            <div className='quoraBottom'>
              <div className='quoraIcon'>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
              </div>
              <div className='quoraText'>Answer</div>
            </div>
            <div className="q-box" ></div>
            <div className='quoraBottom'>
              <div className='quoraIcon'>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
              </div>
              <div className='quoraText'>Post</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default QuoraBox
