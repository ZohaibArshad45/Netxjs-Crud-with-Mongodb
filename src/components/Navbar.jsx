import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full flex justify-center">
            <nav className="bg-blue-500 max-w-3xl w-full mx-4 md:mx-auto my-6 rounded-2xl text-white py-4 shadow-lg px-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="hover:text-gray-200 transition text-lg font-semibold">
                        🏠 Home
                    </Link>

                    <Link href="/add-task">
                        <button className="bg-white text-cyan-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition">
                            ➕ New Task
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
