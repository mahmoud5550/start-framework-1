import React from 'react'
import avatar from '../../assets/avataaars.svg'
import Star from '../Star/Star'

export default function Home() {
  return (
    <>



      <div className="home d-flex justify-content-center align-items-center text-white bg-green vh-90 text-center">


        <div className="inner text-center d-flex align-items-center flex-column ">
          <img src={avatar} className=' w-75' alt="" />


          <h1 className=' fw-bold fs-1 text-uppercase'>Start Framework</h1>


          <Star color={`text-white`} bgcolor={`bg-white`}/>


          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>



      </div>





    </>
  )
}
