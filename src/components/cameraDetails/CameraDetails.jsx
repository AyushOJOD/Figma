import React from 'react'

import img2 from "../../assets/image.jpg"
import Image from 'next/image';
const CmaeraDetails = ({ Location }) => {

    return (
        <div className='min-h-screen flex flex-col gap-6 px-2 md:px-16 xl:px-40 py-10 bg-gray-100'>
            <div className='flex justify-between h-[50px] w-full'>
                <div className='flex items-center gap-4 justify-center' onClick={() => navigate(-1)}>
                    <button className='p-4 bg-gray-200 rounded-lg'><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3333 9.33333H5.10667L12.56 1.88L10.6667 0L0 10.6667L10.6667 21.3333L12.5467 19.4533L5.10667 12H21.3333V9.33333Z" fill="black" />
                    </svg></button>

                    <div className='flex items-end'>
                        <h1 className='text-3xl'>VMS</h1>
                        <p className='mb-2'>/Camera/Camera Details</p>
                    </div>
                </div>
                <div className='flex items-center justify-around gap-4'>
                    <button className='border-[0.5px] border-black px-4 py-2 rounded-lg text-black'>Edit Camera</button>
                    <button className='border-[0.5px] border-black px-4 py-2 rounded-lg text-black'>Deactivate</button>
                    <button className='border-[0.5px] border-rose-600 text-rose-600 px-4 py-2 rounded-lg'>Delete Camera</button>
                </div>

            </div>
            <p className='md:ml-10 font-medium text-xs'>View and manage camera details , recordings and connection details</p>
            {/* Main */}
            <div className='flex flex-col gap-4 mt-10 px-10 border-[1px] py-12 bg-gray-50 rounded-xl shadow-md'>
                <div className='flex gap-4'>
                    <button className='text-black flex items-center gap-1 bg-gray-200 px-4 rounded-lg py-3'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 9C18 7.897 17.103 7 16 7H14.566L12.148 2.971C11.9698 2.67552 11.7185 2.43095 11.4183 2.26087C11.118 2.09079 10.779 2.00095 10.434 2H5V4H10.434L12.234 7H4C2.897 7 2 7.897 2 9V18C2 19.103 2.897 20 4 20H16C17.103 20 18 19.103 18 18V15L22 17V10L18 12V9ZM16.002 18H4V9H16L16.001 13L16 14L16.001 14.001L16.002 18Z" fill="#222222" />
                        <path d="M6 14H12V16H6V14Z" fill="#222222" />
                    </svg>
                        View Recorded Videos</button>
                    <button className='text-black flex bg-gray-200 items-center gap-1 px-4 rounded-lg py-3'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#222222" />
                        <path d="M12 2C9.38021 2.00663 6.86729 3.03944 5.00001 4.877V3C5.00001 2.73478 4.89465 2.48043 4.70712 2.29289C4.51958 2.10536 4.26523 2 4.00001 2C3.73479 2 3.48044 2.10536 3.2929 2.29289C3.10537 2.48043 3.00001 2.73478 3.00001 3V7.5C3.00001 7.76522 3.10537 8.01957 3.2929 8.20711C3.48044 8.39464 3.73479 8.5 4.00001 8.5H8.50001C8.76523 8.5 9.01958 8.39464 9.20712 8.20711C9.39465 8.01957 9.50001 7.76522 9.50001 7.5C9.50001 7.23478 9.39465 6.98043 9.20712 6.79289C9.01958 6.60536 8.76523 6.5 8.50001 6.5H6.21801C7.31622 5.33699 8.7386 4.53086 10.3006 4.18621C11.8626 3.84155 13.4922 3.97427 14.9778 4.56715C16.4634 5.16003 17.7366 6.1857 18.6322 7.5111C19.5277 8.83649 20.0043 10.4004 20 12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8947 12.5196 22 12.2652 22 12C21.9968 9.34881 20.9422 6.80712 19.0676 4.93244C17.1929 3.05776 14.6512 2.00318 12 2ZM19.989 15.5H15.489C15.2238 15.5 14.9694 15.6054 14.7819 15.7929C14.5944 15.9804 14.489 16.2348 14.489 16.5C14.489 16.7652 14.5944 17.0196 14.7819 17.2071C14.9694 17.3946 15.2238 17.5 15.489 17.5H17.782C16.6838 18.663 15.2614 19.4691 13.6994 19.8138C12.1374 20.1585 10.5079 20.0257 9.02222 19.4328C7.53657 18.84 6.26339 17.8143 5.36785 16.4889C4.47231 15.1635 3.99575 13.5996 4.00001 12C4.00001 11.7348 3.89465 11.4804 3.70712 11.2929C3.51958 11.1054 3.26523 11 3.00001 11C2.73479 11 2.48044 11.1054 2.2929 11.2929C2.10537 11.4804 2.00001 11.7348 2.00001 12C1.99722 13.9693 2.57675 15.8954 3.66571 17.5362C4.75468 19.177 6.30447 20.4592 8.12019 21.2215C9.93592 21.9839 11.9365 22.1923 13.8704 21.8207C15.8043 21.4491 17.5851 20.514 18.989 19.133V21C18.989 21.2652 19.0944 21.5196 19.2819 21.7071C19.4694 21.8946 19.7238 22 19.989 22C20.2542 22 20.5086 21.8946 20.6961 21.7071C20.8837 21.5196 20.989 21.2652 20.989 21V16.5C20.989 16.2348 20.8837 15.9804 20.6961 15.7929C20.5086 15.6054 20.2542 15.5 19.989 15.5Z" fill="#222222" />
                    </svg>
                        Refresh Camera</button>
                </div>
                <div className='mt-10 flex gap-4'>
                    <Image src={img2} className='w-1/3' alt="" />
                    <div className='px-4 border-[1px] p-6 w-full rounded-lg justify-around flex flex-col '>
                        <div className='flex justify-between mx-10'>
                            <h1 className="text-2xl font-medium mb-10">Camera Details</h1>
                            <button className='text-white flex items-center bg-green-400 max-h-10 px-2 py-0.5 rounded-md'>Active</button>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>Location :</p>
                            <p className='font-light'>{Location}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>City :</p>
                            <p className='font-light'>Delhi</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>Timezone :</p>
                            <p className='font-light'>Delhi</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>Date updated :</p>
                            <p className='font-light'>Delhi</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>Last updated :</p>
                            <p className='font-light'>Delhi</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>Manufacture Detail :</p>
                            <p className='font-light'>Delhi</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-medium'>Rtsp/hsl :</p>
                            <p className='font-light text-blue-500 underline'>copy url</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 flex-col mt-10'>
                    <h1 className="text-2xl font-medium mb-10">Camera Health and update</h1>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <div className='border-[0.5px] flex rounded-xl flex-col gap-2 p-4 w-[30%] min-h-[200px]'>
                            <h1 className='text-xl font-medium'>
                                Offline Alert
                            </h1>
                            <p className='text-gray-400'>If camera is continuously offline for</p>
                            <h1 className='text-xl font-medium'>
                                12 minutes
                            </h1>
                            <p className='text-gray-400'>Send email to </p>
                            <p className='font-semibold'>email.to</p>
                        </div>
                        <div className='border-[0.5px] flex rounded-xl flex-col gap-2 p-4 w-[30%] min-h-[200px]'>
                            <h1 className='text-xl font-medium'>
                                Health Grade
                            </h1>
                            <h1 className='text-3xl font-medium'>
                                96%
                            </h1>
                            <p className='text-gray-400'>CHeers , this camera  had no offline time in the last 30 days</p>
                            <p className='font-medium text-green-400'>Grade A</p>
                        </div>
                        <div className='border-[0.5px] flex rounded-xl flex-col gap-2 p-4 w-[30%] h-[200px] overflow-y-scroll' >
                            <h1 className='text-xl font-medium'>
                                Helath Logs
                            </h1>
                            <p className='text-gray-400'>Today 4:00 pm :Activated</p>
                            <p className='text-gray-400'>Yesterday 12:00 pm :Deactivated</p>
                            <p className='text-gray-400'>Today 4:00 pm :Activated</p>
                            <p className='text-gray-400'>Yesterday 12:00 pm :Deactivated</p>
                            <p className='text-gray-400'>Yesterday 12:00 pm :Deactivated</p>
                            <p className='text-gray-400'>Yesterday 12:00 pm :Deactivated</p>
                            <p className='text-gray-400'>Yesterday 12:00 pm :Deactivated</p>
                            <p className='text-gray-400'>Today 4:00 pm :Activated</p>

                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-10 flex-col'>
                    <h1 className="text-2xl font-medium mb-10">Recent recordings</h1>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <div className='border-[0.5px] flex rounded-xl flex-col gap-1 p-4 w-[30%] min-h-[200px]'>
                            <Image src={img2} className=' rounded-xl aspect-square' alt="" />
                            <h1 className='text-xl font-medium'>
                                Recording_1123
                            </h1>
                            <p className='text-gray-400'>Recording : Today , 4:00 pm </p>
                        </div>
                        <div className='border-[0.5px] flex rounded-xl flex-col gap-1 p-4 w-[30%] min-h-[200px]'>
                            <Image src={img2} className=' rounded-xl aspect-square' alt="" />
                            <h1 className='text-xl font-medium'>
                                Recording_1123
                            </h1>
                            <p className='text-gray-400'>Recording : Today , 4:00 pm </p>
                        </div>
                        <div className='border-[0.5px] flex rounded-xl flex-col gap-1 p-4 w-[30%] min-h-[200px]'>
                            <img src={img2} className=' rounded-xl aspect-square' alt="" />
                            <h1 className='text-xl font-medium'>
                                Recording_1123
                            </h1>
                            <p className='text-gray-400'>Recording : Today , 4:00 pm </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CmaeraDetails