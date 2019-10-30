import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from './Image.png'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-sm bg-dark navbar-dark"
                
                    >
                        {/* style={{width:'100%'}} */}
                    <img
                        className='mr-2 bg-dark'
                        src={Image} alt='basic iamge'
                        height='20px'
                        width='20px'></img>

                    <NavLink
                        to='/home'
                        className='navbar-brand'
                        activeClassName='highlight'
                    >
                        logo
                    </NavLink>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink
                                to='/home'
                                className='nav-link'>
                                home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/about'
                                className='nav-link'>
                                about
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/data'
                                className='nav-link'
                            >
                                Data
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/tododata'
                                className='nav-link'
                            >
                                TodoText
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <NavLink
                                to='/register'
                                className='nav-link'>
                                Register
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/login'
                                className='nav-link'>
                                login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;