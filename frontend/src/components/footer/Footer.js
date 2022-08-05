import React from 'react'

import { ReactComponent as DiscordSVG } from '../../icons/Discord.svg'
import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as MSVG } from '../../icons/M.svg'

import './footer.css'
const Footer = () => {
     const handleDiscord = () => {
          window.open('')
     }

     const handleTwitter = () => {
          window.open('')
     }

     const handleM = () => {
          window.open('')
     }
     return (
          <div className='footerBC componentFirst'>
               <div className='footerMain componentSecond'>
                    <div className='footerMainLeft'>
                         <div className='footerMainLeftLogo'>Logo</div>
                         <div className='footerMainLeftText'>textUnderTitle</div>
                         <div className='footerMainLeftLinks'>
                              <TwitterSVG className='footerIcon' onClick={handleTwitter} />
                              <DiscordSVG className='footerIcon' onClick={handleDiscord} />
                              <MSVG className='footerIcon' onClick={handleM} />
                         </div>
                         <div className='footerMainLeftCopy'>Ⓒ 2021 - LOGO all rights reserved</div>
                    </div>
                    <div className='footerMainRight'>
                         <div className='footerMainRightItem'>
                              <div className='footerMainRightItemTitle'>About</div>
                              <div className='footerMainRightItemText'>Links</div>
                         </div>
                         <div className='footerMainRightItem'>
                              <div className='footerMainRightItemTitle'>Listing</div>
                              <div className='footerMainRightItemText'>Links</div>
                         </div>
                         <div className='footerMainRightItem'>
                              <div className='footerMainRightItemTitle'>Explore</div>
                              <div className='footerMainRightItemText'>Join Discord</div>
                         </div>
                         <div className='footerMainRightItem'>
                              <div className='footerMainRightItemTitle'>Get help</div>
                              <div className='footerMainRightItemText'>Join Discord</div>
                         </div>
                    </div>
                    <div className='footerMainLeftCopyMobile'>Ⓒ 2021 - TrustMarket all rights reserved</div>
               </div>
          </div>
     )
}

export default Footer
