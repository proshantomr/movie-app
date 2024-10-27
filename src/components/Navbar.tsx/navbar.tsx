import React from 'react';
import {FaRegHeart} from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="bg-transparent shadow-sm border-b border-red-800 font-serif">
                    <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8">

                        {/* Left: Logo or Title */}
                        <a href="#" className="text-4xl text-red-800">
                            Movie App
                        </a>

                        <div className="hidden md:block">
                            <ul className="flex space-x-6 px-12">
                                <li>
                                    <a href="#" className="link-15">Kids</a>
                                </li>
                                <li>
                                    <a href="#" className="link-15">Adult</a>
                                </li>
                                <li>
                                    <a href="#" className="link-15">Most Watches</a>
                                </li>
                            </ul>
                        </div>



                        <div>

                            <ul className="flex space-x-6 px-12">

                                <div className="flex items-center justify-end">
                                    <a
                                        href="/watch-movie"
                                        className="text-red-800 text-sm hover:underline"
                                    >
                                        Watch Movie
                                    </a>
                                    <button
                                        className="border border-transparent ml-3 hover:border-red-800 p-2 rounded-full">
                                        <FaRegHeart className="text-red-800"/>
                                    </button>
                                </div>
                                <li>
                                    <a href="#" className="link-15">Login</a>
                                </li>

                            </ul>
                        </div>


                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;