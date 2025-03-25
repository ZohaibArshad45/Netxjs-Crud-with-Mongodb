import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons

const ListComponent = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto my-4 flex justify-between items-center flex-wrap md:flex-nowrap">

            {/* Left Content Section */}
            <div className="w-full md:w-auto">
                <h1 className="text-xl font-bold text-gray-800">Task Title</h1>
                <h2 className="text-gray-600">Task Description</h2>
            </div>

            {/* Right Side Action Buttons */}
            <div className="flex sm:flex-col gap-3 mt-4 md:mt-0">
                {/* Edit Button */}
                <Link href={'/edit-task'}>
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                        <FaEdit />
                    </button>
                </Link>


                {/* Delete Button */}
                <Link href={'/delete'}>
                    <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
                        <FaTrash />
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ListComponent;
