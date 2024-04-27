import React, { useState } from 'react'

const PostThumbnail = ({ post, openArticle }) => {

    const [isHovered, setIsHovered] = useState(false);

    const { images } = post;

    return (
        <article
            className='w-72 h-56 relative cursor-pointer overflow-hidden'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => { openArticle(post) }}
        >
            <a href="#" className='no-underline block w-full h-full'>
                <img
                    className='object-cover w-full h-full'
                    src={images}
                    alt={`${post._id}`}
                />

            </a>
            {isHovered && (
                <div className='w-72 bg-gray-500 opacity-40 absolute z-10 h-full inset-0'></div>
            )}
        </article>
    )
}

export default PostThumbnail
