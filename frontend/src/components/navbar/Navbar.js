import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

import './navbar.css'
const Navbar = () => {
     const [Mobile, setMobile] = useState(false)
     useEffect(() => {
          WindowChange()
     }, [])

     const HandleMobileMenu = () => {
          setMobile(!Mobile)
     }

     const WindowChange = () => {
          if (window.innerWidth > 1050) {
               setMobile(false)
          }
     }

     window.addEventListener('resize', WindowChange)
     return (
          <div className='navbar'>
               <div className='navbarMobile'>
                    <div className='navbarCenterIcon'>
                         <div className='navbarMobileTopRight '>MobileLeftTitle</div>
                    </div>
               </div>
               <div className='navbarMobileButton' >
                    <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu}/>
                    <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
                         <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
                              <div className='navbarMenuContainer'>
                                   <div className='navbarMobileTop'>
                                        <div className='navbarMobileTopRight menuOpen'>MobileMenuText</div>
                                        <div className='navbarMobileTopLeft'>
                                             <Close className='CloseIcon' onClick={HandleMobileMenu} />
                                        </div>
                                   </div>
                                   <div className='navbarMobileMain'>
                                        <div className='navbarCenterLink opacity7'>MobileMenuMiddleText</div>
                                        <div className='navbarCenterLink navbarRightButton'>MobileMenuButton</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='navbarContainer SlideRightAnimation'>
                    <div className='navbarLeft'>
                         <div className='navbarLeftLogo '>LeftNavbar</div>
                    </div>
                    <div className='navbarCenter'>
                         <div className='navbarCenterItem'>MiddleNavbar</div>
                    </div>
                    <div className='navbarRight'>
                         <div className='navbarRightItem'>RightNavbar</div>
                         <div className='navbarRightButton'>NavbarButton</div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
