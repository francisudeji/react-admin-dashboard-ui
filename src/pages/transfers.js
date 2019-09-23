import React from 'react'
import Layout from '../components/layout'
import { FaChevronDown } from 'react-icons/fa'

function Transfers() {
  return (
    <Layout name='Transfers'>
      <div className='content mt-10 bg-white rounded shadow-md'>
        <div className='flex justify-end items-center px-8 py-4'>
          <button className='bg-green-500 text-white text-base mt-2 px-5 py-1 rounded flex items-center'>
            New transfer <FaChevronDown className='mt-1 ml-3' />
          </button>
        </div>
        <div className='bg-light-gray py-4 px-8 flex justify-between items-center text-heading-blue'>
          <div className='flex-1'>Reference</div>
          <div className='w-1/2 flex justify-between items-center '>
            <div className='text-lg w-1/2 text-right mr-20 '>Status</div>
            <div className='text-lg w-1/2 text-right'>Amount</div>
          </div>
        </div>
        <div className='items-center flex flex-col justify-center pt-16 pb-64 text-dark-blue'>
          <h2 className='text-2xl font-semibold'>
            You haven't made any transfers yet
          </h2>
          <p className='text-lg font-normal'>
            You transfers will be displayed here.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Transfers
