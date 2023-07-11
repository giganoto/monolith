import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className='flex mt-5 ml-5 mr-5 justify-between'  >
        <div className='flex px-0 flex-col'>
        <div className=' text-gigaRed font-bold'>Giganoto</div>
        <div className='bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Igniting your coding journey to unlock limitless possibilities</div>
        <div className='mt-5  text-stone-400 font-bold'>Follow Us</div>
            <div className='flex space-x-5 font-semibold'>
                <a href="https://www.youtube.com/@KheraShanu" target='_blank'className='cursor-pointer hover:text-btnOrange  text-stone-400' >Youtube</a>
                <a href="https://twitter.com/kherashanu " target='_blank'className='cursor-pointer hover:text-btnOrange  text-stone-400'>Twitter</a>
                <a href="https://discord.gg/6ysMUnW2k3" target='_blank'className='cursor-pointer hover:text-btnOrange  text-stone-400'>Discord</a>
            </div>
            <div className='flex ml-96 text-stone-400'>
            Copyright @2023 Giganoto All rights reserverd
       </div>
        </div>
        <div className='flex space-x-10'>
            <div onClick={()=> navigate('/')}  className='cursor-pointer hover:text-btnOrange font-semibold'>Home</div>
            <div  onClick={()=> navigate('/dsa-sheet')}  className='cursor-pointer hover:text-btnOrange font-semibold'>DsaSheet</div>
            <div  onClick={()=> navigate('/blogs')} className='cursor-pointer hover:text-btnOrange font-semibold'>Blogs</div>
            <div  onClick={()=> navigate('/')} className='cursor-pointer hover:text-btnOrange font-semibold'>Watari</div>
        </div>
     
    </div>
  )
}
