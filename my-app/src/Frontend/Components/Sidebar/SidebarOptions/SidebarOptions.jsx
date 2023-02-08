import React from 'react'
import './SidebarOptions.css'
import SideCard from './SideCard/SideCard'

const SidebarOptions = () => {
    const sidebarArray = [
        {
            img: "https://qph.cf2.quoracdn.net/main-thumb-t-499228-100-dwchxmdjmcftkfohmzsekxsleepxrbha.jpeg",
            title: "Film & Televesion"
        },
        {
            img: "https://qph.cf2.quoracdn.net/main-thumb-t-499228-100-dwchxmdjmcftkfohmzsekxsleepxrbha.jpeg",
            title: "Film & Televesion"
        },
        {
            img: "https://qph.cf2.quoracdn.net/main-thumb-t-499228-100-dwchxmdjmcftkfohmzsekxsleepxrbha.jpeg",
            title: "Film & Televesion"
        },
        {
            img: "https://qph.cf2.quoracdn.net/main-thumb-t-499228-100-dwchxmdjmcftkfohmzsekxsleepxrbha.jpeg",
            title: "Film & Televesion"
        },
        {
            img: "https://qph.cf2.quoracdn.net/main-thumb-t-499228-100-dwchxmdjmcftkfohmzsekxsleepxrbha.jpeg",
            title: "Film & Televesion"
        },
    ]
  return (
    <div className='sidebarOptions'>
        {
            sidebarArray.map((ele,idx)=>{
                return <SideCard {...ele} key={idx}/>
            })
        }
    </div>
  )
}

export default SidebarOptions
