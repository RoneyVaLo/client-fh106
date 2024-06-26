import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserInfo from '../components/UserInfo/ProfileInfo'
import PostNavigation from '../components/PostNavigation/PostNavigation';
import PostsView from '../components/PostsView/PostsView';
import Loader from '../components/Loaders/Loader';

// import DataPosts from '../data/posts.json';


const UserPage = () => {

    /* 
    0: Posts Propios
    1: Posts Etiquetados
    */
    const [checkedSection, setCheckedSection] = useState(0);

    const [posts, setPosts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const changePostSection = (section) => {
        setCheckedSection(section);
    };


    const user = {
        name: "Filosofía de la Ciencia",
        username: "FH-106",
        profile_image: "https://www.revistaesfinge.com/wp-content/uploads/2015/01/2f7bb693f9e8b1bbf875f0818996978d.jpg",
        quantity_post: posts ? posts.length : 0,
        followed: 0,
        followers: 0,
        biography: {
            category: "Educación Humanísticas",
            description: "Este es el portafolio perteneciente al curso FH-106 del estudiante Roney Alfonso Valdelomar López"
        }
    };

    const compareDates = (a, b) => {
        const dateA = new Date(a.publication_date);
        const dateB = new Date(b.publication_date);
        return dateB - dateA;
    };

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            const { data } = await axios.get(`https://server-fh106.onrender.com/api/posts?user=65e57068fb02872525c18f73`)

            setPosts(data.sort(compareDates));
            setIsLoading(false);
        }

        fetchPosts();
    }, []);

    return (
        <div className="w-full my-0 mx-auto">
            <header className='h-16 border-b border-gray-300'></header>

            <UserInfo user={user} />

            <PostNavigation checkedSection={checkedSection} setCheckedSection={changePostSection} />

            {isLoading ?
                <div className='w-full flex justify-center'>
                    <Loader />
                </div>
                :
                ((checkedSection === 0) && posts) && <PostsView posts={posts} />
            }


            <footer className="mt-5 pt-5 pb-5 text-center flex justify-center gap-8 items-center border-t">
                <h2 className="text-base font-medium m-0 opacity-50">
                    Roney Valdelomar
                </h2>
                <span className="text-sm opacity-50">2024</span>
            </footer>

        </div>
    )
}

export default UserPage
