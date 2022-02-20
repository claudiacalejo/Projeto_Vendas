import React from 'react'
import "./topbar.css"
import {NotificationsNone, Add, Person } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarwrapper'>
            <div className='topleft'>
            </div>
            <div className='topright'>
                <div className="topbarIconContainer">
                    <Add/>
                </div>
                <div className="topbarIconContainer">
                    <Person/>
                </div>
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
            </div>
        </div>
    
    </div>
  )
}
