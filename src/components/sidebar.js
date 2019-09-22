import React from 'react'
// import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <header className='sidebar__header'>
        <button className='btn btn--logo'>B</button>
        <button className='btn btn--dropdown'>Business name</button>
      </header>
      <nav className='sidebar__nav'>
        <ul className='list'>
          <li className='list__item'>
            <a href='/'>
              <span>
                <img src='/assets/svgs/home.svg' alt='Dashboard' />
              </span>
              Dashboard
            </a>
          </li>
          <li className='list__item'>
            <a href='/'>
              <span>
                <img src='/assets/svgs/balances.svg' alt='Balances' />
              </span>
              Balances
            </a>
          </li>
          <li className='list__item'>
            <a href='/'>
              <span>
                <img src='/assets/svgs/home.svg' alt='Payments' />
              </span>
              Payments
            </a>
          </li>
          <li className='list__item'>
            <a href='/'>
              <span>
                <img src='/assets/svgs/home.svg' alt='Transfers' />
              </span>
              Transfers
            </a>
          </li>
          <li className='list__item'>
            <a href='/'>
              <span>
                <img src='/assets/svgs/home.svg' alt='Developers' />
              </span>
              Developers
            </a>
          </li>
          <li className='list__item'>
            <a href='/'>
              <span>
                <img src='/assets/svgs/home.svg' alt='Settings' />
              </span>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
