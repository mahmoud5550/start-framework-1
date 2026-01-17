import React from 'react'
import Star from '../Star/Star'

export default function About() {
  return (
    <>
      <div className="about d-flex justify-content-center align-items-center text-white bg-green vh-90 text-center">


        <div className="inner text-center d-flex align-items-center flex-column ">



          <h2 className=' fw-bold fs-1 text-uppercase'>about component</h2>


          <Star color={`text-white`} bgcolor={`bg-white`} />


          <div className="container text-start">
            <div className="row">
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                  files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source 
                  files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
