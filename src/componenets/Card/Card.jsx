import React from 'react'

export default function Card(props) {

    let {img } =props

    return (
        <>


            <div className="col-md-6 card-imgs col-lg-4  ">

                <div className="inner position-relative overflow-hidden rounded">
                    <img src={img.img} alt={img.id} className='w-100 ' />

                    <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center ">
                        <i className='fa fa-plus fa-6x'></i>
                    </div>
                    
                </div>

            </div>



        </>
    )
}
