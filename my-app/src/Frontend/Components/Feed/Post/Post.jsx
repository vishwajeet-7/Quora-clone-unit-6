import React from 'react'
import Avatar from '../../Avatar/Avatar'
import './Post.css'
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Post = () => {
  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar/>
            <h4>User name</h4>
            <small>TimeStamp</small>
        </div>
        <div className='post__body'>
            <div className='post__question'>
                <p>This is test Question</p>
                <button className='post__btnAnswer'>Answer</button>
            </div>
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <FileUploadSharpIcon/>
                <DownloadSharpIcon/>
            </div>
            <ChatBubbleOutlineOutlinedIcon/>
            <ShareIcon/>
            <div>
                <MoreHorizIcon/>
            </div>
        </div>
        <p
        style={{
            color:"rgba(0,0,0,0.5)",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "10px 0px"
        }}
        >50 Answers</p>
        <div className='post__answer'
        style={{
            margin:"5px 0px 0px 0px",
            padding:"5px 0px 0px 20px",
            borderTop: "1px solid lightgray"
        }}
        >
            <div className='post-answer-container'
            style={{
                display:"flex",
                alignItems: "center",
                flexDirection:"column",
                width: "100%",
                padding: "10px 5px ",
                borderTop:"1px solid lightgray",
            }}
            >
                <div className='post-answered'
                style={{
                    display:"flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    fontSize: "12px",
                    color: "#888"
                }}
                >
                    <Avatar/>
                    <div className='post-info'
                    style={{
                        margin: "0px 10px",
                    }}
                    >
                        <p>Username</p>
                        <span>Time Stamp</span>
                    </div>
                </div>
                <div className='post-answer'>This is test answer</div>
            </div>
        </div>
    </div>
  )
}

export default Post
