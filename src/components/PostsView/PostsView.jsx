import React, { useState } from 'react';
import PostThumbnail from '../PostThumbnail/PostThumbnail';
import PostDetails from '../PostDetails/PostDetails';

const PostsView = ({ posts }) => {
    const [articleOpen, setArticleOpen] = useState(false);
    const [currentArticle, setCurrentArticle] = useState(false);

    const openArticle = (article) => {
        setCurrentArticle(article);
        document.body.style.overflow = 'hidden';
        setArticleOpen(true);
    };

    const closeArticle = () => {
        document.body.style.overflow = '';
        setArticleOpen(false)
    };

    return (
        <main className={`flex flex-wrap justify-center gap-1 w-full max-w-[80vw] mx-auto`}>
            {posts.map((post, index) => (
                <PostThumbnail key={index} post={post} openArticle={openArticle} closeArticle={closeArticle} />
            ))}
            {articleOpen &&
                <PostDetails currentArticle={currentArticle} closeArticle={closeArticle} />
            }
        </main>
    )
}

export default PostsView
