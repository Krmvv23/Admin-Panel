import React from 'react'
import { NavLink} from 'react-router-dom'
import {IoHomeOutline} from 'react-icons/io5'
import {TbBellRinging} from 'react-icons/tb'
import './SideNav.scss'
import { useRef } from 'react'

const SideNav = () => {
    const list = useRef()
    const handleNav = (e)=>{
        document.querySelectorAll('.SideNav_list').forEach(li=>{
            li.classList.remove('active')
            e.traget.current.className.add('active')
        })
    }
  return (
    <div className='col-1 SideNav'>
        <ul className='list-unstyled '>
            <li className='SideNav_list '><NavLink activeclassname="active" to='/' ><IoHomeOutline className='SideNav_icon'/></NavLink></li>
            <li className='SideNav_list'><NavLink activeclassname="active" to='/order' ><TbBellRinging className='SideNav_icon'/></NavLink></li>
        </ul>
    </div>
  )
}

export default SideNav