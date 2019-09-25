import React from 'react'
import Sidebar from './sidebar'
import Main from './main'

function Layout({ children, name }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='container mx-auto h-100%'>
      <div className='relative flex h-100%'>
        <Sidebar name={name} isOpen={isOpen} />
        <Main name={name} isOpen={isOpen} setIsOpen={setIsOpen}>
          {children}
        </Main>
      </div>
    </div>
  )
}

export default Layout
