import React from 'react'
import Article from './Article'
import '../Styles/blog.css'

import blog1 from '../Assets/blog01.png'
import blog2 from '../Assets/blog02.png'
import blog3 from '../Assets/blog03.png'
import blog4 from '../Assets/blog04.png'
import blog5 from '../Assets/blog05.png'

const Blog = () => {
    return (
        <div className="blog section__padding" id='blog'>
            <div className="blog-heading">
                <h1 className='gradient__text   '>A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="blog-container">
                <div className="blog-container-groupA">
                    <Article imgurl={blog1} alt={blog1} date={'Sep 26, 2021'} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
                </div>
                <div className="blog-container-groupB">
                    <Article imgurl={blog2} alt={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgurl={blog3} alt={blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgurl={blog4} alt={blog4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgurl={blog5} alt={blog5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog