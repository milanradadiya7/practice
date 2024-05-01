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
                    {/* <a className="nav-link" href="dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a> */}
                </li>

                <li className="nav-item active">
                    <Link to={"register"} className="nav-link">Register</Link>
                    {/* <a className="nav-link" href="register">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Register</span></a> */}
                </li>

                <li className="nav-item active">
                    <Link to={"login"} className="nav-link">Login</Link>
                    {/* <a className="nav-link" href="login">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Login</span></a> */}
                </li>

                <li className="nav-item active">
                    <Link to={"profile"} className="nav-link">Profile</Link>
                    {/* <a className="nav-link" href="profile">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Profile</span></a> */}
                </li>

                <li className="nav-item active">
                    <Link to={"table"} className="nav-link">Table</Link>
                    {/* <a className="nav-link" href="table">
                        <span>Table</span></a> */}
                </li>


                {/* <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Interface
                </div>
                <hr className="sidebar-divider" />
                <Dropdown>
                    <Dropdown.Toggle className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities" id='dropdown-basic'>
                        Components
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Dropdown.Item href="/button">Button</Dropdown.Item>
                            <Dropdown.Item href="/card">Card</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="nav-link collapsed mt-2" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities" id='dropdown-basic'>
                        Utilities
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Dropdown.Item href="/color">Color</Dropdown.Item>
                            <Dropdown.Item href="/border">Border</Dropdown.Item>
                            <Dropdown.Item href="/animation">Animations</Dropdown.Item>
                            <Dropdown.Item href="/other">Other</Dropdown.Item>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Addons
                </div>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="login">Login</a>
                            <a className="collapse-item" href="register">Register</a>
                            <a className="collapse-item" href="forgotPassword">Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="404Error">404 Page</a>
                            <a className="collapse-item" href="product">product </a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="chart">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="table">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src="image/image-2.jpg" alt="img" />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components,
                        and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to
                        Pro!</a>
                </div> */}

            </ul>
        </>
    )
}

export default Sidebar