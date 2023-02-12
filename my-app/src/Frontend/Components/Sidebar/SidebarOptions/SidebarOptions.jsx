import React from 'react'
import './SidebarOptions.css'
import SideCard from './SideCard/SideCard'

const SidebarOptions = () => {
    const sidebarArray = [
        {
            img: "https://img.freepik.com/free-vector/science-word-concept_23-2148533907.jpg?w=2000",
            title: "Science"
        },
        {
            img: "https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=",
            title: "Movies"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBxyV8yrCAq6eiA6dHm7RVexxsBEHnLU3Cw&usqp=CAU",
            title: "Music"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhiOiPpiFEtHpJ9TGY8Tw5kUaN3jXCrO9uZA&usqp=CAU",
            title: "Health"
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
