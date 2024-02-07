import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
    <div>
        <ul>
            <li>
                <Link to="/">landingview</Link>
            </li>
            <li>
                <Link to="/exampledataview">example data view</Link>
            </li>
        </ul>
        <br />
        <Outlet />
    </div>
);

export default Layout;