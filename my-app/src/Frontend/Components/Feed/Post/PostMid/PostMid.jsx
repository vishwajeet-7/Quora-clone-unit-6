import React from 'react'
import { useSelector } from 'react-redux';
import './PostMid.css'
import PostContent from './PostContent/PostContent';

const PostMid = () => {
  const theme = useSelector((store)=>store.theme)
  const mainStyle = theme === 'dark' ? {background: "var(--darkComp)" } : {};
  const style = theme==='dark' ? {color:"var(--lightgrey)"} : {};
  const bodyStyle = theme==='dark' ? {color:"gray"} : {};
  return (
    <div className='postmid'>
      <div className='post mid question' style={mainStyle}>
        <h4 style={style}>What are the advantages that exist in Next.js and don't exist in React.js?</h4>
      </div>
      <div className='post mid body' style={mainStyle}>
        <span style={bodyStyle}><PostContent 
        limit={200}
        >Next.js provides a number of features that are not available in React.js, or which are available only with additional configuration and/or plugin libraries.

        Next.js' code splitting and lazy loading capabilities mean that pages load faster, as only the necessary code is loaded on demand. This can be a significant performance boost, especially on mobile devices.

        Next.js' server-side rendering support means that pages can be rendered on the server before being sent to the client, providing a performance boost and better SEO.

        Next.js also has built-in support for React Router and Redux, two popular libraries for building web applications. This can make development easier and faster, as there is no need to set up and configure these libraries separately.

        Finally, Next.js supports hot module reloading, which means that changes made to the code during development will be automatically reflected in the browser, without the need to refresh the page.</PostContent></span>

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
