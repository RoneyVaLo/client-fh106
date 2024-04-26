import React, { useState } from 'react'

const PostThumbnail = ({ post, openArticle }) => {

    const [isHovered, setIsHovered] = useState(false);

    const {images} = post;

    return (
        <article
            className='w-72 relative cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {openArticle(post)}}
        >
            <a href="#" className='no-underline'>
                <img src={images} alt={`${post._id}`} />
                
            </a>
            {isHovered && (
                <div className='w-72 bg-gray-500 opacity-40 absolute z-10 h-full inset-0'></div>
            )}
        </article>
    )
}

export default PostThumbnail
