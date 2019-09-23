import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaCreditCard, FaCode, FaCog } from 'react-icons/fa'

function Sidebar({ name }) {
  const className = pathname =>
    name.toLowerCase() === pathname
      ? 'text-link-green font-bold'
      : 'text-link-blue'

  return (
    <aside
      className='absolute top-0 left-0 h-100vh -ml-64.5 sidebar w-64.5 border-r-2 border-gray-300 p-4 lg:block lg:relative lg:ml-0'
      style={{ transition: 'all 0.5s ease-in-out' }}
    >
      <header className='flex pt-3'>
        <button className='w-8 h-8 bg-white shadow rounded text-sm font-semibold'>
          B
        </button>
        <button className='h-8 px-1 ml-1 bg-transparent text-lg font-bold text-darker-blue flex items-center'>
          Business name{' '}
          <FaChevronDown className='ml-2 mt-1 text-xs text-chevron-blue' />
        </button>
      </header>
      <nav className='mt-10 ml-2'>
        <ul>
          <li className='mt-1'>
            <a
              className='py-2 text-link-blue font-normal flex items-center'
              href='/'
            >
              <span>
                <img
                  className='h-4 w-4 fill-current'
                  src='/assets/svgs/home.svg'
                  alt=''
                />
              </span>
              <span className='ml-3'>Dashboard</span>
            </a>
          </li>
          <li className='mt-1'>
            <Link
              className={`py-2 flex items-center ${className('balances')}`}
              to='/'
            >
              <span>
                <img
                  className='h-4 w-4 fill-current'
                  src='/assets/svgs/balances.svg'
                  alt=''
                />
              </span>
              <span className='ml-3'>Balances</span>
            </Link>
          </li>
          <li className='mt-1'>
            <a
              className='py-2 text-link-blue flex items-center font-normal'
              href='/'
            >
              <span>
                <FaCreditCard />
              </span>
              <span className='ml-3'>Payments</span>
            </a>
          </li>
          <li className='mt-1'>
            <Link
              className={`py-2 flex items-center ${className('transfers')}`}
              to='/transfers'
            >
              <span>
                <img className='h-4 w-4' src='/assets/svgs/home.svg' alt='' />
              </span>
              <span className='ml-3'>Transfers</span>
            </Link>
          </li>
          <li className='mt-1'>
            <a
              className='py-2 text-link-blue flex items-center font-normal'
              href='/'
            >
              <span>
                <FaCode />
              </span>
              <span className='ml-3'>Developers</span>
            </a>
          </li>
          <li className='mt-1'>
            <a
              className='py-2 text-link-blue flex items-center font-normal'
              href='/'
            >
              <span>
                <FaCog />
              </span>
              <span className='ml-3'>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
