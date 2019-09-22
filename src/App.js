import React, { useState } from 'react'
// import Sidebar from './components/sidebar'
// import Main from './components/main'
import {
  FaBell,
  FaChevronDown,
  FaCog,
  FaCode,
  FaCreditCard
} from 'react-icons/fa'

const styles = {
  toggle: {
    background: '#333',
    position: 'relative',
    borderRadius: '50px',
    boxShadow:
      'inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2)'
  },
  label: {
    display: 'block',
    width: '16px',
    height: '16px',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    cursor: 'pointer',
    background: '#fcfff4',
    background:
      'linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%)',
    borderRadius: '50px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.4s ease'
  },
  input: {
    visibility: 'hidden'
  }
}

// .slideOne {
//   label {
//   }
//   input[type=checkbox] {
//     &:checked + label {
//       left: 37px;
//     }
//   }
// }

function App() {
  // const [checked, setChecked] = React.useState(true)
  return (
    <div className='contain'>
      <div className='flex'>
        <aside className='sidebar w-64.5 border-r-2 border-gray-300 p-4'>
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
                <a
                  py-2
                  className='py-2 flex items-center font-bold text-link-green'
                  href='/'
                  text-link-blue
                >
                  <span>
                    <img
                      className='h-4 w-4 fill-current'
                      src='/assets/svgs/balances.svg'
                      alt=''
                    />
                  </span>
                  <span className='ml-3'>Balances</span>
                </a>
              </li>
              <li className='mt-1'>
                <a
                  className='py-2 text-link-blue flex items-center font-normal'
                  href='/'
                >
                  <span>
                    <FaCreditCard />
                    {/* <img
                      className='h-4 w-4'
                      src='/assets/svgs/home.svg'
                      alt=''
                    /> */}
                  </span>
                  <span className='ml-3'>Payments</span>
                </a>
              </li>
              <li className='mt-1'>
                <a
                  className='py-2 text-link-blue flex items-center font-normal'
                  href='/'
                >
                  <span>
                    <img
                      className='h-4 w-4'
                      src='/assets/svgs/home.svg'
                      alt=''
                    />
                  </span>
                  <span className='ml-3'>Transfers</span>
                </a>
              </li>
              <li className='mt-1'>
                <a
                  className='py-2 text-link-blue flex items-center font-normal'
                  href='/'
                >
                  <span>
                    <FaCode />
                    {/* <img
                      className='h-4 w-4'
                      src='/assets/svgs/home.svg'
                      alt=''
                    /> */}
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
                    {/* <img
                      className='h-4 w-4'
                      src='/assets/svgs/home.svg'
                      alt=''
                    /> */}
                  </span>
                  <span className='ml-3'>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className='main flex-1 py-4 px-25'>
          <header className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold m-0 p-0 text-darker-blue'>
              Balances
            </h1>
            <div className='right flex items-center'>
              <div className='flex items-center mr-10'>
                <input
                  type='checkbox'
                  value='none'
                  id='mode'
                  name='check'
                  checked
                  className='mr-2'
                  // style={styles.input}
                />
                <label
                  // style={styles.label}
                  htmlFor='mode'
                  className='text-lg font-bold text-dark-blue'
                >
                  Test Mode
                </label>
              </div>
              <div className='mr-10 relative'>
                <span className='absolute right-0 top-0 -mr-1 -mt-1 bg-badge-red w-4 h-4 rounded-full text-badge-gray text-xs flex items-center justify-center text-center'>
                  1
                </span>
                <FaBell className='text-2xl' />
              </div>
              <div className='flex items-center text-dark-blue-name font-semibold'>
                <span className='h-8 w-8 rounded-full flex items-center justify-center text-center bg-user-gray'>
                  O
                </span>
                <span className='ml-3'>Oluwatobi Mayowa</span>
              </div>
            </div>
          </header>
          <div className='content mt-10 bg-white rounded shadow-md'>
            <ul>
              <li className='flex justify-between items-center py-4 px-6 border-b-2 border-gray-200 text-heading-blue'>
                <div className='flex-1'>
                  <span className='text-lg'>Name</span>
                </div>
                <div className='w-1/2 flex justify-between items-center '>
                  <div className='text-lg w-1/2 text-right mr-20 '>Pending</div>
                  <div className='text-lg w-1/2 text-right'>Available</div>
                </div>
              </li>
              <li className='flex justify-between items-center py-5 px-6 border-b-2 border-gray-200'>
                <div className='flex-1'>
                  <span className='text-lg font-bold text-list-blue flex items-center'>
                    <img
                      className='h-8 w-8 mr-3'
                      src='/assets/logos/bitcoin.jpg'
                      alt='Bitcoin'
                    />
                    Bitcoin
                  </span>
                </div>
                <div className='w-1/2 flex justify-between items-center'>
                  <div className='text-lg w-1/2 text-right mr-20'>
                    <span className='block text-dark-blue-number font-semibold'>
                      10.12345678 BTC
                    </span>
                    <span className='block text-sm text-small-number'>
                      2,000,000 NGN
                    </span>
                  </div>
                  <div className='text-lg w-1/2 text-right'>
                    <span className='block text-dark-blue-number font-semibold'>
                      10.12345678 BTC
                    </span>
                    <span className='block text-sm text-small-number'>
                      2,000,000 NGN
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex justify-between items-center py-5 px-6 border-b-2 border-gray-200 bg-list-gray'>
                <div className='flex-1'>
                  <span className='text-lg font-bold text-list-blue flex items-center'>
                    <img
                      className='h-8 w-8 mr-3'
                      src='/assets/logos/ethereum.jpg'
                      alt='Ethereum'
                    />
                    Ethereum
                  </span>
                </div>
                <div className='w-1/2 flex justify-between items-center'>
                  <div className='text-lg w-1/2 text-right mr-20'>
                    <span className='block text-dark-blue-number font-semibold'>
                      10.12345678 BTC
                    </span>
                    <span className='block text-sm text-small-number'>
                      2,000,000 NGN
                    </span>
                  </div>
                  <div className='text-lg w-1/2 text-right'>
                    <span className='block text-dark-blue-number font-semibold'>
                      10.12345678 BTC
                    </span>
                    <span className='block text-sm text-small-number'>
                      2,000,000 NGN
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex justify-between items-center py-5 px-6 border-b-2 border-gray-200'>
                <div className='flex-1'>
                  <span className='text-lg font-bold text-list-blue'>
                    Naira
                  </span>
                </div>
                <div className='w-1/2 flex justify-between items-center text-dark-blue-number font-semibold'>
                  <div className='text-lg w-1/2 text-right mr-20'>
                    NGN 800,000
                  </div>
                  <div className='text-lg w-1/2 text-right'>NGN 2,000,000</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
