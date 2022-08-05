import React, { useState } from 'react'

import menu from '../../icons/Menu.png'
import info from '../../icons/info.png'
import favoriteStore from '../../icons/favoriteStore.png'
import search from '../../icons/search.png'
import account from '../../icons/account.png'
import washingMachine from '../../icons/washing-machine.png'
import apps from '../../icons/apps.png'
import repairs from '../../icons/repairs.png'

import './menuSlides.css'

const MenuSlides = () => {
  const [allowBlur, setAllowBlur] = useState(false)
  const [allowBlur2, setAllowBlur2] = useState(false)
  const [showMenuDropdown, setShowMenuDropdown] = useState(false)
  const [showMenuDropdown2, setShowMenuDropdown2] = useState(false)

  const handleMenuMouseLeave = () => {
    setAllowBlur(true)
  }

  const handleMenuMouseEnter = () => {
    setAllowBlur(false)
  }

  const handleMenuBlur = () => {
    if (allowBlur) {
      setShowMenuDropdown(false)
    }
  }

  const handleMenuMouseLeave2 = () => {
    setAllowBlur2(true)
  }

  const handleMenuMouseEnter2 = () => {
    setAllowBlur2(false)
  }

  const handleMenuBlur2 = () => {
    if (allowBlur2) {
      setShowMenuDropdown2(false)
    }
  }

  return (
    <div className='componentFirst' style={{ marginTop: '5px' }}>
      <div className='componentSecond'>
        <div className='MenuSlides'>
          <div className='MenuSlidesLeft'>
            <div
              className='MenuSlidesIconLeft'
              tabIndex={0}
              onMouseLeave={handleMenuMouseLeave}
              onMouseEnter={handleMenuMouseEnter}
              onBlur={(e) => handleMenuBlur(e)}
              onClick={() => setShowMenuDropdown(!showMenuDropdown)}
            >
              <img src={menu} alt='' className='MenuSlidesIconLeftMenu' />
              {showMenuDropdown && (
                <div className='menuDropdown'>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Home</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>My Washers</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={repairs} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Troubleshooting</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Technicians</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={favoriteStore} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Shop Products</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Find Services</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Sell Yours</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Service Add-Ons</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>All My Devices</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Other Super Apps</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={info} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>App Help</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Account</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>For Business</div>
                  </div>
                </div>
              )}
            </div>
            <div className='MenuSlidesIconLeft'>
              <img src={washingMachine} alt='' />
            </div>
            <div className='MenuSlidesIconLeft'>
              <img src={info} alt='' />
            </div>
            <div className='MenuSlidesIconLeft'>
              <img src={favoriteStore} alt='' />
            </div>
          </div>
          <div className='MenuSlidesRight'>
            <div className='MenuSlidesIconRight'>
              <img src={search} alt='' />
            </div>
            <div className='MenuSlidesIconRight'>
              <img src={account} alt='' />
            </div>
            <div
              className='MenuSlidesIconRight'
              tabIndex={0}
              onMouseLeave={handleMenuMouseLeave2}
              onMouseEnter={handleMenuMouseEnter2}
              onBlur={(e) => handleMenuBlur2(e)}
              onClick={() => setShowMenuDropdown2(!showMenuDropdown2)}
            >
              <img src={apps} alt='' className='MenuSlidesIconRightApp' />
              {showMenuDropdown2 && (
                <div className='menuDropdown' style={{ right: 0, left: 'auto' }}>
                  <div className='menuDropdownTitle'>
                    <div className='menuDropdownTitleText'>TRY OTHER FREE APPS</div>
                    <div className='menuDropdownTitleIcon'>
                      <img src={apps} alt='' className='MenuSlidesIconRightAppOpen' />
                    </div>
                  </div>
                  <div className='menuDropdownGrid'>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>cookers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>ovens</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>microwaves</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>fridges</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>freezers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>dishwashers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>hobs</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>slowcookers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>airfryers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>boilers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>thermostats</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>radiators</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>washer</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>dryer</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>vacuums</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>breadmaker</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>coffeemaker</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={washingMachine} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>Juicers</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuSlides
