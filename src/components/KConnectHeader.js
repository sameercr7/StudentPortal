import React from 'react';
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import {AssignmentTurnedInOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons'
import {Avatar, Button} from '@material-ui/core'
import "./css/Kheader.css";
function KconnectHeader() {
  return (
      <div className= 'kheader'>
        <div className="kheader-content">
           <div className="kheader__logo">
             <img src="" alt="logo">
              
             </img>
             </div>
             <div className='kheader__icons'>
               <div className='kheader__icon'><HomeIcon/></div>
               <div className='kheader__icon'><FeaturedPlayListOutlinedIcon/></div>
               <div className='kheader__icon'><AssignmentTurnedInOutlined/></div>
               <div className='kheader__icon'><PeopleAltOutlined/></div>
               <div className='kheader__icon'><NotificationsOutlined/></div>
             </div>
             <div className='kheader__input'>
               <Search/>
               <input type="text" placeholder='Search questions'/>
             </div>
             <div className='kheader__Rem'>
               <Avatar/>
             </div>
             <Button>Add Question</Button>
        
         </div>
      </div>
  )
};

export default KconnectHeader;
