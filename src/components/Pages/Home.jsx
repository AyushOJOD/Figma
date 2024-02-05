import React from 'react'
import { GoChecklist } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { TbChecklist } from "react-icons/tb";
import img from "../../assets/homeImage.jpg";
import Image from 'next/image';

const Home = ({ state }) => {
    const cameras = [
        {
            name: "Bank Enterance front view",
            image: img,
            recipesCount: 4,
            detection: {
                time: new Date(),
                message: "New face detected"
            },
            location: "Noida , Delhi",

        },

    ]
    return (
        <div className='flex lg:flex-row flex-col-reverse mx-auto min-h-screen justify-around items-center gap-4 bg-gray-300 p-4 px-10' >
            {/* Cameras */}
            <div className='flex flex-wrap justify-center gap-6'>
                {
                    cameras.map((camera, i) => (
                        <button key={i} className='bg-white rounded-lg'>
                            <Image src={camera.image} className='h-60 aspect-square rounded-t-lg' alt="image" />
                            <div className='p-4 px-6 flex flex-col gap-2'>
                                <h1 className='font-semibold text-xl leading-7 tracking-wide'>{camera.name}</h1>
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <CiSettings className='text-xl' />
                                    {camera.recipesCount} Recipes added
                                </div>
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <TbChecklist className='text-xl' />
                                    {camera.detection.time.getDate()} Jan , {camera.detection.message}
                                </div>
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <CiLocationOn className='text-xl' />
                                    {camera.location}
                                </div>
                                <div className='mt-2 flex justify-between mx-2'>
                                    <button className='text-white bg-green-400 px-2 py-0.5 rounded-md'>{state}</button>
                                    <div className='flex items-center justify-center gap-2'>
                                        <button> <MdDelete className='text-xl text-red' /> </button>
                                        <button> <AiOutlineSound className='text-xl' /> </button>
                                        <button > <CiVideoOn className='text-xl' /> </button>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))
                }

            </div >
            {/* Button */}
            <div className='flex flex-col bg-white p-6 px-10 rounded-lg gap-4' >
                <GoChecklist className='text-5xl text-red-800' />
                <div className='flex justify-between gap-4'>
                    Recipe Management
                    <button className='text-gray-400'>
                        Manage
                    </button>
                </div>
            </div >
        </div >
    )
}

export default Home