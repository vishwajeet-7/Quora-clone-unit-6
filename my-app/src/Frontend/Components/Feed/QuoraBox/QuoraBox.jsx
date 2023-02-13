import React from 'react'
import Avatar from '../../Avatar/Avatar'
import './QuoraBox.css'
import Modal from 'react-responsive-modal'
import AddQuestions from '../../QuoraHeader/AddQuestions'
import CloseIcon from "@material-ui/icons/Close"
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal } from '../../../Redux/Actions/Action'
const QuoraBox = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((store)=>store.themereducer.theme);
  const style = theme==='dark' ? {fill:'var(--pathFill)'} : {};
  const textStyle = theme==='dark' ? {color:'var(--lightgrey)'} : {};
  const Close = <CloseIcon/>
  const className = theme==='dark' ? 'quoraBox-dark' : 'quoraBox'
  const text = theme==='dark' ? 'quoraBox_text-dark': 'quoraBox_text'
  return (
    <div className={className}>
      <div className='quoraBox__info'>
          <div className='quoraBox_wrap'>
            <Avatar/>
            <div className={text}>
              <div className='quoraBox_textwrap' onClick={()=>dispatch(openModal(true))}>

                <span  >
                  What do you want to ask or share?
                </span>
              </div>
            </div>
          </div>
          <div className='quoraBox__quora'>
            <div className='quoraBottom' onClick={()=>dispatch(openModal(true))}>

              <div className='quoraIcon'>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g  stroke="#666"  fill="none" ><g transform="translate(9 7)"><path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3"  ></path><circle  fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle></g><path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" ></path></g></svg>
              </div>
              <div className='quoraText' style={textStyle}>Ask</div>
              <Modal
                    open={isModalOpen}
                    closeIcon = {Close}

                    onClose={()=>dispatch(closeModal(false))}

                    closeOnEsc
                    center
                    closeOnOverlayClick={false}
                    styles={{
                        overlay:{
                            height: 'auto'
                        }
                    }}
                    >

                        <AddQuestions />

                    </Modal>
            </div>
            <div className="q-box" ></div>
            <div className='quoraBottom'>
              <div className='quoraIcon'>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g  fill="none" ><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"  stroke="#666"  ></path><path  fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5"  stroke="#666"  ></path></g></svg>
              </div>
              <div className='quoraText' style={textStyle}>Answer</div>
            </div>
            <div className="q-box" ></div>
            <div className='quoraBottom'>
              <div className='quoraIcon'>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" ><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z"  stroke="#666"   ></path><path  fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
              </div>
              <div className='quoraText'style={textStyle}> Post</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default QuoraBox
