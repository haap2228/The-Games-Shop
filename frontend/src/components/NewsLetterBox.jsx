import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscirbe now and get 20% off</p>
        <p className='text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum error explicabo hic odio debitis quia reiciendis quibusdam nemo excepturi blanditiis recusandae iste obcaecati, rem libero veniam consectetur tenetur nesciunt!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
