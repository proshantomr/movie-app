// components/SearchBar.js
"use client";

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleClear = () => setQuery("");

    return (
        <div className="flex  items-center w-full max-w-md mx-auto border-2 border-red-800 bg-transparent shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:border-red-400 hover:shadow-lg">
            <div className="p-2">
                <FiSearch className="text-gray-400"/>
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full  p-2 outline-none bg-transparent text-white-700"
            />
            {query && (
                <button onClick={handleClear} className="p-2 focus:outline-none">
                    <FiX className="text-white-400" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
