import React, { useEffect, useState } from 'react'

import manual from '../../icons/manual2.png'

import './dashboard.css'

const Product = () => {
  const [freeAccountShow, setFreeAccountShow] = useState(true)
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
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>tech specs</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>support</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>assistant</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>products</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>services</div>
              </div>
            </div>

            <div className='box'>
              <div className='boxLeft'></div>
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
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>save model</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>QR code</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>share</div>
                </div>
              </div>
              <div className='boxNoEffect'>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>error codes</div>
                </div>
                <div className='boxItem'>
                  <div className='boxItemIcon'>
                    <img src={manual} alt='' className='boxItemImage' />
                  </div>
                  <div className='boxItemText'>troubleshooting</div>
                </div>
                <div className='boxItem'>
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
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>resell</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>recycle</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>repurpose</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>replace</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>rent</div>
              </div>
              <div className='boxItem'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
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
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>ovens</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>mobiles</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>fridges</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>cookers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>adapters</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>vacuums</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>boilers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>air purifiers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>microwaves</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>mowers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>dryers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>televisions</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>grills</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>coffemakers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>lightbulbs</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>dishwashers</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
                </div>
                <div className='boxItemText'>hobs</div>
              </div>
              <div className='boxItem gridLine'>
                <div className='boxItemIcon'>
                  <img src={manual} alt='' className='boxItemImage' />
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
