import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import './css/KconnectBox.css'

function KconnectBox() {
  const user = useSelector(selectUser);
  return (
    <div className='kconnectBox'>
        <div className='kconnectBox__info'>
            <Avatar src={user?.photo}/>
        </div>
        <div className='kconnectBox__kconnect'><p>question??</p></div>
    </div>
  )
}

export default KconnectBox