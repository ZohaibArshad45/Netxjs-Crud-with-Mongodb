'use client'
import React from 'react';

const AddTask = () => {


    return (
        <div className="flex justify-center mt-10">
            <div className=" shadow-lg rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">Update Task</h1>

                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Task Title" className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                    <textarea placeholder="Task Description" className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                    <button type="submit" className="bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition active:scale-95">
                    UPDATE
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AddTask;
