import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className='a'>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <a href=""><img className='logo' src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <h4 className='ml-3'><a href='/'>Home</a></h4>
                        </li>
                        <li className="nav-item active">
                            <h4 className='ml-4'>About</h4>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 pl-5 pr-5 bg-white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <div className="dropdown pr-5">
                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="https://img.icons8.com/material-rounded/24/000000/guest-male.png" />  Account </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/login">Login</a><br />
                                    <a className="dropdown-item" href="/login">Signup</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item pr-5">
                            <a href='/cart' className="btn btn-success my-2 my-sm-0" type="submit">MyCart  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-8.png" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
