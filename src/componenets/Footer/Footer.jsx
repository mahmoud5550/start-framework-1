import React from 'react'

export default function Footer() {
    return (
        <>

            <div className="upper-footer bg-gray text-white text-center">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="">
                                <h2>LOCATION</h2>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <h2>AROUND THE WEB</h2>
                                <ul className=' list-unstyled d-flex justify-content-center align-items-center gap-3'>
                                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href=""><i class="fa-solid fa-globe"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by MO</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="lowe-footer text-center text-white bg-dark-gray py-3">
                <p>Copyright © Your Website 2021</p>
            </div>

        </>
    )
}



