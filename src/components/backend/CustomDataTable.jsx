'use client';

import React, { useState } from 'react';
import data from '../../data/data.json';

export default function CustomDataTable() {
    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1); 
    const startIndex = (currentPage - 1)*PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE
    // Create a copy of the data array
    const dataCopy = [...data];
    const currentlyDisplayedData = dataCopy.splice(startIndex, PAGE_SIZE);
    const totalPages = Math.ceil(dataCopy.length / PAGE_SIZE) 



    return (
        <div className='pb-8 mt-12 bg-slate-50 dark:bg-slate-700 pt-10 px-6 shadow-lg rounded-lg'>
            <h2 className='text-xl font-bold dark:text-slate-50 text-slate-800'>Recent Orders</h2>
            {/* Table */}
            <div className="pt-5">
                <div className="relative overflow-x-auto  sm:rounded-lg  ">
                    <table className="w-full -z-10 text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                            <tr className='bg-slate-200 dark:bg-slate-800'>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentlyDisplayedData.map((item, i) => (
                                <tr key={i} className="bg-slate-50 border-b dark:bg-slate-700 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id={`checkbox-table-search-${i + 1}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600" />
                                            <label htmlFor={`checkbox-table-search-${i + 1}`} className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-900 slate-50space-nowrap dark:text-slate-50">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-900 slate-50space-nowrap dark:text-slate-50">
                                        {item.first_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.last_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-600 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-slate-500 dark:text-slate-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-slate-800 dark:text-slate-50">{startIndex+1}-{endIndex}</span> of <span className="font-semibold dark:text-slate-50 text-slate-800">{data.length}</span></span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-10">
                            <li>
                                <button onClick={()=>setCurrentPage(currentPage - 1)} disabled={currentPage == 1} className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-slate-500 bg-slate-50 border border-slate-300 rounded-s-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50">Previous</button>
                            </li>
                            {
                                Array.from({length: totalPages+1},(_,index)=>(
                                    <li key={index}>
                                        <button onClick={()=>setCurrentPage(index+1)} disabled={currentPage == index+1} className={currentPage == index+1 ? "flex items-center justify-center px-3 h-10 leading-tight text-slate-50 bg-green-600 border border-green-600  dark:bg-green-600 dark:border-green-700 dark:text-slate-50 font-medium dark:hover:text-slate-50": "flex items-center justify-center px-3 h-10 leading-tight text-slate-500 bg-slate-50 border border-slate-300 hover:text-slate-800 hover:border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900 dark:hover:border-slate-900  dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400  dark:hover:text-slate-50"}>{index+1}</button>
                                    </li>
                                ))
                            }

                            <li>
                                <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage == totalPages+1} className="flex items-center justify-center px-3 h-10 leading-tight text-slate-500 bg-slate-50 border border-slate-300 rounded-e-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </div>
    );
}
