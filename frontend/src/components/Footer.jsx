import React from 'react'
import { assets } from '../assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
           <div >
                <img src={assets.Logo} className='w-40 mb-5' alt="" />
                <p className='w-full sm:w-2/3 text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos quaerat iure at voluptate neque! Ad, deleniti numquam. Harum deleniti dicta esse beatae quae ullam, dolorum eius doloribus voluptatem?</p>
           </div>
            <div className='mt-11'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <Link to='/'><li className='hover:text-black hover:cursor-pointer'>Home</li></Link>
                    <li className='hover:text-black hover:cursor-pointer'>About us</li>
                    <li className='hover:text-black hover:cursor-pointer'>Delivery</li>
                    <li className='hover:text-black hover:cursor-pointer'>Privacy policy</li>
                </ul>
            </div>

            <div className='mt-11'>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>+1-212-456-7890</li>
                      <li>clothora@gmail.com</li>
                </ul>
            </div>

        </div>
          <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@ clothora.com - All Right Reserved</p>
          </div>
    </div>
  )
}

export default Footer