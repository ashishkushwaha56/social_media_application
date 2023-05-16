import React from 'react'
import NavBar from '../components/navbar/NavBar'
import RightBar from '../components/rightBar/RightBar'
import LeftBar from '../components/leftBar/LeftBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
        <div>
          <NavBar/>
          <div className="flex">
            {/* <LeftBar/> */}
            <Outlet/>
            {/* <RightBar/> */}
          </div>
        </div>
  )
}

export default Layout