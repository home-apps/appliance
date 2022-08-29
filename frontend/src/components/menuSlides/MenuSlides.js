import React, { useState } from 'react'

import menu from '../../icons/Menu.png'
import info from '../../icons/info.png'
import favoriteStore from '../../icons/favoriteStore.png'
import search from '../../icons/search.png'
import account from '../../icons/account.png'
import washingMachine from '../../icons/washing-machine.png'
import appliances from '../../icons/appliances.png'
import apps from '../../icons/apps.png'
import repairs from '../../icons/repairs.png'
import home from '../../icons/home.png'
import userSettings from '../../icons/userSettings.png'
import apps2 from '../../icons/apps2.png'
import splitExchange from '../../icons/splitExchange.png'
import sell from '../../icons/sell.png'
import devices from '../../icons/devices.png'
import cooker from '../../icons/cooker.png'
import vacuum from '../../icons/vacuum.png'
import oven from '../../icons/oven.png'
import microwave from '../../icons/microwave.png'
import fridges from '../../icons/fridges.png'
import dishwasher from '../../icons/dishwasher.png'
import radiator from '../../icons/radiator.png'
import coffeemaker from '../../icons/coffeemaker.png'
import hobs from '../../icons/hobs.png'
import cookingPot from '../../icons/cookingPot.png'
import breadmaker from '../../icons/breadmaker.png'
import freezers from '../../icons/freezers.png'
import airfyer from '../../icons/airfyer.png'
import thermostat from '../../icons/thermostat.png'
import boiler from '../../icons/boiler.png'
import juicerJuice from '../../icons/juicerJuice.png'

import './menuSlides.css'
import { useNavigate } from 'react-router-dom'

const MenuSlides = () => {
  const navigate = useNavigate()
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

  const GoToDashboard = () => {
    let route = window.location.pathname
    console.log(route)
    if (route === '/dashboard') {
      navigate('../dashboardLogin')
    } else {
      navigate('../dashboard')
    }
  }

  const GoToHome = () => {
    navigate('../', { replace: true })
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
                    <img src={home} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Home</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={appliances} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>My Washers</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={repairs} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Troubleshooting</div>
                  </div>
                  <div className='menuDropdownItem red'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Technicians</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={favoriteStore} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Shop Products</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={sell} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Find Services</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={splitExchange} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Sell Yours</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={apps2} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Service Add-Ons</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={devices} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>All My Devices</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={apps} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Other Super Apps</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={info} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>App Help</div>
                  </div>
                  <div className='menuDropdownItem'>
                    <img src={userSettings} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>Account</div>
                  </div>
                  <div className='menuDropdownItem red'>
                    <img src={washingMachine} alt='' className='menuDropdownIMG' />
                    <div className='menuDropdownItemText'>For Business</div>
                  </div>
                </div>
              )}
            </div>
            <div className='MenuSlidesIconLeft' onClick={GoToDashboard}>
              <img src={appliances} alt='' />
            </div>
            <div className='MenuSlidesIconLeft' onClick={GoToHome}>
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
                    <div className='menuDropdownTitleText'>
                      <div className='menuDropdownTitleTextButton'>Sign In</div>
                      <div className='menuDropdownTitleTextButtonLine' />
                      <div className='menuDropdownTitleTextButton'>Sign Up</div>
                    </div>
                    <div className='menuDropdownTitleIcon'>
                      <img src={apps} alt='' className='MenuSlidesIconRightAppOpen' />
                    </div>
                  </div>
                  <div className='menuDropdownGrid'>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={cooker} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>cookers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={oven} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>ovens</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={microwave} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>microwaves</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={fridges} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>fridges</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={freezers} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>freezers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={dishwasher} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>dishwashers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={hobs} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>hobs</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={cookingPot} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>slowcookers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={airfyer} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>airfryers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={boiler} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>boilers</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={thermostat} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>thermostats</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={radiator} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>radiators</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={appliances} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>washer</div>
                    </div>
                    <div className='menuDropdownGridItem '>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={appliances} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>dryer</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={vacuum} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>vacuums</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={breadmaker} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>breadmaker</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={coffeemaker} alt='' className='menuDropdownGridItemIMG' />
                      </div>
                      <div className='menuDropdownGridItemText'>coffeemaker</div>
                    </div>
                    <div className='menuDropdownGridItem'>
                      <div className='menuDropdownGridItemIcon'>
                        <img src={juicerJuice} alt='' className='menuDropdownGridItemIMG' />
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
