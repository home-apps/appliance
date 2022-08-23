import React, { useEffect, useState } from 'react'

import products from '../../data/product.json'

import manual from '../../icons/manual2.png'
import techSpecs from '../../icons/techSpecs.png'
import support from '../../icons/support.png'
import favoriteStore from '../../icons/favoriteStore.png'
import service from '../../icons/service.png'
import bookmark from '../../icons/bookmark.png'
import qrCode from '../../icons/qrCode.png'
import share from '../../icons/share.png'
import resell from '../../icons/resell.png'
import recycleWhite from '../../icons/recycleWhite.png'
import donateWhite from '../../icons/donateWhite.png'
import favoriteCart from '../../icons/favoriteCart.png'
import rentWhite from '../../icons/rentWhite.png'
import financingWhite from '../../icons/financingWhite.png'
import oven from '../../icons/oven.png'
import devices from '../../icons/devices.png'
import fridges from '../../icons/fridges.png'
import cooker from '../../icons/cooker.png'
import vacuum from '../../icons/vacuum.png'
import air from '../../icons/air.png'
import microwave from '../../icons/microwave.png'
import tv from '../../icons/tv.png'
import coffeemaker from '../../icons/coffeemaker.png'
import light from '../../icons/light.png'
import dishwasher from '../../icons/dishwasher.png'
import radiator from '../../icons/radiator.png'
import hobs from '../../icons/hobs.png'
import washing from '../../icons/washing.png'
import adapters from '../../icons/adapters.png'
import mowers from '../../icons/mowers.png'

import './dashboard.css'

