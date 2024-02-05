import { Button } from '@mui/material'
import React from 'react'


const Recipe = ({ email1, email2, email3 }) => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-400'>
            <div className='bg-white p-6 rounded-md'>



                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-gray-300 text-gray-600 rounded-full ">
                            <tr>
                                <th className='px-6 py-3' scope='col'>Name</th>
                                <th className='px-6 py-3' scope='col'>Email</th>
                                <th className='px-6 py-3' scope='col'>Role</th>
                                <th className='px-6 py-3' scope='col'>Location</th>
                                <th className='px-6 py-3' scope='col'>Last Acctive</th>
                                <th className='px-6 py-3' scope='col'>Permission</th>
                                <th className='px-6 py-3' scope='col'>Status</th>
                                <th className='px-6 py-3' scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-black">
                                <td scope="row" className="px-6 py-4 whitespace-nowrap ">
                                    Ayush
                                </td>
                                <td className="px-6 py-4">
                                    {email1}
                                </td>
                                <td className="px-6 py-4">
                                    Dev
                                </td>
                                <td className="px-6 py-4">
                                    Delhi
                                </td>
                                <td className="px-6 py-4">
                                    Yesterday
                                </td>
                                <td className="px-6 py-4">
                                    Admin
                                </td>
                                <td className="px-6 py-4">
                                    <Button className='text-white bg-green-400 max-h-10 px-2 py-0.5 rounded-md'>Active</Button>

                                </td>
                                <td className="px-6 py-4">
                                    Edit
                                </td>
                            </tr>
                            <tr className="text-black">
                                <td scope="row" className="px-6 py-4 whitespace-nowrap ">
                                    Ayush
                                </td>
                                <td className="px-6 py-4">
                                    {email2}
                                </td>
                                <td className="px-6 py-4">
                                    Dev
                                </td>
                                <td className="px-6 py-4">
                                    Delhi
                                </td>
                                <td className="px-6 py-4">
                                    Yesterday
                                </td>
                                <td className="px-6 py-4">
                                    Admin
                                </td>
                                <td className="px-6 py-4">
                                    <Button className='text-white bg-green-400 max-h-10 px-2 py-0.5 rounded-md'>Active</Button>

                                </td>
                                <td className="px-6 py-4">
                                    Edit
                                </td>
                            </tr>
                            <tr className="text-black">
                                <td scope="row" className="px-6 py-4 whitespace-nowrap ">
                                    Ayush
                                </td>
                                <td className="px-6 py-4">
                                    {email3}
                                </td>
                                <td className="px-6 py-4">
                                    Dev
                                </td>
                                <td className="px-6 py-4">
                                    Delhi
                                </td>
                                <td className="px-6 py-4">
                                    Yesterday
                                </td>
                                <td className="px-6 py-4">
                                    Admin
                                </td>
                                <td className="px-6 py-4">
                                    <Button className='text-white bg-rose-400 max-h-10 px-2 py-0.5 rounded-md'>Inactive</Button>

                                </td>
                                <td className="px-6 py-4">
                                    Edit
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Recipe