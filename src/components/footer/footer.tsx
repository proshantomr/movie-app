import React from 'react';

const Footer = () => {
    return (
        <div>


            <footer className="bg-transparent rounded-lg m-4 border-t border-t-red-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024 <a href="https://flowbite.com/" className="hover:underline">MovieApp™</a>. All Rights Reserved.
    </span>

                    <div className="flex items-center mt-3 sm:mt-0 space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border-red-800 hover:border-red-800 bg-transparent "
                        />
                        <button className="px-4 py-2 text-sm text-white bg-red-800 rounded-md hover:bg-red-700">
                            Subscribe
                        </button>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;