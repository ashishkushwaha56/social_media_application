import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <div className="navbar flex items-center justify-between p-5 border border-gray-700">
      <div className="left flex items-center gap-7">
          <Link to = '/'>
            <span className="font-bold text-lg text-red-500">
              Sociogram
            </span>
          </Link>
          <HomeOutlinedIcon/>
          <DarkModeOutlinedIcon/>
          <GridViewOutlinedIcon/>
          <div className="search flex items-center gap-2 border border-gray-300 rounded-md p-1">
            <SearchOutlinedIcon/>
            <input type="text" placeholder='Search...' className="border-none w-96"/>
          </div>
      </div>
      <div className="right flex items-center gap-5">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user flex items-center gap-2 font-semibold">
          <img src="" alt="" className='w-8 h-8 rounded-full object-cover'/>
          <span >Ashish</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar