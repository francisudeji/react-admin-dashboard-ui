import React from 'react'
import Sidebar from './sidebar'
import Main from './main'

function Layout({ children, name }) {
  // const [isOpen, setIsOpen] = useState(false)
  console.log(React.useState)
  return (
    <div className='contain'>
      <div className='relative flex'>
        <Sidebar name={name} />
        <Main name={name}>{children}</Main>
      </div>
    </div>
  )
}

export default Layout
