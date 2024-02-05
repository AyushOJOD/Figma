import React from 'react'

const Login = ({ Page }) => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-300'>
            <div className='bg-white rounded-md flex flex-col items-center p-12 gap-4'>
                <h1 className='text-3xl font-medium text-gray-900'>
                    {Page}
                </h1>
                <h3 className='text-xl text-gray-900 font-bold'>
                    Welcome Onboard
                </h3>
                <div className='flex flex-col items-center gap-6'>
                    <input className='bg-[#E7E0EC] outline-none border-gray-400 border-b-2 p-4 px-8' placeholder='Your name' />
                    <input className='bg-[#E7E0EC] outline-none border-gray-400 border-b-2 p-4 px-8' placeholder='Company name' />
                    <select className='bg-[#E7E0EC] outline-none text-gray-900 w-full border-gray-400 border-b-2 p-4 px-8' placeholder='Select Industry' >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div>
                    <p className='text-sm font-medium my-2 text-gray-900'>
                        Select Number of Locations
                    </p>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-gray-300 p-4 rounded-md cursor-pointer'>
                            1-10
                        </div>
                        <div className='bg-gray-300 p-4 rounded-md cursor-pointer'>
                            10-50
                        </div>
                        <div className='bg-gray-800 text-white p-4 rounded-md cursor-pointer'>
                            50-100
                        </div>
                        <div className='bg-gray-300 p-4 rounded-md cursor-pointer'>
                            150+
                        </div>
                    </div>
                </div>
                <button className='uppercase text-center bg-gray-800 w-full p-3 rounded-md text-white'>Continue</button>
            </div>
        </div>
    )
}

export default Login