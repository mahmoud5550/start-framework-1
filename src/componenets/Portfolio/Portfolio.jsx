import React from 'react'
import Star from '../Star/Star'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img1.png'
import img5 from '../../assets/img2.png'
import img6 from '../../assets/img3.png'
import Card from '../Card/Card'


export default function Portfolio() {

  let imgs = [
    { id: "img1", img: img1 },
    { id: "img2", img: img2 },
    { id: "img3", img: img3 },
    { id: "img4", img: img1 },
    { id: "img5", img: img2 },
    { id: "img6", img: img3 },

  ]



  return (
    <>
      <div className="portfolio d-flex justify-content-center align-items-center text-white  text-center">


        <div className="inner text-center d-flex align-items-center flex-column ">



          <h1 className=' fw-bold fs-1 text-uppercase text-gray '>portfolio component</h1>


          <Star color={`text-gray`} bgcolor={`bg-gray`} />

          <div className="container">
            <div className="row g-5 mb-3">

              {imgs.map(img => <Card key={img.id} img={img} />)}


            </div>
          </div>




        </div>

      </div>
    </>
  )
}
