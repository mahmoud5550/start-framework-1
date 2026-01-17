import React from 'react'
import Star from './../Star/Star';

export default function Contact() {
  return (
    <>


      <div className="contact vh-90 ">
        <div className="inner text-center d-flex align-items-center justify-content-center flex-column">
          <h1 className='fw-bold fs-1 text-uppercase text-blue'>Contact Section</h1>
          <Star color={`text-gray`} bgcolor={`bg-gray`} />  
          <div className="container mt-5">
            <form className='w-50 mx-auto'>
              <div className='position-relative'>
                
                <input type="text" id="uname" name="uname" placeholder='User Name' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5  ' />
              </div>

              <input type="number" id="uage" name="uage" placeholder='User Age' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
              <input type="email" id="uemail" name="uemail" placeholder='User Email' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
              <input type="password" id="upass" name="upass" placeholder='User Password' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
              <button className="btn d-block text-white ">send Message</button>
            </form>
          </div>

        </div>
      </div>


    </>
  )
}
