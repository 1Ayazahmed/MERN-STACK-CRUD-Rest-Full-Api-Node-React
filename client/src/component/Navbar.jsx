import React from 'react'

const navbar = () => {
  return (
    <div className='w-full flex justify-between h-15 items-center bg-gray-200 p-2 shadow px-5'>
        <div className='w-[10%] h-full flex items-center'>
            <h1 className='font-bold text-zinc-800'>Logo</h1>
        </div>
        <div className='w-[50%] h-full'>
            <ul className='w-full h-full flex gap-6 list-none items-center text-zinc-800 font-medium '>
                <li className='cursor-pointer' >Home</li>
                <li className='cursor-pointer' >About</li>
                <li className='cursor-pointer' >Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default navbar