import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import Draggable from 'react-draggable'

import products from '../../data/product.json'
import adsList from '../../data/ads.json'

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
import google from '../../icons/google.png'
import facebook from '../../icons/facebook.png'
import settings from '../../icons/settings.png'
import QRcode from '../../icons/QRcode.jpg'
import boiler from '../../icons/boiler.png'
import grill from '../../icons/grill.png'
import redError from '../../icons/redError.png'
import redRepair from '../../icons/redRepair.png'
import redTechnician from '../../icons/redTechnician.png'
import hosstAPP from '../../icons/hosstAPP.png'
import repairs from '../../icons/repairs.png'
import Technicians from '../../icons/Technicians.png'
import info from '../../icons/info.png'
import microphone2 from '../../icons/microphone2.png'
import upload from '../../icons/upload.png'
import help from '../../icons/help.png'
import arrow2 from '../../icons/arrow2.png'
import reminderNotification from '../../icons/reminderNotification.png'

import './dashboard.css'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Product = () => {
  const product = products[0]
  const nodeRef = React.useRef(null)

  const [freeAccountShow, setFreeAccountShow] = useState(false)
  const [progressBarValue, setProgressBarValue] = useState(40)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPopupValue, setSelectedPopupValue] = useState(0)
  const [showAssistant, setShowAssistant] = useState(false)
  const [selectedAssistantValue, setSelectedAssistantValue] = useState(0)

  const [draggableWidth, setDraggableWidth] = useState(0)

  const [activeAds, setActiveAds] = useState(0)

  const ads = adsList[activeAds]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  //SET progress bar value
  useEffect(() => {
    setProgressBarValue(40)
    const t = document.getElementsByClassName('boxDraggable')
    setDraggableWidth(t[0].scrollWidth - 550)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeAds < 4) {
        setActiveAds(activeAds + 1)
      } else {
        setActiveAds(0)
      }
    }, 4500)

    return () => {
      clearInterval(interval)
    }
  }, [activeAds])

  const onSubmit = (formData) => {
    console.log(errors)
  }

  handleSubmit(onSubmit)
  const openPopup = (value) => {
    setShowAssistant(false)
    setShowPopup(true)
    setSelectedPopupValue(value)
  }
  const openAssistantPopup = (value) => {
    setShowPopup(false)
    setShowAssistant(true)
    setSelectedAssistantValue(value)
  }

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
            <img src={arrow2} alt='' className='popupHeaderArrowImg' />
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
              <div className='popupLeftIMG'>
                <img src={QRcode} alt='' className='popupLeftImage' />
              </div>
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

      <div className={showAssistant ? 'popup popupActive' : 'popup'}>
        <div className='popupHeader'>
          <div
            className={selectedAssistantValue === 0 ? 'popupHeaderItem popupHeaderItemActive' : 'popupHeaderItem'}
            onClick={() => openAssistantPopup(0)}
          >
            <img src={hosstAPP} alt='' className='popupHeaderIMG' />
            My Assistant
          </div>
          <div
            className={selectedAssistantValue === 1 ? 'popupHeaderItem popupHeaderItemActive' : 'popupHeaderItem'}
            onClick={() => openAssistantPopup(1)}
          >
            <img src={info} alt='' className='popupHeaderIMG' />
            Frequent Ask Questions
          </div>
          <div className='popupHeaderArrow' onClick={() => setShowAssistant(false)}>
            <img src={arrow2} alt='' className='popupHeaderArrowImg' />
          </div>
        </div>

        {selectedAssistantValue === 0 ? (
          <div className='popupContent'>
            <div className='popupLeft2'>
              <div className='popupAssistantItem'>
                <img src={manual} alt='' className='popupAssistantItemIcon' />
                <div className='popupAssistantItemText'>Find a washer user manual</div>
              </div>
              <div className='popupAssistantItem'>
                <img src={repairs} alt='' className='popupAssistantItemIcon' />
                <div className='popupAssistantItemText'>Washer troubleshooting help</div>
              </div>
              <div className='popupAssistantItem'>
                <img src={Technicians} alt='' className='popupAssistantItemIcon' />
                <div className='popupAssistantItemText'>Find a washer technician</div>
              </div>
              <div className='popupAssistantItem'>
                <img src={favoriteStore} alt='' className='popupAssistantItemIcon' />
                <div className='popupAssistantItemText'>Find a new washer or product</div>
              </div>
              <div className='popupAssistantItem'>
                <img src={reminderNotification} alt='' className='popupAssistantItemIcon' />
                <div className='popupAssistantItemText'>Create washer related reminder</div>
              </div>
              <div className='popupAssistantItem'>
                <img src={qrCode} alt='' className='popupAssistantItemIcon' />
                <div className='popupAssistantItemText'>Print my washer QR code</div>
              </div>
            </div>
            <div className='popupRight2' style={{ justifyContent: 'space-between' }}>
              <div className='popupAssistantMessageBoxHeader'>
                <div className='popupAssistantMessageBoxHeaderItem'>
                  <img src={hosstAPP} alt='' className='popupAssistantMessageBoxHeaderItemIcon' />
                  <div className='popupAssistantMessageBoxHeaderItemTextActive'>How can I help?</div>
                </div>
                <div className='popupAssistantMessageBoxHeaderItem'>
                  <div className='popupAssistantMessageBoxHeaderItemText'>I need help with my Bosh washer</div>
                </div>
              </div>
              <div className='popupAssistantMessageBoxFooter'>
                <input
                  type='text'
                  placeholder='type message here'
                  className='popupAssistantMessageBoxFooterInput'
                />
                <div className='popupAssistantMessageBoxFooterIcon'>
                  <img src={upload} alt='' className='popupAssistantMessageBoxFooterIconIMG' />
                </div>
                <div className='popupAssistantMessageBoxFooterIcon'>
                  <img src={microphone2} alt='' className='popupAssistantMessageBoxFooterIconIMG' />
                </div>
              </div>
            </div>
          </div>
        ) : selectedAssistantValue === 1 ? (
          <div className='popupContent'>
            <div className='popupLeft2'>
              <div className='popupFAQ'>
                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How can I find my washer model?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How can I add/save my washer model?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How to find a good washer?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>Is this app free to use?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How can I get technician quotes?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How to get troubleshooting help?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>What to do if my model isn't listed?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How can I list my services?</div>
                </div>

                <div className='popupFAQItem'>
                  <div className='popupFAQItemIcon'>
                    <img src={help} alt='' className='popupFAQItemIMG' />
                  </div>
                  <div className='popupFAQItemText'>How can I list my products?</div>
                </div>
              </div>
            </div>
            <div className='popupRight2'>
              <div className='popupAssistantMessageBoxHeader'>
                <div className='popupAssistantMessageBoxHeaderItem'>
                  <div className='popupAssistantMessageBoxHeaderItemText'>
                    Here is some help guides for the Bosch washer model WAU28PH9GB.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
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
              <div className='boxItem' onClick={() => openAssistantPopup(0)}>
                <div className='boxItemIcon'>
                  <img src={hosstAPP} alt='' className='boxItemImage' />
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
              <div className='boxRight' style={{ backgroundColor: ads.color }}>
                <div className='boxRightText'>{ads.textOne}</div>
                <div className='boxRightText'>{ads.textTwo}</div>
                <div className='boxRightText'>{ads.textThree}</div>

                <div className='boxRightNavBox'>
                  <div
                    className={
                      activeAds === 0 ? 'boxRightNavBoxItem boxRightNavBoxItemActive' : 'boxRightNavBoxItem'
                    }
                    onClick={() => setActiveAds(0)}
                  />
                  <div
                    className={
                      activeAds === 1 ? 'boxRightNavBoxItem boxRightNavBoxItemActive' : 'boxRightNavBoxItem'
                    }
                    onClick={() => setActiveAds(1)}
                  />
                  <div
                    className={
                      activeAds === 2 ? 'boxRightNavBoxItem boxRightNavBoxItemActive' : 'boxRightNavBoxItem'
                    }
                    onClick={() => setActiveAds(2)}
                  />
                  <div
                    className={
                      activeAds === 3 ? 'boxRightNavBoxItem boxRightNavBoxItemActive' : 'boxRightNavBoxItem'
                    }
                    onClick={() => setActiveAds(3)}
                  />
                  <div
                    className={
                      activeAds === 4 ? 'boxRightNavBoxItem boxRightNavBoxItemActive' : 'boxRightNavBoxItem'
                    }
                    onClick={() => setActiveAds(4)}
                  />
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
              <div className='boxNoEffect' style={{ backgroundColor: '#FF605F', border: '1px solid #FF605F' }}>
                <div className='boxItem '>
                  <div className='boxItemIcon' style={{ border: '1px solid #FF5E3D' }}>
                    <img src={redError} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText' style={{ color: '#ffffff' }}>
                    error codes
                  </div>
                </div>
                <div className='boxItem '>
                  <div className='boxItemIcon' style={{ border: '1px solid #FF5E3D' }}>
                    <img src={redRepair} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText' style={{ color: '#ffffff' }}>
                    troubleshooting
                  </div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon' style={{ border: '1px solid #FF5E3D' }}>
                    <img src={redTechnician} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText' style={{ color: '#ffffff' }}>
                    technicians
                  </div>
                </div>
              </div>
            </div>

            <div className='title'>
              <div className='productHeaderTitle'>Manage Everything At Home With Device-Specific Free Apps</div>
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
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={boiler} alt='' className='boxItemImage' />
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
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={grill} alt='' className='boxItemImage' />
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
