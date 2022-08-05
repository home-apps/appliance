import React, { useState } from 'react'

import products from '../../data/product.json'
import productInfo from '../../data/productInfo.json'

import washer from '../../icons/washing-machine.png'
import subscription from '../../icons/subscription.png'
import washing from '../../icons/washing.png'
import recycle from '../../icons/recycle.png'
import donate from '../../icons/donate.png'
import arrow from '../../icons/arrow.png'

import './main.css'

const Main = () => {
  const product = products[0]
  const [foldedContent, setFoldedContent] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const handleFolded = (value) => {
    let ListContainer = foldedContent
    if (ListContainer.includes(value)) {
      const index = ListContainer.indexOf(value)
      ListContainer.splice(index, 1)
    } else {
      ListContainer.push(value)
    }
    setFoldedContent([...ListContainer])
  }

  return (
    <div className='componentFirst' style={{ marginTop: '100px' }}>
      <div className='componentSecond'>
        <div className='main'>
          {/* MENU */}
          <div className='mainMenu'>
            <div className='mainMenuBox'>
              <div className='mainMenuBoxItem'>
                <div className='mainMenuBoxItemIcon' />
                <div className='mainMenuBoxItemText'>manuals</div>
              </div>
              <div className='mainMenuBoxItem'>
                <div className='mainMenuBoxItemWhiteBox' />
                <div className='mainMenuBoxItemIcon' />
                <div className='mainMenuBoxItemText2'>how-tos</div>
              </div>
              <div className='mainMenuBoxItem'>
                <div className='mainMenuBoxItemWhiteBox' style={{ width: '100%' }} />
                <div className='mainMenuBoxItemIcon' />
                <div className='mainMenuBoxItemText2'>repairs</div>
              </div>
            </div>
          </div>
          {/* Image Section */}

          <div className='mainMenuImage'>
            {product.images.map((item, index) => (
              <img src={item} alt='' key={index} className='mainMenuImageIMG' />
            ))}
          </div>

          {/* Product name */}

          <div className='mainMenuProductName'>{product.productName}</div>

          {/* product info box */}

          <div className='mainMenuInfoBox'>
            <div className='mainMenuInfoBoxLeft'>
              <div className='mainMenuInfoBoxItem'>
                Brand:
                <span style={{ color: '#060606' }}> {productInfo[0].Brand}</span>
              </div>

              <div className='mainMenuInfoBoxItem'>
                Model: <span style={{ color: '#060606' }}> {productInfo[0].Model}</span>
              </div>
              <div className='mainMenuInfoBoxItem'>
                Capacity: <span style={{ color: '#060606' }}>{productInfo[0].Capacity}</span>
              </div>
            </div>
            <div className='mainMenuInfoBoxCenter'>
              <div className='mainMenuInfoBoxItem'>
                Series: <span style={{ color: '#060606' }}>{productInfo[0].Series}</span>
              </div>
              <div className='mainMenuInfoBoxItem'>
                Region: <span style={{ color: '#060606' }}>{productInfo[0].Region}</span>
              </div>
              <div className='mainMenuInfoBoxItem'>
                Efficiency: <span style={{ color: '#060606' }}>{productInfo[0].Efficiency}</span>
              </div>
            </div>
            <div className='mainMenuInfoBoxRight'>
              <div className='mainMenuInfoBoxItem'>
                Warranty: <span style={{ color: '#060606' }}> {productInfo[0].Warranty}</span>
              </div>
              <div className='mainMenuInfoBoxItem'>
                Smart App: <span style={{ color: '#060606' }}>{productInfo[0].SmartApp}</span>
              </div>
              <div className='mainMenuInfoBoxItem'>
                <span style={{ color: '#060606' }}>{productInfo[0].Size}</span>
              </div>
            </div>
          </div>

          {/* Description */}

          <div className='mainMenuDescription'>
            <div className='mainMenuDescriptionContainer'>
              <div className='mainMenuDescriptionTitle'>Description</div>
              <div className='mainMenuDescriptionText'>{product.Description}</div>
            </div>
          </div>

          {/* Tech Specs */}

          <div className='mainMenuFolded'>
            <div className='mainMenuFoldedContainer'>
              <div
                className={
                  foldedContent.includes('techSpecs')
                    ? 'mainMenuFoldedContainerHeader mainMenuFoldedContainerHeaderActive'
                    : 'mainMenuFoldedContainerHeader'
                }
                onClick={() => handleFolded('techSpecs')}
              >
                <div
                  className={
                    foldedContent.includes('techSpecs')
                      ? 'mainMenuFoldedContainerLeft mainMenuFoldedContainerLeftActive'
                      : 'mainMenuFoldedContainerLeft'
                  }
                >
                  Tech Specs
                </div>
                <div className='mainMenuFoldedContainerRight'>
                  <img src={arrow} alt='' />
                </div>
              </div>
              {foldedContent.includes('techSpecs') && (
                <div className='mainMenuFoldedContent'>
                  {product.TechSpecs.map((item, index) => (
                    <div className='mainMenuFoldedContentItem' key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Manuals & Documents */}

          <div className='mainMenuFolded'>
            <div className='mainMenuFoldedContainer'>
              <div
                className={
                  foldedContent.includes('manuals')
                    ? 'mainMenuFoldedContainerHeader mainMenuFoldedContainerHeaderActive'
                    : 'mainMenuFoldedContainerHeader'
                }
                onClick={() => handleFolded('manuals')}
              >
                <div
                  className={
                    foldedContent.includes('manuals')
                      ? 'mainMenuFoldedContainerLeft mainMenuFoldedContainerLeftActive'
                      : 'mainMenuFoldedContainerLeft'
                  }
                >
                  Manuals & Documents
                </div>
                <div className='mainMenuFoldedContainerRight'>
                  <img src={arrow} alt='' />
                </div>
              </div>
              {foldedContent.includes('manuals') && (
                <div className='mainMenuFoldedContent'>
                  {product.TechSpecs.map((item, index) => (
                    <div className='mainMenuFoldedContentItem' key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Issues & Help */}

          <div className='mainMenuFolded'>
            <div className='mainMenuFoldedContainer'>
              <div
                className={
                  foldedContent.includes('issues')
                    ? 'mainMenuFoldedContainerHeader mainMenuFoldedContainerHeaderActive'
                    : 'mainMenuFoldedContainerHeader'
                }
                onClick={() => handleFolded('issues')}
              >
                <div
                  className={
                    foldedContent.includes('issues')
                      ? 'mainMenuFoldedContainerLeft mainMenuFoldedContainerLeftActive'
                      : 'mainMenuFoldedContainerLeft'
                  }
                >
                  Issues & Help
                </div>
                <div className='mainMenuFoldedContainerRight'>
                  <img src={arrow} alt='' />
                </div>
              </div>
              {foldedContent.includes('issues') && (
                <div className='mainMenuFoldedContent'>
                  {product.TechSpecs.map((item, index) => (
                    <div className='mainMenuFoldedContentItem' key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product services */}

          <div className='mainMenuProductServices'>
            <div className='mainMenuProductServicesContainer'>
              <div className='mainMenuProductServicesLeft'>
                <div className='mainMenuProductServicesHeader'>Products</div>
                <div className='mainMenuProductServicesContentContainer'>
                  <div className='mainMenuProductServicesContentLeft'>
                    {product.product.map((item, index) => (
                      <div className='mainMenuProductServicesContent' key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className='mainMenuProductServicesContentRight'>
                    <img src={product.productImage} alt='' className='mainMenuProductServicesIMG' />
                  </div>
                </div>
              </div>
              <div className='mainMenuProductServicesRight'>
                <div className='mainMenuProductServicesHeader'>Services</div>
                <div className='mainMenuProductServicesContentContainer'>
                  <div className='mainMenuProductServicesContentLeft'>
                    {product.services.map((item, index) => (
                      <div className='mainMenuProductServicesContent' key={index}>
                        <div className='mainMenuProductServicesContentCircle' />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className='mainMenuProductServicesContentRight'>
                    <img src={product.serviceImage} alt='' className='mainMenuProductServicesIMG' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buy, Rent, Resell, Recycle & Donate */}

          <div className='mainMenuFolded'>
            <div className='mainMenuFoldedContainer'>
              <div
                className={
                  foldedContent.includes('buySellResell')
                    ? 'mainMenuFoldedContainerHeader mainMenuFoldedContainerHeaderActive'
                    : 'mainMenuFoldedContainerHeader'
                }
                onClick={() => handleFolded('buySellResell')}
              >
                <div
                  className={
                    foldedContent.includes('buySellResell')
                      ? 'mainMenuFoldedContainerLeft mainMenuFoldedContainerLeftActive'
                      : 'mainMenuFoldedContainerLeft'
                  }
                >
                  Buy, Rent, Resell, Recycle & Donate
                </div>
                <div className='mainMenuFoldedContainerRight'>
                  <img src={arrow} alt='' />
                </div>
              </div>
              {foldedContent.includes('buySellResell') && (
                <div className='mainMenuFoldedContent'>
                  <div className='mainMenuBuyContainer'>
                    <div className='mainMenuBuyItem'>
                      <div className='mainMenuBuyItemIcon'>
                        <img src={washer} alt='' />
                      </div>
                      <div className='mainMenuBuyItemText'>buy washer</div>
                    </div>
                    <div className='mainMenuBuyItem'>
                      <div className='mainMenuBuyItemIcon'>
                        <img src={subscription} alt='' />
                      </div>
                      <div className='mainMenuBuyItemText'>rent washer</div>
                    </div>
                    <div className='mainMenuBuyItem'>
                      <div className='mainMenuBuyItemIcon'>
                        <img src={washing} alt='' />
                      </div>
                      <div className='mainMenuBuyItemText'>resell washer</div>
                    </div>
                    <div className='mainMenuBuyItem'>
                      <div className='mainMenuBuyItemIcon'>
                        <img src={recycle} alt='' />
                      </div>
                      <div className='mainMenuBuyItemText'>recycle washer</div>
                    </div>
                    <div className='mainMenuBuyItem'>
                      <div className='mainMenuBuyItemIcon'>
                        <img src={donate} alt='' />
                      </div>
                      <div className='mainMenuBuyItemText'>donate washer</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Questions & Answers */}

          <div className='mainMenuFolded'>
            <div className='mainMenuFoldedContainer'>
              <div
                className={
                  foldedContent.includes('questions')
                    ? 'mainMenuFoldedContainerHeader mainMenuFoldedContainerHeaderActive'
                    : 'mainMenuFoldedContainerHeader'
                }
                onClick={() => handleFolded('questions')}
              >
                <div
                  className={
                    foldedContent.includes('questions')
                      ? 'mainMenuFoldedContainerLeft mainMenuFoldedContainerLeftActive'
                      : 'mainMenuFoldedContainerLeft'
                  }
                >
                  Questions & Answers
                </div>
                <div className='mainMenuFoldedContainerRight'>
                  <img src={arrow} alt='' />
                </div>
              </div>
              {foldedContent.includes('questions') && (
                <div className='mainMenuFoldedContent'>
                  <div className='mainMenuFoldedContentSearch'>
                    <div className='mainMenuFoldedContentSearchInput'>
                      <input
                        type='text'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className='searchInput'
                      />
                      <div className='mainMenuFoldedContentSearchInputText'>Search</div>
                    </div>
                    <div className='mainMenuFoldedContentSearchAsk'>Ask A Question</div>
                  </div>
                  {product.TechSpecs.map((item, index) => (
                    <div className='mainMenuFoldedContentItem' key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Washer Reviews */}

          <div className='mainMenuFolded'>
            <div className='mainMenuFoldedContainer'>
              <div
                className={
                  foldedContent.includes('reviews')
                    ? 'mainMenuFoldedContainerHeader mainMenuFoldedContainerHeaderActive'
                    : 'mainMenuFoldedContainerHeader'
                }
                onClick={() => handleFolded('reviews')}
              >
                <div
                  className={
                    foldedContent.includes('reviews')
                      ? 'mainMenuFoldedContainerLeft mainMenuFoldedContainerLeftActive'
                      : 'mainMenuFoldedContainerLeft'
                  }
                >
                  Washer Reviews
                </div>
                <div className='mainMenuFoldedContainerRight'>
                  <img src={arrow} alt='' />
                </div>
              </div>
              {foldedContent.includes('reviews') && (
                <div className='mainMenuFoldedContent'>
                  {product.TechSpecs.map((item, index) => (
                    <div className='mainMenuFoldedContentItem' key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
