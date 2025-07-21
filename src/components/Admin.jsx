import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function Admin() {
    return (
        // <div>
        //     <Link to="/admin">Users</Link>
        //     <Link to="/admin/products">Products</Link>
        //     <Link to="/admin/orders">Orders</Link>
        //     <div>
        //         <Outlet />
        //     </div>
        // </div>
        
        <div className="admin-wrapper">
            <h1 className="admin-title">Admin Dashboard</h1>
            <nav className="admin-navbar">
                <Link to="/admin">Users</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
            </nav>
            <div className="admin-outlet">
                <Outlet />
            </div>
        </div>
    )
}
