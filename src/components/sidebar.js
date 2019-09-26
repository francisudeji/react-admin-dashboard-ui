import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaDirections,
  FaChevronDown,
  FaCreditCard,
  FaCode,
  FaCog
} from 'react-icons/fa'

function Sidebar({ name, isOpen }) {
  const className = pathname =>
    name.toLowerCase() === pathname
      ? 'text-link-green font-bold'
      : 'text-link-blue'

  return (
    <aside
      className={`border-r-2 border-gray-300 p-4 flex-col justify-between lg:flex lg:relative lg:ml-0 flex ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <div>
        <header className='flex pt-3'>
          <button className='h-8 px-1 ml-1 bg-transparent text-lg font-bold text-darker-blue flex items-center focus:outline-none'>
            <span className='w-8 h-8 bg-white shadow rounded text-sm font-semibold flex items-center justify-center mr-2'>
              B
            </span>
            Business name{' '}
            <FaChevronDown className='ml-2 mt-1 text-xs text-chevron-blue' />
          </button>
        </header>
        <nav className='mt-10 ml-2'>
          <ul>
            <li className='mt-1'>
              <a
                className='py-2 text-link-blue font-normal flex items-center hover:text-link-green'
                href='#dashboard'
              >
                <span>
                  <img
                    className='h-4 w-4 fill-current'
                    src='/assets/svgs/home.svg'
                    alt='dashboard icon'
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
                    alt='balances icon'
                  />
                </span>
                <span className='ml-3'>Balances</span>
              </Link>
            </li>
            <li className='mt-1'>
              <a
                className='py-2 text-link-blue flex items-center font-normal hover:text-link-green'
                href='#payments'
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
                  <FaDirections />
                </span>
                <span className='ml-3'>Transfers</span>
              </Link>
            </li>
            <li className='mt-1'>
              <a
                className='py-2 text-link-blue flex items-center font-normal hover:text-link-green'
                href='#developers'
              >
                <span>
                  <FaCode />
                </span>
                <span className='ml-3'>Developers</span>
              </a>
            </li>
            <li className='mt-1'>
              <a
                className='py-2 text-link-blue flex items-center font-normal hover:text-link-green'
                href='#settings'
              >
                <span>
                  <FaCog />
                </span>
                <span className='ml-3'>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='items-end'>
        <button className='flex bg-payment-btn text-light-green items-center justify-center px-6 py-2'>
          <img
            className='w-4 h-4'
            src='/assets/svgs/plus.png'
            alt='Accept payment'
          />{' '}
          <span className='ml-3'>Accept Payment</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
