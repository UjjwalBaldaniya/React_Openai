import React from 'react'
import '../Styles/header.css'

import people from '../Assets/people.png'
import ai from '../Assets/ai.png'

const Header = () => {
    return (
        <div className="header section__padding" id='home'>
            <div className="header-content">
                <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="header-content__input">
                    <input type='email' placeholder='Email' required />
                    <button type='button'>Get Started</button>
                </div>
                <div className="header-content__people">
                    <img src={people} alt='people__photo' />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="header__image">
                <img src={ai} alt='ai__photo' />
            </div>
        </div>
    )
}

export default Header