import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links=<>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/jobs'}>Jobs</NavLink></li>
       <li><NavLink to={'/applied'}>Applied Jobs</NavLink></li>
       <li><NavLink to={'/statistics'}>Statictics</NavLink></li>
       <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
    </>
    return (
        <div class="navbar bg-base-100    bg-[image:linear-gradient(90deg,_rgba(126,144,254,0.10)_0%,_rgba(152,115,255,0.10)_100%)]">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a class=" cursor-pointer font-bold text-blue-500  text-2xl">K_Jobs</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;