import React from 'react'
import Layout from '../components/layout'
import { FaChevronDown } from 'react-icons/fa'

function Transfers() {
  return (
    <Layout name='Transfers'>
      <div className='content mt-10 bg-white rounded shadow-md'>
        <div className='flex justify-end items-center px-4 py-4 lg:px-8'>
          <button className='bg-light-green text-white text-base mt-2 px-5 py-1 rounded flex items-center'>
            New transfer <FaChevronDown className='mt-1 ml-3' />
          </button>
        </div>
        <div className='bg-light-gray py-4 px-4 flex justify-between items-center text-heading-blue lg:px-8'>
          <div className='w-1/3 lg:flex-1'>Reference</div>
          <div className='w-2/3 flex justify-between items-center'>
            <div className='lg:text-lg w-1/2 text-center lg:text-right lg:mr-20 '>
              Status
            </div>
            <div className='lg:text-lg w-1/2 text-right'>Amount</div>
          </div>
        </div>
        <div className='items-center flex flex-col justify-center pt-16 pb-32 text-dark-blue text-center lg:pb-56'>
          <h2 className='text-2xl font-semibold block '>
            You haven't made any transfers yet
          </h2>
          <p className='lg:text-lg font-normal block'>
            You transfers will be displayed here.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Transfers
