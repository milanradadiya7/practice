import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Sidebar from './sidebar'

function Layout() {
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div class="container-fluid">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout