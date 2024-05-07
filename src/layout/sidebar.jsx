import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link to={"/"} className="nav-link">Dashboard</Link>
                </li>

                <li className="nav-item active">
                    <Link to={"register"} className="nav-link">Register</Link>
                </li>

                <li className="nav-item active">
                    <Link to={"login"} className="nav-link">Login</Link>
                </li>

                <li className="nav-item active">
                    <Link to={"profile"} className="nav-link">Profile</Link>
                </li>

                <li className="nav-item active">
                    <Link to={"table"} className="nav-link">Table</Link>
                </li>

                <li className="nav-item active">
                    <Link to={"product"} className="nav-link">Product</Link>
                </li>

            </ul>
        </>
    )
}

export default Sidebar