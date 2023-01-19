import React from 'react'
import '../Styles/article.css'

const Article = ({ imgurl, title, date, alt }) => {
    return (
        <div className="article">
            <div className="article-image">
                <img src={imgurl} alt={alt} />
            </div>
            <div className="article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read the Article</p>
            </div>
        </div>
    )
}

export default Article              