import React from 'react'

export default function Star(props) {

 let {bgcolor , color} = props



  return (
    <>


      <div className="d-flex align-items-center my-3">
        <div className={`line  ${bgcolor}`}></div>

        <div className={`star mx-2 ${color}`}><i class="fa-solid fa-star"></i></div>

        <div className={`line  ${bgcolor}`}></div>
        

      </div>


    </>
  )
}