const Product = () => {
  const product = products[0]

  const [freeAccountShow, setFreeAccountShow] = useState(false)
  const [progressBarValue, setProgressBarValue] = useState(40)

  //SET progress bar value
  useEffect(() => {
    setProgressBarValue(40)
  }, [])

  return (
    <>
      <div className={freeAccountShow ? 'freeAccountContainer activeFreeAccount' : 'freeAccountContainer'}>
        <div className='freeAccount' onClick={() => setFreeAccountShow((v) => !v)}>
          <div className='freeAccountHeader'>
            <div className='freeAccountTitle'>Free Account Completion</div>
            <div className='freeAccountIcon'>{'>'}</div>
          </div>
          <div className='freeAccountProgress'>
            <div className='freeAccountProgressInside' style={{ width: `${progressBarValue}%` }} />
          </div>
        </div>

        <div className={!freeAccountShow ? 'freeAccountContentHide' : 'freeAccountContent'}>
          <div className='freeAccountContentItem'>
            <div className='freeAccountContentItemIconActive' />
            <div className='freeAccountContentItemText'>Select Washer Model</div>
          </div>

          <div className='freeAccountContentItem'>
            <div className='freeAccountContentItemIconActive' />
            <div className='freeAccountContentItemText'>Watch 1 Minute Tutorial</div>
          </div>

          <div className='freeAccountContentItem'>
            <div className='freeAccountContentItemIcon' />
            <div className='freeAccountContentItemText'>Save/Bookmark Model</div>
          </div>

          <div className='freeAccountContentItem'>
            <div className='freeAccountContentItemIcon' />
            <div className='freeAccountContentItemText'>Install Browser Extension</div>
          </div>

          <div className='freeAccountContentItemChromeStore'>
            <div className='freeAccountContentItemChromeStoreContainer'>
              <div className='freeAccountContentItemChromeStoreText'>Chrome Store</div>
              <div className='freeAccountContentItemChromeStoreIcon'>asd</div>
            </div>
          </div>

          <div className='freeAccountContentItem'>
            <div className='freeAccountContentItemIcon' />
            <div className='freeAccountContentItemText'>Print QR Code</div>
          </div>
        </div>
      </div>

      <div className='componentFirst'>
        <div className='componentSecond'>
          <div className='main'>
            <div className='productHeader'>
              <div className='productHeaderLeft'>
                <div className='productHeaderTitle'>BOSCH WAU28PH9GB Series 6</div>
              </div>
              <div className='productHeaderRight'>
                <div className='productHeaderBox'>Dashboard</div>
                <div className='productHeaderBox'>Activities</div>
                <div className='productHeaderBox'>Organiser</div>
              </div>
            </div>

            <div className='box'>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>manuals</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={techSpecs} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>tech specs</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={support} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>support</div>
              </div>
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>assistant</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={favoriteStore} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>products</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={service} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>services</div>
              </div>
            </div>

            <div className='box'>
              <div className='boxLeft'>
                {product.images.map((item, index) => (
                  <img src={item} alt='' key={index} className='boxLeftIMG' />
                ))}
              </div>
              <div className='boxRight'>
                <div className='boxRightText'>ALL IN ONE</div>
                <div className='boxRightText'>EASY TO USE</div>
                <div className='boxRightText'>FREE APPLIANCE TOOLS</div>

                <div className='boxRightNavBox'>
                  <div className='boxRightNavBoxItem boxRightNavBoxItemActive' />
                  <div className='boxRightNavBoxItem' />
                  <div className='boxRightNavBoxItem' />
                  <div className='boxRightNavBoxItem' />
                  <div className='boxRightNavBoxItem' />
                </div>
              </div>
            </div>

            <div className='boxContainer'>
              <div className='boxNoEffect'>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={bookmark} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>save model</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={qrCode} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>QR code</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={share} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>share</div>
                </div>
              </div>
              <div className='boxNoEffect'>
                <div className='boxItem red'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>error codes</div>
                </div>
                <div className='boxItem red'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>troubleshooting</div>
                </div>
                <div className='boxItem red'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>technicians</div>
                </div>
              </div>
            </div>

            <div className='title'>
              <div className='productHeaderTitle'>
                Explore more ways to buy or replace a BOSCH WAU28PH9GB Series 6 washer
              </div>
            </div>

            <div className='boxNoEffect'>
              <div className='boxItem'>
                <div className='boxItemIcon' style={{ backgroundColor: '#9D80FE', borderColor: '#9474FF' }}>
                  <img src={resell} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>resell</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon' style={{ backgroundColor: '#34C85A', borderColor: '#34C85A' }}>
                  <img src={recycleWhite} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>recycle</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon' style={{ backgroundColor: '#FFD60A', borderColor: '#FFD60A' }}>
                  <img src={donateWhite} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>repurpose</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon' style={{ backgroundColor: '#3E92FF', borderColor: '#3E92FF' }}>
                  <img src={favoriteCart} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>replace</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon' style={{ backgroundColor: '#FC8A4F', borderColor: '#FF6617' }}>
                  <img src={rentWhite} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>rent</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon' style={{ backgroundColor: '#113E92', borderColor: '#113E92' }}>
                  <img src={financingWhite} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>financing</div>
              </div>
            </div>

            <div className='title'>
              <div className='productHeaderTitle'>Manager Everything At Home With Device-Specific Free Apps</div>
            </div>

            <div className='boxGrid'>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon '>
                  <img src={oven} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>ovens</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={devices} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>mobiles</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={fridges} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>fridges</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={cooker} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>cookers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={adapters} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>adapters</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={vacuum} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>vacuums</div>
              </div>
              <div className='boxItem gridLine red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>boilers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={air} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>air purifiers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={microwave} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>microwaves</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={mowers} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>mowers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={washing} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>dryers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={tv} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>televisions</div>
              </div>
              <div className='boxItem gridLine red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>grills</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={coffeemaker} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>coffemakers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={light} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>lightbulbs</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={dishwasher} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>dishwashers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={hobs} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>hobs</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={radiator} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>radiators</div>
              </div>
            </div>

            <div className='colorBox'>
              <div className='colorBoxTitle'>APPS FOR PRODUCTIVE HOME COLLABORATION</div>
              <div className='colorBoxText'>connect, organize and get stuff done at home</div>
            </div>

            <div className='line' />

            <div className='footerTitle'>2022 - washers.app | Super Useful, Super Easy, Super App!</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
