
import React, { useEffect } from 'react'
import QuoraHeader from '../QuoraHeader/QuoraHeader'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from '../Widgets/Widgets'
import './Quora.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, postError, postRequest, postSuccess } from '../../Redux/Actions/Action'
import axios from 'axios'


const Quora = () => {
  const mode = useSelector((store)=>store.theme);
  const style = mode === 'dark'? {backgroundColor:'var(--darkMode)'} : {};
  // const dispatch = useDispatch();
  // const getPost = ()=>{
  //   dispatch(postRequest())
  //   axios.get(`https://updatedapi.onrender.com/data`)
  //        .then((res)=>{
  //           dispatch(postSuccess(res.data))
  //        })
  //        .catch((e)=>{
  //           dispatch(postError())
  //        })
  // }

  // useEffect(()=>{
  //   dispatch(getPost())
  // },[])
  return (
    <div className='quora' style={style}>
      <QuoraHeader/>
      <div className='quora__contents'>
        <div className='quora__content'>
          <div className='fixed'>
            <Sidebar/>
          </div>
          <Feed />
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Quora;
