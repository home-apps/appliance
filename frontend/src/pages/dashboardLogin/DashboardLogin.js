import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
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
import google from '../../icons/google.png'
import facebook from '../../icons/facebook.png'
import settings from '../../icons/settings.png'

import './dashboardLogin.css'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const DashboardLogin = () => {
  const nodeRef = React.useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [draggableWidth, setDraggableWidth] = useState(0)

  const [showPopup, setShowPopup] = useState(false)
  const [selectedPopupValue, setSelectedPopupValue] = useState(0)

  useEffect(() => {
    const t = document.getElementsByClassName('boxDraggable')
    setDraggableWidth(t[0].scrollWidth - 550)
  }, [])

  const onSubmit = (formData) => {
    console.log(errors)
  }

  handleSubmit(onSubmit)
  const openPopup = (value) => {
    setShowPopup(true)
    setSelectedPopupValue(value)
  }

  const product = products[0]
  return (
    <>
      <div className={showPopup ? 'popup popupActive' : 'popup'}>
        <div className='popupHeader'>
          <div
            className={selectedPopupValue === 0 ? 'popupHeaderItem popupHeaderItemActive' : 'popupHeaderItem'}
            onClick={() => openPopup(0)}
          >
            <img src={bookmark} alt='' className='popupHeaderIMG' />
            Save Model
          </div>
          <div
            className={selectedPopupValue === 1 ? 'popupHeaderItem popupHeaderItemActive' : 'popupHeaderItem'}
            onClick={() => openPopup(1)}
          >
            <img src={qrCode} alt='' className='popupHeaderIMG' />
            QR Code
          </div>
          <div
            className={selectedPopupValue === 2 ? 'popupHeaderItem popupHeaderItemActive' : 'popupHeaderItem'}
            onClick={() => openPopup(2)}
          >
            <img src={share} alt='' className='popupHeaderIMG' />
            Share
          </div>
          <div className='popupHeaderArrow' onClick={() => setShowPopup(false)}>
            {'>'}
          </div>
        </div>
        {selectedPopupValue === 0 ? (
          <div className='popupContent'>
            <div className='popupLeft'>
              <div className='popupLeftTitle'>Create New Account</div>
              <div className='popupLeftText'>
                Save this washer model in your free account and use it when you need it, no spam, privacy
                protected.
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Save your favorite products & services</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Warranty & maintenance reminders</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Find & compare prices</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Find, compare & book local technicians</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Find user manuals</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Get easy troubleshooting help</div>
              </div>
            </div>
            <div className='popupRight'>
              <input
                type='text'
                className='popupInput'
                {...register('name', { required: true })}
                placeholder={'Name'}
              />
              <input
                type='text'
                className='popupInput'
                {...register('email', { required: true, pattern: { value: EMAIL_REGEX } })}
                placeholder={'Email'}
              />
              <input
                type='password'
                className='popupInput'
                {...register('password', { required: true })}
                placeholder={'Password'}
              />

              <div className='popupTerms'>
                <div className='popupTermsBox' />
                <div className='popupTermsText'>
                  I read and agree{' '}
                  <span style={{ color: '#3E92FF', textDecoration: 'underline' }}>Terms & Conditions</span>
                </div>
              </div>
              <div className='popupContinueWith'>
                <div className='popupContinueWithIcon'>
                  <img src={google} alt='' className='popupContinueWithIMG' />
                </div>
                <div className='popupContinueWithText'>Continue with Google</div>
              </div>
              <div className='popupContinueWith'>
                <div className='popupContinueWithIcon'>
                  <img src={facebook} alt='' className='popupContinueWithIMG' />
                </div>
                <div className='popupContinueWithText'>Continue with Facebook</div>
              </div>
              <div className='popupLogin'>
                Already have an account?{' '}
                <span style={{ color: '#3E92FF', textDecoration: 'underline' }}>Log-in Here</span>
              </div>
            </div>
          </div>
        ) : selectedPopupValue === 1 ? (
          <div className='popupContent'>
            <div className='popupLeft'>
              <div className='popupLeftTitle'>BOSCH WAU28PH9GB Series 6 QR Code</div>
              <div className='popupLeftText'>
                Save or share this QR code with household members, technicians or for anyone who needs tech specs.
              </div>
              <div className='popupLeftText'>No more guessing, print it, stick it to find it quickly.</div>
            </div>
            <div className='popupRight'>
              <div className='popupLeftTitle' style={{ marginBottom: '22px' }}>
                Save & Share Your QR Code
              </div>
              <input
                type='text'
                className='popupInput'
                {...register('name', { required: true })}
                placeholder={'Name'}
              />
              <input
                type='text'
                className='popupInput'
                {...register('email', { required: true, pattern: { value: EMAIL_REGEX } })}
                placeholder={'Email'}
              />
              <div className='popupTerms'>
                <div className='popupTermsBox' />
                <div className='popupTermsText'>
                  I read and agree{' '}
                  <span style={{ color: '#3E92FF', textDecoration: 'underline' }}>Terms & Conditions</span>
                </div>
              </div>

              <div className='popupButton'>PRINT QR CODE</div>
              <div className='popupButton popupButtonColor'>DOWNLOAD QR CODE</div>
            </div>
          </div>
        ) : (
          <div className='popupContent'>
            <div className='popupLeft'>
              <div className='popupLeftTitle'>Share This Washer Model</div>
              <div className='popupLeftText'>
                Share a simple link or share the washer in your own account for a friend, household member or a
                technician who needs tech specs.
              </div>

              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>View device model</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Join device model (household member)</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>View device specs (technicians)</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>View device details (selling/donating)</div>
              </div>
              <div className='popupCircleItem'>
                <div className='popupCircleItemDot' />
                <div className='popupCircleItemText'>Share to get the right spare parts</div>
              </div>
            </div>
            <div className='popupRight'>
              <div className='popupRightScare'>
                <div className='popupRightScareLeft'>
                  <input
                    type='text'
                    className='popupInput'
                    style={{ width: 'calc(100% - 50px)' }}
                    {...register('shareModel', { required: true, pattern: { value: EMAIL_REGEX } })}
                    placeholder={'"Hi, this is my washer model"'}
                  />
                  <div className='popupInputEmail'>
                    <input
                      type='text'
                      className='popupInputNoBorder'
                      {...register('email', { required: true, pattern: { value: EMAIL_REGEX } })}
                      placeholder={'Enter email'}
                    />
                    <div className='popupInputEmailButton'>Send</div>
                  </div>
                  <input
                    type='text'
                    className='popupInput'
                    style={{ width: 'calc(100% - 50px)' }}
                    {...register('password', { required: true, pattern: { value: EMAIL_REGEX } })}
                    placeholder={'Share with Password'}
                  />
                </div>
                <div className='popupRightScareRight'>
                  <div className='popupRightScareRightItem'>
                    <div className='popupRightScareRightItemIcon'>
                      <img src={settings} alt='' className='popupRightScareRightItemIconIMG' />
                    </div>
                    <div className='popupRightScareRightItemText'>Can View</div>
                  </div>
                </div>
              </div>

              <div className='popupRightScare'>
                <div className='popupRightScareLeft'>
                  <div className='popupRightScareLink'>Copy Link</div>
                  <div className='popupRightScareLink2'>Share with Password</div>
                </div>
                <div className='popupRightScareRight'>
                  <div className='popupRightScareRightItem'>
                    <div className='popupRightScareRightItemIcon'>
                      <img src={settings} alt='' className='popupRightScareRightItemIconIMG' />
                    </div>
                    <div className='popupRightScareRightItemText'>Can View</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
                <div className='boxItem' onClick={() => openPopup(0)}>
                  <div className='boxItemIcon'>
                    <img src={bookmark} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>save model</div>
                </div>
                <div className='boxItem' onClick={() => openPopup(1)}>
                  <div className='boxItemIcon'>
                    <img src={qrCode} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>QR code</div>
                </div>
                <div className='boxItem' onClick={() => openPopup(2)}>
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
