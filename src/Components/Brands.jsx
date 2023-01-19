import React from 'react'
import '../Styles/brands.css'

import atlassian from '../Assets/atlassian.png'
import dropbox from '../Assets/dropbox.png'
import google from '../Assets/google.png'
import slack from '../Assets/slack.png'
import shopify from '../Assets/shopify.png'

const Brands = () => {
    return (
        <div className="brands section__padding">
            <div>
                <img src={google} alt='google' />
            </div>
            <div>
                <img src={dropbox} alt='dropbox' />
            </div>
            <div>
                <img src={atlassian} alt='atlassian' />
            </div>
            <div>
                <img src={slack} alt='slack' />
            </div>
            <div>
                <img src={shopify} alt='shopify' />
            </div>
        </div>
    )
}

export default Brands