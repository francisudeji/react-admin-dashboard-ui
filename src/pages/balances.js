import React from 'react'
import Layout from '../components/layout'
import { FaBook } from 'react-icons/fa'

function Balances() {
  return (
    <Layout name='Balances'>
      <div className='content mt-10 bg-white rounded shadow-md'>
        <ul>
          <li className='flex justify-between items-center py-4 px-3 border-b-2 border-gray-200 text-heading-blue lg:p-6'>
            <div className='flex-1'>
              <span className='lg:text-lg'>Name</span>
            </div>
            <div className='w-2/3 lg:w-1/2 flex justify-between items-center '>
              <div className='lg:text-lg w-1/2 text-right lg:mr-20 '>
                Pending
              </div>
              <div className='lg:text-lg w-1/2 text-right'>Available</div>
            </div>
          </li>
          <li className='flex justify-between items-center py-5 px-3 border-b-2 border-gray-200 lg:px-6'>
            <div className='flex-1'>
              <span className='lg:text-lg font-bold text-list-blue flex items-center'>
                <img
                  className='hidden h-8 w-8 mr-3 sm:block'
                  src='/assets/logos/bitcoin.jpg'
                  alt='Bitcoin'
                />
                Bitcoin
              </span>
            </div>
            <div className='w-2/3 lg:w-1/2 flex justify-between items-center'>
              <div className='lg:text-lg w-1/2 text-right lg:mr-20'>
                <span className='block text-dark-blue-number font-semibold text-right '>
                  10.12345678 BTC
                </span>
                <span className='block text-sm text-small-number'>
                  2,000,000 NGN
                </span>
              </div>
              <div className='lg:text-lg w-1/2 text-right'>
                <span className='block text-dark-blue-number font-semibold'>
                  10.12345678 BTC
                </span>
                <span className='block text-sm text-small-number'>
                  2,000,000 NGN
                </span>
              </div>
            </div>
          </li>
          <li className='flex justify-between items-center py-5 px-3 border-b-2 border-gray-200 bg-list-gray lg:px-6'>
            <div className='flex-1'>
              <span className='lg:text-lg font-bold text-list-blue flex items-center'>
                <img
                  className='hidden h-8 w-8 mr-3 sm:block'
                  src='/assets/logos/ethereum.jpg'
                  alt='Ethereum'
                />
                Ethereum
              </span>
            </div>
            <div className='w-2/3 lg:w-1/2 flex justify-between items-center'>
              <div className='lg:text-lg w-1/2 text-right lg:mr-20'>
                <span className='block text-dark-blue-number font-semibold'>
                  10.12345678 BTC
                </span>
                <span className='block text-sm text-small-number'>
                  2,000,000 NGN
                </span>
              </div>
              <div className='lg:text-lg w-1/2 text-right'>
                <span className='block text-dark-blue-number font-semibold'>
                  10.12345678 BTC
                </span>
                <span className='block text-sm text-small-number'>
                  2,000,000 NGN
                </span>
              </div>
            </div>
          </li>
          <li className='flex justify-between items-center py-5 px-3 border-b-2 border-gray-200 lg:px-6'>
            <div className='flex-1'>
              <span className='lg:text-lg font-bold text-list-blue flex items-center'>
                <FaBook className='hidden h-8 w-8 text-green-naira mr-3 sm:block' />
                Naira
              </span>
            </div>
            <div className='w-2/3 lg:w-1/2 flex justify-between items-center text-dark-blue-number font-semibold'>
              <div className='lg:text-lg w-1/2 text-right lg:mr-20'>
                NGN 800,000
              </div>
              <div className='lg:text-lg w-1/2 text-right'>NGN 2,000,000</div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Balances
