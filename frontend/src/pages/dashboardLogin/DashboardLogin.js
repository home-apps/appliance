import React, { useEffect, useState } from 'react'

import Draggable from 'react-draggable'

import products from '../../data/product.json'

import manual from '../../icons/manual2.png'
import favoriteStore from '../../icons/favoriteStore.png'
import washing from '../../icons/washing.png'
import appliances from '../../icons/appliances.png'
import sell from '../../icons/sell.png'
import bookmark from '../../icons/bookmark.png'
import qrCode from '../../icons/qrCode.png'
import share from '../../icons/share.png'
import resell from '../../icons/resell.png'
import recycleWhite from '../../icons/recycleWhite.png'
import donateWhite from '../../icons/donateWhite.png'
import favoriteCart from '../../icons/favoriteCart.png'
import rentWhite from '../../icons/rentWhite.png'
import financingWhite from '../../icons/financingWhite.png'
import chat from '../../icons/chat.png'
import syncSettings from '../../icons/syncSettings.png'
import autofill2 from '../../icons/autofill2.png'
import apps2 from '../../icons/apps2.png'
import multichannel from '../../icons/multichannel.png'
import fridges from '../../icons/fridges.png'
import devices from '../../icons/devices.png'
import light from '../../icons/light.png'
import oven from '../../icons/oven.png'
import cooker from '../../icons/cooker.png'

import './dashboardLogin.css'

const DashboardLogin = () => {
  const nodeRef = React.useRef(null)

  const [draggableWidth, setDraggableWidth] = useState(0)

  useEffect(() => {
    const t = document.getElementsByClassName('boxDraggable')
    setDraggableWidth(t[0].scrollWidth - 550)
  }, [])

  const product = products[0]
  return (
    <>
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
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>reminders</div>
              </div>
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>tasks</div>
              </div>
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>assistant</div>
              </div>
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>my orders</div>
              </div>
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>warranties</div>
              </div>
              <div className='boxItem red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>registration</div>
              </div>
            </div>

            <div className='box'>
              <div className='boxLeft'>
                <Draggable
                  nodeRef={nodeRef}
                  axis='x'
                  bounds={{ top: 0, left: -draggableWidth / 2, right: draggableWidth / 2, bottom: 0 }}
                >
                  <div className='boxDraggable' ref={nodeRef}>
                    {product.images.map((item, index) => (
                      <img src={item} alt='' key={index} className='boxLeftIMG' />
                    ))}
                  </div>
                </Draggable>
              </div>
              <div className='boxRightGrid'>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={appliances} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>tech specs</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>manuals</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={washing} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>programmes</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={favoriteStore} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>shopping</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={sell} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>services</div>
                </div>
                <div className='boxItem red'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>maintenance</div>
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

            <div className='boxGrid boxGrid2'>
              <div className='boxItem gridLine2 red'>
                <div className='boxItemIcon '>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>explainers</div>
              </div>
              <div className='boxItem gridLine2'>
                <div className='boxItemIcon'>
                  <img src={chat} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>questions</div>
              </div>
              <div className='boxItem gridLine2'>
                <div className='boxItemIcon'>
                  <img src={syncSettings} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>updates</div>
              </div>
              <div className='boxItem gridLine2 red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>safety</div>
              </div>
              <div className='boxItem gridLine2'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>compatibility</div>
              </div>
              <div className='boxItem gridLine2'>
                <div className='boxItemIcon'>
                  <img src={autofill2} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>news</div>
              </div>
              <div className='boxItem gridLine2'>
                <div className='boxItemIcon'>
                  <img src={multichannel} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>reviews</div>
              </div>
              <div className='boxItem gridLine2 red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>newsletter</div>
              </div>
              <div className='boxItem gridLine2'>
                <div className='boxItemIcon'>
                  <img src={apps2} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>add-ons</div>
              </div>
              <div className='boxItem gridLine2 red'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>new washer</div>
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

            <div className='colorBox'>
              <div className='colorBoxTitle'>EXPLORE MORE APPS FOR PRODUCTIVE HOME COLLABORATION</div>
              <div className='colorBoxText'>connect, organize and get stuff done at home</div>
            </div>

            <div className='box'>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={washing} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>resell</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={fridges} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>recycle</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={devices} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>repurpose</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={light} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>replace</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={oven} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>rent</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={cooker} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>financing?</div>
              </div>
            </div>

            <div className='line' />

            <div className='footerTitle'>2022 - washers.app | Super Useful, Super Easy, Super App!</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLogin
