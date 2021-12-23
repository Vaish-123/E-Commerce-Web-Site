import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="d-flex flex-column h-100">

                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">E-Commerce</h5>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Know Us More</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Our Partners</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><a href="#">Partner 1</a></li>
                                    <li><a href="#">Partner 2</a></li>
                                    <li><a href="#">Partner 3</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Subscribe</h5>
                                <p className="small text-muted">Subscribe us to get notified on new arrivals and much more.</p>
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <input style={{ color: 'white' }} className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i>subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
