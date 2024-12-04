import React from 'react'

const HeroContent = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pl-20 pr-20">
        <div>
            <p className='text-5xl text-white font-bold mt-10'>Explore homes that fits your dreams</p>
        </div>
        <div className='flex justify-center mt-10 gap-7 flex-col md:flex-row'>
        <button type="button" className="text-gray-200 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Projects</button>

        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <a href="#contact">Contact Us</a>
        </button>
        </div>
    </div>
  )
}

export default HeroContent