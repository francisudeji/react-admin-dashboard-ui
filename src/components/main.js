import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa'

function Main({ children, name, isOpen, setIsOpen }) {
  const [checked, setChecked] = useState(true)

  return (
    <main className='main flex-1 py-4'>
      <div className='w-11/12 lg:w-4/5 mx-auto'>
        <header className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
          <div className='flex items-center'>
            <button
              className='text-darker-blue border border-darker-blue p-2 rounded mr-4 hover:text-white hover:bg-darker-blue focus:text-white focus:bg-darker-blue lg:hidden'
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className='fill-current h-4 w-4'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
            <h1 className='text-3xl font-bold m-0 p-0 text-darker-blue lg:text-4xl'>
              {name}
            </h1>
          </div>
          <div className='right flex justify-between items-center mt-4 lg:mt-0'>
            <div className='flex items-center mr-10 toggle-wrapper relative'>
              <label
                htmlFor='mode'
                className='toggle-label font-bold text-dark-blue lg:text-lg'
                style={{
                  background: checked ? '#67C462' : '#D8D8D8'
                }}
              >
                <input
                  type='checkbox'
                  id='mode'
                  name='check'
                  checked={checked ? 'checked' : ''}
                  onChange={() => setChecked(!checked)}
                  className='toggle-input mr-2 focus:outline-none focus:shadow-lg'
                  style={{
                    transform: checked ? 'translateX(100%)' : 'translate(0)',
                    transition: 'all 0.1s ease-in-out'
                  }}
                />
              </label>
              <span className='ml-3 text-darker-blue font-bold'>Test Mode</span>
            </div>
            <div className='mr-10 relative'>
              <span className='absolute right-0 top-0 -mr-1 -mt-1 bg-badge-red w-4 h-4 rounded-full text-badge-gray text-xs flex items-center justify-center text-center'>
                1
              </span>
              <FaBell className='text-2xl' />
            </div>
            <div className='flex justify-center items-center text-dark-blue-name font-semibold'>
              <span className='h-8 w-8 rounded-full flex items-center justify-center text-center bg-user-gray'>
                O
              </span>
              <span className='ml-3 flex-1 text-right'>Oluwatobi Mayowa</span>
            </div>
          </div>
        </header>
        {children}
      </div>
    </main>
  )
}

export default Main
